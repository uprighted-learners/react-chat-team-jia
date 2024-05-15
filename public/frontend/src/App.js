import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Auth from "./components/Auth.jsx";
import Rooms from "./components/Rooms.js";
import Messages from "./components/Messages.js";

export default function App() {
  const [roomID, setRoomID] = useState("");

  return (
    <Router>
      <div>
        <h1>Chat Rooms</h1>
        <Routes>
          <Route path="/" element={<Rooms setRoomID={setRoomID} />} />
          <Route path="/" element={<Messages />} />
          <Route path="/" element={<Auth />} />
          <Route path="/" element={<Navigation />} />
        </Routes>
      </div>
    </Router>
  );
}
