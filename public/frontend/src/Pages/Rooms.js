import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Rooms({ setRoomSelected }) {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchRooms();
  }, []);
  //This is a GET request, GET comes from backend
  const fetchRooms = async () => {
    try {
      const response = await fetch("http://localhost:8080/rooms/getallrooms", {
        method: "GET",
      });
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      alert("Failed to fetch rooms:" + error.message);
    }
  };
  //POST request, creates new rooms//
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/rooms/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: roomName, description }),
    })
      .then((res) => res.json())
      .then(setRoomName(""), setDescription(""))
      .catch((error) => console.error("failed to create", error));
  };

  // redirects to specific room
  function goToMessages(location) {
    setRoomSelected(location);
    navigate(`/messages/${location}`);
  }
  return (
    <>
      <div>
        {/* Below renders all rooms and adds button and renders message to go to room */}
        {fetchRooms}
        {rooms.map((room) => (
          <h1 key={room._id}>
            {" "}
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
        {/* form to take room name and description from user input*/}
        <form>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* //On Click a new room is POSTed */}
          <button onClick={handleSubmit}>Send</button>
        </form>
      </div>
    </>
  );
}
