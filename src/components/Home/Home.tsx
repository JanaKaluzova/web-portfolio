import './Home.scss'
import Logo from '../../assets/images/Logo.png'

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={Logo} alt="developer" />
          ana <br /> frontend developer
        </h1>
        <h2>Frontend Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
