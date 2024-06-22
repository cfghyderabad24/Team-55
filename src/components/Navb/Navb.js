import './Navb.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navb() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ul className="nav justify-content-end nav-underline bg-dark-subtle">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">
            Admin
          </Link>
        </li>
        
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            onClick={toggleDropdown}
          >
            Users
          </a>
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            <li>
              <a className="dropdown-item" href="#">
                NGO's
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                School Principles
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to="stu">
                Students
              </Link>
            </li>
            
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Visually Impaired
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="eve">
            Events
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navb;
