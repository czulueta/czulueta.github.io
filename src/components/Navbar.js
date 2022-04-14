import React, {useRef, useEffect } from "react" 
import gsap from "gsap"
import { Link } from "react-router-dom"
import linkedin from "./images/linkedin-icon.svg"
import github from "./images/github-icon.svg"

// import Skills from "./Skills.js"
// import Featured from "./Featured.js"


export default function Navbar(){
  const ref = useRef();

  useEffect(() => {

    let tl = gsap.timeline();

    tl.from(".name", {opacity:0, duration: 1.5, ease: "power1.out"})
      .from(".skil", {opacity:0, duration: .2, ease: "power1.out"})
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
            <li onClick={() => ( window.scrollTo({ top: 1350, behavior: "smooth"}))}><Link className="skil" to="/">Skills</Link></li>
            <li onClick={() => ( window.scrollTo({ top: 800, behavior: "smooth"}))}><Link className="work" to="/">Work</Link></li>
            <li><Link className="resume" to="/resume">Resume</Link></li>
          </ul>
        </nav>
        

        
        
      </header>
      <div className="icons">
        <ul>
          <li className="social-icon"><a href="https://www.linkedin.com/in/cesar-zulueta/"><img src={linkedin} alt="linked in icon" /></a></li>
          <li className="social-icon"><a href="https://github.com/czulueta"><img src={github} alt="github icon" /></a></li>
        </ul>
      </div> 
    </div>
  )
}