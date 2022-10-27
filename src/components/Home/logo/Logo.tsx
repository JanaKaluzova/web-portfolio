import './Logo.scss'
import Logo from '../../../assets/images/Logo.png'

import React from 'react'

export const LogoComponent = () => {
  return (
    <div className="logo-container">
      <img className="text-flicker-in-glow solid-logo" style={{ opacity: 1 }} src={Logo} alt="logo" />
    </div>
  )
}
