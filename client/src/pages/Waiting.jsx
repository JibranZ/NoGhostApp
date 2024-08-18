import { useState, useEffect } from 'react';
import tranStyle from './Transition.module.css';
import { useNavigate } from 'react-router-dom';

function WaitingScreen() {
  const messages = [
    'Finding Available People..',
    'Analyzing for a Connection..', 
    'Pairing....',
    'Connecting ...',
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  const [completed, setComplete] = useState(false);


  const navigate = useNavigate();

  const goToChat = () => {
		navigate('/chat'); 
  };

  // Handle showing and hiding questions
  useEffect(() => {
    if (completed) {
	  goToChat();
    }
  }, [completed]);


	const handleConnect = async () => {
        // Basic validation
        // if (!username) {
        //     setResponseMessage('Error -- username is required');
        //     return;
        // }
		const username = "react";

        try {
            // Make the POST request to the /queueconnect endpoint
            const response = await fetch('http://localhost:3019/queueconnect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username })
            });

            // Check if the response is ok (status code 200-299)
            if (response.ok) {
                const result = await response.text(); // Read the response body as text
                console.log (result); // Update state with success message
            } else {
                const errorText = await response.text(); // Read the response body as text
                console.log (`Error: ${errorText}`); // Update state with error message
            }
        } catch (error) {
            console.error('Error connecting to the server:', error);
        }
	}
 

  // the 0 creates an infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex(prevIndex =>
        prevIndex === messages.length - 1 ? setComplete(true) : prevIndex + 1
      );
	  handleConnect();
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <>
      <div className={tranStyle.baseGradient}>
		<h1>
        {messages[messageIndex]}
		</h1> 
      </div>
    </>
  );
}

export default WaitingScreen;


