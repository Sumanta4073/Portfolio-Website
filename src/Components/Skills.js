import React from "react";

import HTML from "../Html-bg.png";
import CSS from "../CSS-bg.png";
import JavaScript from "../JavaScript-bg.png";
import Reactjs from "../React.js-bg.png";
import Bootstrap from "../Bootstrap-bg.png";
import Redux from "../Redux-bg.png";
import ReactBootstrap from "../React-bootstrap-bg.png";
import gitHub from "../GitHub-bg.png";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills">
        <div className="head-bg">
          <h1 className="head">Skills :</h1>
        </div>
        <div className="cntnr">
          <div className="card">
            <div className="imgbx">
              <img src={HTML} alt="" />
            </div>
            <div className="content">
              <h2>HTML</h2>
              <p>
                HTML stands for Hyper Text Markup Language. HTML is the standard
                markup language for creating Web pages. HTML describes the
                structure of a Web page. HTML consists of a series of elements.
                HTML elements tell the browser how to display the content.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbx">
              <img src={CSS} alt="" />
            </div>
            <div className="content">
              <h2>CSS</h2>
              <p>
                CSS stands for Cascading Style Sheets. CSS describes how HTML
                elements are to be displayed on screen, paper, or in other
                media. CSS saves a lot of work. It can control the layout of
                multiple web pages all at once. External stylesheets are stored
                in CSS files.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbx">
              <img src={JavaScript} alt="" />
            </div>
            <div className="content">
              <h2>JavaScript</h2>
              <p>
                JavaScript is the Programming Language for the Web. JavaScript
                can update and change both HTML and CSS. JavaScript can
                calculate, manipulate and validate data.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbx">
              <img src={Reactjs} alt="" />
            </div>
            <div className="content">
              <h2>React.js</h2>
              <p>
                React is a library for building composable user interfaces. Lots
                of people use React as the V in MVC. React abstracts away the
                DOM from you, offering a simpler programming model and better
                performance. React can also render on the server using Node, and
                it can power native apps using React Native.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbx">
              <img src={Bootstrap} alt="" />
            </div>
            <div className="content">
              <h2>Bootstrap</h2>
              <p>
                Bootstrap is a free and open source front end development
                framework for the creation of websites and web apps. The
                Bootstrap framework is built on HTML, CSS, and JavaScript (JS)
                to facilitate the development of responsive, mobile-first sites
                and apps.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbx">
              <img src={Redux} alt="" />
            </div>
            <div className="content">
              <h2>Redux</h2>
              <p>
                Redux is a predictable state container for JavaScript apps.
                Redux solves this problem by managing application's state with a
                single global object called Store. Redux fundamental principles
                help in maintaining consistency throughout your application,
                which makes debugging and testing easier.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbx">
              <img src={ReactBootstrap} alt="" />
            </div>

            <div className="content">
              <h2>React-Bootstrap</h2>
              <p>
                React-Bootstrap replaces the Bootstrap JavaScript. Each
                component has been built from scratch as a true React component,
                without unneeded dependencies like jQuery. As one of the oldest
                React libraries, React-Bootstrap has evolved and grown alongside
                React, making it an excellent choice as your UI foundation.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbx">
              <img src={gitHub} alt="" />
            </div>
            <div className="content">
              <h2>gitHub</h2>
              <p>
                GitHub is a web-based version-control and collaboration platform
                for software developers. GitHub facilitates social coding by
                providing a web interface to the Git code repository and
                management tools for collaboration. GitHub can be thought of as
                a serious social networking site for software developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
