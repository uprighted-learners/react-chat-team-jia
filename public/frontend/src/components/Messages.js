import React, { useState, useEffect } from 'react';

export default function MessagesComponent({ roomID }) {
  // this will be used to store the messages and the name of the room
  const [messages, setMessages] = useState({ name: '', messages: [] });

  // this is the useEffect hook that will be used to fetch the messages from the api endpoint

  useEffect(() => {
    fetchMessages();
  }, [roomID]);

  //POST, fetching the back end api point
  const postMessages = async (room, user, body) => {
    try {
      const response = await fetch(
        `http://localhost:8080/messages/create/${roomID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ room, user, body }),
        },
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
      const response = await fetch(
        `http://localhost:8080/messages/get/${roomID}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //PUT, fetching the back end api end point
  const updateMessages = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/messages/update/${roomID}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //DELETE, fetching the back end api end point
  const deleteMessages = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/messages/delete/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
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
      <h1>{'room name goes here'}</h1>
      <>
        {messages.map((message) => (
          <div key={message.id}>
            <h2>{message.user}</h2>
            <p>{message.body}</p>
          </div>
        ))}
      </>
    </div>
  );
}

