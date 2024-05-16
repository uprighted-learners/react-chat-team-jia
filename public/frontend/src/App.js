//to actually seee the Register form please look at the URL and navigate to localhost:300/register

// import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import './components/Navigation.css'
// // import Auth from './components/Auth.jsx'
// import RegisterForm from './Pages/RegisterForm.jsx';
// import Login from './Pages/Login.jsx';
// import Home from './Pages/Home.js'
// import Admin from './Pages/Admin'
// // import Auth from './components/Auth.jsx'

// function App() {
//   return(
//     <Router>
//   <div>
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/admin' element={<Admin />} />
//       </Routes>
//   </div>
// </Router>
//   )
  
// }
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Auth from "./components/Auth.jsx";
import Rooms from "./components/Rooms.js";
import Messages from "./components/Messages.js";
import Login from './Pages/Login.jsx'
import RegisterForm from './Pages/RegisterForm.jsx'
import Admin from './Pages/Admin.js'
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
          <Route path="/register" element={<RegisterForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

