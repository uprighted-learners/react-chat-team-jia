import React, { useState, useEffect } from "react";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch("localhost:8080/rooms/getAllrooms");
      const data = await response.json();
      setRooms(data);
      // } console.log(Rooms);
    } catch (error) {
      alert("Failed to fetch rooms: " + error.message);
    }
  };

  return [fetchRooms];

  // return (
  //   <div>
  //     <h2>Click On A Room Any Room</h2>
  //     <input type="text" value={Rooms} />
  //     <button type="Send">Send</button>
  //   </div>
}
