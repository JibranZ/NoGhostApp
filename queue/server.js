const express = require('express'); 
const cors = require('cors');
const app = express(); 
const port = 3019; 


const queue = [] 
const matches = {} 

app.use(cors()); 
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
  res.send('Online!');
});



// input will be index of the requester 
// output will be username of a random user 
function pairingMechanism (excludeIndex) {
	

	const validIndices = queue
		.map((item, index) => ({ index, status: item.status }))  
		.filter(({ status }) => status !== 'matched')  
		.filter(({ index }) => index !== excludeIndex)
		.map(({ index }) => index); 

    if (validIndices.length === 0) {
        return null;
    }

    // Pick a random index from the valid indices
    const randomIndex = Math.floor(Math.random() * validIndices.length);
    
    // Return the randomly selected index
    return validIndices[randomIndex];
}


// pairs the user with the name reqUsername to someone 
function pairUsers (reqUsername) {
	console.log('Pairing users...');

	if (matches[reqUsername]) {
		console.log (`User ${reqUsername} matched already`)
	}

  	let requesterIndex = queue.findIndex(user => user.username === reqUsername);
	console.log ("Requester: ", requesterIndex);

	// who they will get paired with 
	let targetIndex = pairingMechanism(requesterIndex);
	let target = queue[targetIndex].username;

	console.log (`${reqUsername} matched to ${target}`)
	return target;
};



// if successful. user starts waiting 
app.post('/queueconnect', (req, res) => {
	const { username } = req.body; 
	if (!username) {
		return res.status(400).send('Error -- username');
	}
	if ( queue[username] ) {
		return res.status(400).send('Error: username taken');
	}
	
	// pushing time stamp
	const user = {
        username: username,
        status: 'waiting',
        connectedAt: Date.now(),
        conversation: 0
    };
    queue.push(user);

 	res.status(200).send(`${username} connected`);
	try { 
		let partner = pairUsers(username);
			
		if (partner === null) { return;} 
		if (partner === username) { return;} 
		
		if ( matches[partner] ) {
			console.log("Partner already has matches");
		}
		else { 
			// storing matches for both users 
			matches [username] = partner;
			matches [partner] = username;

            queue.forEach(user => {
                if (user.username === username || user.username === partner) {
                    user.status = 'matched';
                }
            });
		}

	}
	catch (e) {
		console.log ("no matches were made -- most likely because you are the only user"); 
	}

});



// Function to clean up a user from the queue and matches
function cleanUpUser(username) {
    // Remove the user from the queue
    queue = queue.filter(user => user.username !== username);

    // Remove the user from matches and their partner
    if (matches[username]) {
        const partner = matches[username];
        delete matches[username];
        delete matches[partner]; // Remove partner's entry
    }
}


app.post('/queuedisconnect', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).send('Error -- username');
    }

    // Perform cleanup
    cleanUpUser(username);

    res.status(200).send(`${username} has been cleaned up.`);
});


// Endpoint for users to check their match
app.get('/checkmatch/:username', (req, res) => {
    const { username } = req.params;
    const match = matches[username];
    if (match) {
        res.status(200).json({ matchedWith: match });
    } else {
        res.status(404).send('No match found');
    }
});


function returnWaiting() {
	console.log(queue);
	console.log(matches);
}

// logging waiting users
setInterval(returnWaiting, 10000);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
