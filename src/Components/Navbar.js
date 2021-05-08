import React from "react";
import {Link} from 'react-scroll'
// React fontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link smooth={true} duration={1500} className="navbar-brand" to="home">
          <img src={logo} className="logo" alt="logo..." />
          <h1 className="name">Abhi</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} duration={1500} className="nav-link" to="home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} duration={1500} className="nav-link" to="about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} duration={1500} className="nav-link" to="skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} duration={1500} className="nav-link" to="projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} duration={1500} className="nav-link" to="contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
