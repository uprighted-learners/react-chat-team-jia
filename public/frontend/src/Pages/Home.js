import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>Home
        <button><Link to='/register'>Register</Link></button>
        <button><Link to='/login'>Login</Link></button>
    </div>

  )
}
