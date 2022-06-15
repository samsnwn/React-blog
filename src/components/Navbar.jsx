import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{margin:'50px'}}>
        <ul className="nav">
    <li className="nav-item">
      <NavLink className="nav-link active" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/create">Create a Post</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/show">Show Current Posts</NavLink>
    </li>
  </ul>
    </div>
  )
}
