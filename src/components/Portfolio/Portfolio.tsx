import './Portfolio.scss'

import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters strArray={'Portfolio'.split('')} idx={15} letterClass={letterClass} />
        </h1>
        <div>{renderPortfolio()}</div>
      </div>
    </>
  )
}

export default Portfolio
