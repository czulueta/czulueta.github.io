import React, { useRef, useEffect } from "react" 
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import midTier from "./images/middle tier icon.svg"


export default function Skills(){
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.from( element.querySelector(".cards"), {
      scrollTrigger: {
        trigger: element.querySelector(".skills"),
        start: "170% 200%"
        
      },
      scale: 0,
      duration: 6,
      y: 200,
      opacity: 0,
      
    })
  }, [])
  return(
    <section className="skills">
      <div ref={ref} className="skills-container">
        <ul className="cards">
          <li className="transition2">
              <div className="icon-container one">
                <img className="jsLogo" src={midTier} alt="middle tier logo"/>
              </div>
              <p className="skill-title">Middle Tier</p>
              <p className="featured-desc skill-desc">
                Node Js, JavaScript, Express JWT
              </p>  
          </li>
          <li className="transition2">
              <div className="icon-container two">
                <span className="iconify" data-icon="vscode-icons:file-type-reactjs"></span>
              </div>
              <p className="skill-title">FrontEnd</p>
              <p className="featured-desc skill-desc">
                JavaScript, React, Mongoose, JSON Web Token, Bcrypt, CSS, SASS, HTML 5
              </p>
          </li>
          <li className="transition2">
              <div className="icon-container three">
                <h3>require("<span>express</span>")</h3>
              </div>
              <p className="skill-title">BackEnd</p>
              <p className="featured-desc skill-desc">
                MongoDb, Express, Node Js
              </p>
          </li>
        </ul>
      </div>
    </section>
  )
}