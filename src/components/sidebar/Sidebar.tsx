import './Sidebar.scss'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" className="about-link" />
        </NavLink>
        <NavLink to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className="contact-link" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
