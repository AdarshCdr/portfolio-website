import React from 'react'
import './HeroimgStyles.css'
import IntroImg from "../assets/intro-bg.jpg"
import {Link } from "react-router-dom"


const Heroimg = () => {
  return (
      <div className="hero">
          <div className="mask">
              <img className="intro-img" src={IntroImg} alt="IntroImg" />
          </div>
          <div className="content">
              <p>Hi, I'M A FREELANCER.</p>
              <h1> React Developer. </h1>
              <div><Link to="/project" className="btn">Projects</Link>
                   <Link to="/contact" className="btn btn-light">Contacts</Link></div>
              </div>
      
    </div>
  )
}

export default Heroimg;
