
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Rooms from './components/Rooms.js';
import Messages from './components/Messages.js';
import Login from './components/Login.js';
import RegisterForm from './components/RegisterForm.js';
export default function App() {
  const [roomSelected, setRoomSelected] = useState('');
  function selectionFromChild(id) {
    setRoomSelected(id);
  }
  return (
    <Router>
      <div>
        <div className='navbar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
        <h1>Chat Rooms</h1>
        <Routes>
          <Route
            path='/'
            element={<Rooms setRoomSelected={selectionFromChild} />}
          />
          <Route
            path='/messages/:id'
            element={<Messages roomSelected={roomSelected} />}
          />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

