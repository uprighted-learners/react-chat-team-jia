import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms.js";
import Messages from "./components/Messages.js";
import Login from "./Pages/Login.jsx";
import RegisterForm from "./Pages/RegisterForm.jsx";
import Admin from "./Pages/Admin.js";

export default function App() {
  const [roomID, setRoomID] = useState("");

  return (
    <Router>
      <div>
        <h1>Chat Rooms</h1>
        <Routes>
          <Route path="/" element={<Rooms setRoomID={setRoomID} />} />
          <Route path="/" element={<Messages roomID={roomID} />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<RegisterForm />} />
          <Route path="/" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
