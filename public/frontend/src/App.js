//to actually seee the Register form please look at the URL and navigate to localhost:300/register

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Auth from './components/Auth.jsx'
import RegisterForm from './Pages/RegisterForm.jsx';
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.js'
import Admin from './Pages/Admin'

function App() {
  return(
    <Router>
  <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
      </Routes>
  </div>
</Router>
  )
  
}

export default App;
