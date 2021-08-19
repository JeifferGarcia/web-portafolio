import React, { Fragment } from "react";

import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";

import "./styles/Footer.css";

const Footer = () => (
  <Fragment>
    <footer className='Footer'>
      <div className='Footer__social'>
        <p>Redes Sociales</p>
        <div>
          <a
            href='https://www.instagram.com/jeifferg/?hl=es-la'
            target='__blank'>
            <img src={instagram} alt='instagram' />
          </a>

          <a href='https://twitter.com/JheifferG' target='__blank'>
            <img src={twitter} alt='twitter' />
          </a>

          <a
            href='https://www.linkedin.com/in/jeiffer-garcias-289032122/'
            target='__blank'>
            <img src={linkedin} alt='linkedin' />
          </a>

          <a href='https://github.com/JeifferGarcia' target='__blank'>
            <img src={github} alt='github' />
          </a>
        </div>
      </div>
      <span>
        Echo con <span className='icon-heart'></span> por
      </span>
      <span>JeifferG</span>
    </footer>
  </Fragment>
);
export default Footer;
