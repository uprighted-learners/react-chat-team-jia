
import React, { useState, useEffect } from "react";//importing useState and useEffect hooks from react 
import { BrowserRouter as Router, Routes, Route } from"react-router-dom";//importing BrowserRouter, Router, Routs, Route in order to add navigation
import { Link } from "react-router-dom"//more importing in order  to add navigation
import Rooms from "./components/Rooms.js"; //importing the rooms.js file to merge functionality within the two
import Messages from "./components/Messages.js";//importing the messages.js file to merge functionality within the two
import Login from './components/Login.js'
import RegisterForm from './components/RegisterForm.js'
export default function App() {
  const [roomID, setRoomID] = useState("");//sets a variable with state to allow three different ways to manipulate roomId and setting the roomId.

  return (//return is important to seperate programming from html
    //these are all the routes within the parent Router tag to determine a navigation bar and their rellevant routes
    <Router>
      <div>
      <div className='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
        <h1>Chat Rooms</h1>
        <Routes>
          <Route path="/" element={<Rooms setRoomID={setRoomID} />} />
          <Route path="/" element={<Messages />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

