import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Rooms({ setRoomSelected }) {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch('http://localhost:8080/rooms/getallrooms', {
        method: 'GET',
      });
      const data = await response.json();
      setRooms(data);
      console.log(rooms);
    } catch (error) {
      alert('Failed to fetch rooms:' + error.message);
    }
  };
//This function allows the client to create a new chat room and their description//
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/rooms/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: roomName, description }),
    })
      .then((res) => res.json())
      .then(setRoomName(''), setDescription(''))
      .catch((error) => console.error('failed to create', error));
  };
  function goToMessages(location) {
    setRoomSelected(location);
    navigate(`/messages/${location}`);
  }
  return (
    <>
      <div>
  {/* This will grab the rooms from the MongoDB by the ID on the back end and display to the front */}
        {fetchRooms}
        {rooms.map((room) => (
          <h1 key={room._id}>
            {' '}
            {room.name}:<span>{room.description}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                goToMessages(room._id);
              }}
            >
              Go To Room!
            </button>
          </h1>
        ))}
      </div>
      <div>
        <h2>Type in the Name of the Room You'd Like to Create</h2>
        {/* form added to front end so that client can add a room name and a description */}
        <form>
          <input
            type='text'
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
          />
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleSubmit}>Send</button>
        </form>
      </div>
    </>
  );
}

