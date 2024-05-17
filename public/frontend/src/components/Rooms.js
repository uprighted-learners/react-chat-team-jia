import React, { useState, useEffect } from 'react';

export default function Rooms({ setRoomID }) {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');
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
  return (
    <>
      <div>
        {fetchRooms};
        {rooms.map((room) => (
          <h1 key={room._id} onClick={setRoomID(room._id)}>
            {' '}
            {room.name}:<span>{room.description}</span>
          </h1>
        ))}
      </div>
      <div>
        <h2>Type in the Name of the Room You'd Like to Create</h2>
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

