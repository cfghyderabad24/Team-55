import React from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function NavBar() {
  return (
    <ul className="nav justify-content-end bg-dark text-white p-3 fs-5 sticky-top">
      {/* link to Home  */}
      <li className="nav-item">
        <NavLink className="nav-link" to=" ">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="admin">
         Admin
        </NavLink>
      </li>
      
       {/* link to Tech  */}
       <li className="nav-item">
        <NavLink className="nav-link" to="more">
          More
        </NavLink>
      </li>
   
    </ul>
  );
}

export default NavBar;