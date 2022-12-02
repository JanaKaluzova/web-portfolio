import "./About.scss";
import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About: React.FC = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I'm a junior fontend developer looking for an opportunity in a
            dynamic company. I would like to participate on creating modern apps
            that bring an excellent user experience.
          </p>
          <p>
            I started with programming at beginning of 2021 and since Jan 2022,
            I focus on React and Typescript. I have tried different styling
            tools, such as Bootstrap, Material UI, styled components, SASS.
          </p>
          <p>
            I'm passionate about technologies and driven by curiosity. I'm
            ambitious, detail-oriented and ready to improve my knowledge and
            work hard until the last piece of code. I'm not afraid to dive
            deeply into the issue and work on it until solved. I'm open minded
            and have can-do attitude.
          </p>
          <p>
            Changing my career when being on a top of my skills shows how much I
            love challenge and learning new things.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
