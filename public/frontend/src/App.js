import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import "./App.css";
import Auth from "./components/Auth.jsx";
import Rooms from "./components/Rooms.js";
import Messages from './components/Messages.js'

export default function App() {
  return (
  
    <Router>
    <div>
     <h1>App</h1>
      <Routes>
        <Route path="/" element={<Rooms/>}/>
        <Route path="/" element={<Messages/>}/>
        <Route path="/" element={<Auth/>}/>
      </Routes>
      </div>
    </Router>
  )
}

// function App() {
//   return (
//     <>
//       <Rooms />
//     </>
//   );
// }

export default App;
