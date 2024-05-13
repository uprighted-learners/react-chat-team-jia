import React, { useState, useEffect } from "react";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch("http://localhost:8080/rooms/getallrooms", {
        method: "GET",
      });
      const data = await response.json();
      setRooms(data);
      console.log(rooms);
    } catch (error) {
      alert("Failed to fetch rooms: " + error.message);
    }
  };

  return (
    <>
      {fetchRooms}{" "}
      {rooms.map((room) => (
        <div>{room.name}</div>
        //room.description
        //redirect to room when click (on click on path to room)
      ))}
    </>
  );

  // return (
  //   <div>
  //     <h2>Click On A Room Any Room</h2>
  //     <input type="text" value={Rooms} />
  //     <button type="Send">Send</button>
  //   </div>
}
