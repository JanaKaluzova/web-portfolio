import './About.scss'

import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
        </h1>
        <p>
          I'm a junior fontend developer looking for an opportunity in a dynamic company. I would like to participate on
          creating modern apps that bring an excellent user experience.
        </p>
        <p>
          I'm passionate about programming and driven by curiosity. I'm ambitious, ready to improve my knowledge and
          work hard until the last piece of code. I'm not afraid to dive deeply into the issue and work on it until
          solved.
        </p>
        <p>
          Changing my career when being on a top of my skills shows how much I love challenge and learning new things.
        </p>
      </div>
    </div>
  )
}

export default About
