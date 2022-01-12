import React from "react";
import { Parallax } from "react-parallax";

import BgImg from "../About-me-bg-img.jpg";

const About = () => {
  return (
    <div className="about" id='about'>
      <Parallax className="parallax-container" bgImage={BgImg} strength={300}>
        <div className=" description">
          <div className="desc-head">
            <h1 className="container ">About me :</h1>
          </div>
          <div className="desc">
            <p className="container">
              Hi there, I am Abhilash Kashyap, a passionate web developer, born
              and brought up in West Bengal, Purulia. I am a frontend web
              developer familiar with the technologies such as HTML, CSS,
              JavaScript, React.js, Bootstrap, React-Bootatrap, Material-UI, Redux.js,
              Node.js, Express.js and gitHub for version control. I have successfully completed my B.Tech in
              the year 2020 from Government college of engineering and ceramic
              technology with specalization in Computer science and engineering.
              Ever since I stepped into the world of web development my goal is
              to always build amazing quality of websites. Also, I am passionate
              to learn about new technologies, I use them to build better and
              scalable websites. I love playing games like Football, Badminton
              and also I love to spend times playing musical instruments like
              Keyboard, Guitar.<br /><br />That's all about me<br /> -Abhilash Kashyap
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
