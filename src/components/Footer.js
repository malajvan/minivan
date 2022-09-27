import "./FooterStyles.css";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="socials">
          <a href="https://www.linkedin.com/in/vanhpham/" target="_blank">
            <div  className="linkedin" >
              <FaLinkedin
                size={30} style={{color:"#fff", marginLeft:"0rem"}} />
            </div> 
          </a>
          <a href="https://github.com/malajvan" target="_blank"> 
            <div className="github">
              <FaGithub 
                size={30} style={{color:"#fff", marginLeft:"0.3rem"}} />
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCn0lJT4jmEwbFUromYUtoMw" target="_blank"> 
            <div className="youtube">
              <FaYoutube 
                size={30} style={{color:"#fff", marginLeft:"0.3rem"}} />
            </div>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Footer