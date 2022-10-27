import './Home.scss'
import Logo from '../../assets/images/Logo.png'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoComponent } from './logo/Logo'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={Logo} alt="developer" />
          ana <br /> frontend developer
        </h1>
        <h2>React | TypeScript</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <LogoComponent />
    </div>
  )
}

export default Home
