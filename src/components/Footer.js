import React from "react"
import { Link } from "react-router-dom"
import footer from "./images/green-footer-icon.svg" 

export default function Footer(){
  return(
    <div className="footer-container">
      <footer>
          <Link className="name" to="/" >Cesar Zulueta</Link>
          <nav className="nav-links">
            <ul>
              <li><Link className="home" to="/">Skills</Link></li>
              <li><Link className="work" to="/work">Work</Link></li>
              <li><Link className="resume" to="/resume">Resume</Link></li>
            </ul>
          </nav>  
      </footer> 
      <img className="blue" src={footer} alt="blue bars" />
    </div>
  )
}