import React from 'react';
import { Link } from 'react-router-dom';

//check with team before importing navigation.css

export default function Navigation() {
  <ul>
    <li className='nav-item'>
      <Link to='/login'>Login</Link>
    </li>
    <li>
      {' '}
      <Link to='/'>Rooms</Link>{' '}
    </li>
  </ul>;
}

