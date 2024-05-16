import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navigation.css'
export default function Home() {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>

  )
}
