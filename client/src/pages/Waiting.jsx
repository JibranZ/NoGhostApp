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
 

  // the 0 creates an infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex(prevIndex =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
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


