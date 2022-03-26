import React, { useRef, useEffect } from "react" 
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import js from "./images/custom js-logo.svg"


export default function Skills(){
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.from( element.querySelector(".cards"), {
      scale: 0,
      y: 200,
      duration: 2,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: element.querySelector(".skills-container"),
        
        
      }
    })
  }, [])
  return(
    <section className="skills">
      <div ref={ref} className="skills-container">
        <ul className="cards">
          <li className="transition2">
              <div className="icon-container one">
                <img className="jsLogo" src={js} alt="javascript logo"/>
              </div>
              <p className="skill-title">Javascript</p>
              <p className="featured-desc skill-desc">
                Description on what kind of javascript skills i have.
              </p>  
          </li>
          <li className="transition2">
              <div className="icon-container two">
                <span className="iconify" data-icon="vscode-icons:file-type-reactjs"></span>
              </div>
              <p className="skill-title">FrontEnd</p>
              <p className="featured-desc skill-desc">
                Description on what kind of frontend skills i have.
              </p>
          </li>
          <li className="transition2">
              <div className="icon-container three">
                <h3>require("<span>express</span>")</h3>
              </div>
              <p className="skill-title">BackEnd</p>
              <p className="featured-desc skill-desc">
                Description on what kind of backend skills i have.
              </p>
          </li>
        </ul>
      </div>
    </section>
  )
}