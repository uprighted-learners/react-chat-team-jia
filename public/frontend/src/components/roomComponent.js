import React, { useState, useEffect } from 'react'

export default function roomComponent() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      // Fetch messages from the API endpoint and set the messages state with the response data
      try {
        const response = await fetch('`http://localhost:8080/messages/rooms/${roomId}');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the fetchMessages function when the component mounts to fetch messages from the API endpoint
    fetchMessages();
  }, []);

// this will render the message component
  return (
    <div>
      <h1>Chat Room</h1>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={fetchMessages}>Fetch Messages</button>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <h2>{message.user}</h2>
            <p>{message.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default roomComponent;