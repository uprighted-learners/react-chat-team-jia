//to actually seee the Register form please look at the URL and navigate to localhost:300/register

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
// import Auth from './components/Auth.jsx'
import RegisterForm from './Pages/RegisterForm.jsx';

function App() {
  return(
    <Router>
  <div>
      <Routes>
          <Route path="/register" element={<RegisterForm />} />
      </Routes>
  </div>
</Router>
  )
  
}

export default App;
