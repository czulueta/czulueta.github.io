import React, {useRef, useEffect } from "react" 
import gsap from "gsap"
import { Link } from "react-router-dom"
import linkedin from "./images/linkedin-icon.svg"
import github from "./images/github-icon.svg"


export default function Navbar(){
  const ref = useRef();

  useEffect(() => {

    let tl = gsap.timeline();

    tl.from(".name", {opacity:0, duration: 1.5, ease: "power1.out"})
      .from(".home", {opacity:0, duration: .2, ease: "power1.out"})
      .from(".work", {opacity:0, duration: .2, ease: "power1.out"})
      .from(".resume", {opacity:0, duration: .2, ease: "power1.out"})
      .from(".social-icon", {opacity:0, duration: .2, ease: "power1.out"});

  },[])
  
  return(
    <div className="navbar-container" ref={ref}>
      <header className="header">
          <Link className="name" to="/" >Cesar Zulueta</Link>
        <nav>
          <ul>
            <li><Link className="home" to="/">Skills</Link></li>
            <li><Link className="work" to="/work">Work</Link></li>
            <li><Link className="resume" to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </header>
      <div className="icons">
        <ul>
          <li className="social-icon"><Link to="/https://www.linkedin.com/in/cesar-zulueta/"><img src={linkedin} alt="linked in icon" /></Link></li>
          <li className="social-icon"><Link to="/https://github.com/czulueta"><img src={github} alt="github icon" /></Link></li>
        </ul>
      </div> 
    </div>
  )
}