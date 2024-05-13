import React, { useState, useEffect } from 'react';

export default function MessagesComponent({ roomName, messages }) {
  // this will be used to store the messages and the name of the room
  const [messages, setMessages] = useState({ name: '', messages: [] });

  // this is the useEffect hook that will be used to fetch the messages from the api endpoint

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Fetch messages from the API endpoint and set the messages state with the response data
        const response = await fetch(
          '`http://localhost:8080/messages/get/:room',
        );
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchMessages();
  }, [roomId]);

  //see if this is what is needed for the fetch messages or the top parent, which one ?

  //POST, fetching the back end api point
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/messages/create/:room',
      );
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //GET, fetch the back end read api end point
  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:8080/messages/get/:id');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //PUT, fetching the back end api end point
  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:8080/messages/update/:id');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //DELETE, fetching the back end api end point
  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:8080/messages/delete/:id');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  fetchMessages();

  //need to render the back end messages
  // this will render the messages in the room

  return (
    <div>
      <h1>{roomName}</h1>
      <>
        {messages.messages.map((roomName, messages) => (
          <div key={message.id}>
            <h2>{message.user}</h2>
            <p>{message.body}</p>
          </div>
        ))}
      </>
    </div>
  );
}

//need to render the back end messages
// this will render the messages in the room
return (
    <div>
      <h1>Rooms</h1>
      {rooms.map((room, index) => (
        <div key={index}>
          <h2>{room.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default MessagesComponent;