import "./Sidebar.scss";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolder,
  faHome,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          to="/"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/about"
          className="about-link"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/portfolio"
          className="portfolio-link"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/contact"
          className="contact-link"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => {
            setShowNav(false);
          }}
          icon={faClose}
          color="#B026ff"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="norefferer"
            href="https://www.linkedin.com/in/jana-kalu%C5%BEov%C3%A1-35137a64/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="norefferer"
            href="https://github.com/JanaKaluzova"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => {
          setShowNav(true);
        }}
        icon={faBars}
        color="#B026ff"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
