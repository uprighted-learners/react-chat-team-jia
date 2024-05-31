import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//this will be the component that will display the messages for the room selected by the user in the Rooms component
export default function MessagesComponent({ roomSelected, roomID }) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');
  const [body, setBody] = useState('');
  const [room, setRoom] = useState(roomSelected);

  // this function will post the messages to the database and then set the messages state to the new messages array that includes the new message that was posted by the user
  //this is a post
  const postMessages = async (room, user, body) => {
    try {
      const response = await fetch(
        `http://localhost:8080/messages/create/${roomSelected}`,
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
      // console.error('Error:', error);
    }
  };

  // this function will fetch the messages from the database and then set the messages state to the messages array that was fetched from the database
  //this is a GET
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/messages/get/${room}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error:', error);
      setMessages([]);
    }
  };

  // this function will update the messages in the database and then set the messages state to the new messages array that includes the new message that was posted by the user
  //this is a PUT
  const updateMessages = async () => {
    try {
      // this is where the messages are updated in the database by sending a PUT request to the server with the room name as the parameter
      const response = await fetch(
        `http://localhost:8080/messages/update/${room}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      // this is where the messages state is set to the new messages array that includes the new message that was posted by the user
      setMessages(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // this function will delete the messages from the database and then set the messages state to the new messages array that includes the new message that was posted by the user
  //this is a DELETE
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
      // this is where the messages state is set to the new messages array that includes the new message that was posted by the user
      setMessages(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // this is where the messages are fetched from the database when the component is mounted and the roomSelected state is updated
  useEffect(() => {
    fetchMessages();
  }, [roomSelected]);

  // this is where the messages will be rendered to the screen and the user can post messages to the database by typing in their name and message in the input fields and then clicking the send message button
  return (
    <>
      <div>
        <h1>{roomSelected}</h1>
        {messages.length > 0 ? (
          messages.map((message) => (
            <div key={message.id}>
              <h2>{message.user}</h2>
              <p>{message.body}</p>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
      <form>
        <input
          type='text'
          placeholder='Type your name here'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Type your message here'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            postMessages(room, user, body);
          }}
        >
          Send Message
        </button>
      </form>
    </>
  );
}

