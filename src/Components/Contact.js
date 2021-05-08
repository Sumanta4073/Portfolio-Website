import React from "react";

import Gmail from '../Gmail-icon.png'
import Facebook from '../Facebook-icon.png'
import Instagram from '../Instagram-icon.png'
import Linkedin from '../Linkedin-icon.png'
import Github from '../Github-icon.png'

const Contact = () => {
  return (
    <div id="contact">
      <div className="heading">
        <h1>CONTACT ME :</h1>
      </div>
      <div className="container contnr">
        <div className="container card">
          <h2>ADDRESS :</h2>
          <p>
            MALLAESHPALLYA, KAGGADASAPURA, C.V.RAMAN NAGAR, BANGALORE, 560075 <br /> <br /> Mobile : +91-867-050-3907
          </p>
          <div className="icons">
            <div className="img">
              <a href="mailto:abhilashkashyap.123456@gmail.com">
               
                <img src={Gmail} style={{ height:'35px' }} alt="" />
              </a>
            </div>
            <div className="img">
              <a target=' ' href="https://www.facebook.com/abhilash.kashyap.71">
              
                <img src={Facebook} alt="" />
              </a>
            </div>
            <div className="img">
              <a target=' ' href="https://www.instagram.com/abhi.kashyap_3002/">
              
                <img src={Instagram} alt="" />
              </a>
            </div>
            <div className="img">
              <a target=' ' href="https://www.linkedin.com/in/abhilash-kashyap-3039b11b6/">
               
                <img src={Linkedin} alt="" />
              </a>
            </div>
            <div className="img">
              <a target=' ' href="https://github.com/Abhilashkashyap96">
                
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
          <a target=' ' href="https://drive.google.com/file/d/1ngAmF7cgmkyVCn-zTODFEPu0MRUY-meT/view?usp=sharing">
            <button className="butn">DOWNLOAD RESUME</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
