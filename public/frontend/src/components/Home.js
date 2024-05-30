import React from 'react'
import { Link } from 'react-router-dom'//Link import that allows our navigation bar to work, like a href
import '../components/Navigation.css'//our navigation styling being imported to the document.
export default function Home() {
  return (//these React elements allows good accessibility from many different angels
    <div className='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>

  )
}
