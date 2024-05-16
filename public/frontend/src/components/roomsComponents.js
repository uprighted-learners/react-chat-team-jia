import React, { useState, useEffect } from 'react'

// this is the component that will be used to display the rooms crud
export default function RoomsComponents() {
  const [messages, setRooms] = useState({ name: '', messages: [] })// this will be used to store the messages
  const [newMessage, setNewMessage] = useState('')// this will be used to store the new message
  const [room, setRoom] = useState({ name: '', messages: [] })// this will be used to store the room name
  const [body, setBody] = useState('')// this will be used to store the message body
  const [user, setUser] = useState('')// this will be used to store the user name
  const [id, setId] = useState('')// this will be used to store the id of the message to be deleted

// use effect to fetch room
  useEffect(() => {
    fetch('`http://localhost:8080/messages/rooms/${roomId}')// fetch room endpoint
      .then(response => response.json())// parse response to json
      .then(data => setRoom(data.room))// set room state
      .catch(error => console.error(error))// catch any errors
  }, [])


  // use effect to fetch all messages
  useEffect(() => {
    fetchRoomsMessages()// this will run only once when the component mounts
  }, [
    newMessage // this will re-run the effect when the value of newMessage changes
  ])


  // fetch all message endpoints
  const fetchRoomsMessages = async () => {
    const response = await fetch('`http://localhost:8080/messages/rooms/${roomId} `')// fetch messages endpoint
    const data = await response.json()
    setRooms(data)
  }

  //handle new message submit
  const handleNewMessageSubmit = async (event) => {
    event.preventDefault()
    setNewMessage(event.target.value)
  }

//render the rooms
  return (
    <div>
      <h1>{room.name}</h1>
      <>
        {rooms.messages.map((messages, rooms) => (
          <div key={message.id}>
            <h2>{message.user}</h2>
            <p>{message.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}


export default RoomsComponent;