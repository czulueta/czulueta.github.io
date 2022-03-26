import React, {useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

// assets
import smith from "./images/smith.svg"
import green from "./images/green-watermark-logo.svg"

export default function Featured(){
gsap.registerPlugin(ScrollTrigger);
const ref = useRef(null);
const img = useRef(null);
 
useEffect(() => {
  const element = ref.current;
  
  gsap.from( element.querySelector(".greenBars1"), 
    {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger:{
        trigger:  element.querySelector(".left"),
        start: " 80% bottom", 
        
      }
    })
}, [])
useEffect(() => {
  const element = ref.current;

  gsap.from( element.querySelector(".div"), {
    x: -500,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: element.querySelector(".left"),
      start: " 80% bottom"
    }
  })
  
}, [])
useEffect(() => {
  const element = ref.current;

  gsap.from( element.querySelector(".paint"), {
    x: 200,
    duration: 1.5,
    opacity: 0,
    
    scrollTrigger: {
      trigger: element.querySelector(".imgDiv"),
      start: " 80% bottom",
    }
  })
},[])


  return(
    <section ref={ref} className="featured" id="featured">
      
        <div  className="left" >
          <img className="greenBars1" src={green} alt="green bars" />
          <div className="inner transition2 div" id="box" >
            <p className="subtitle">Featured Project</p>
             {/* // decide later if you want to make this a link to another page in the website or a straight link to the actual website domain // */}
            <Link className="featured-title" to="/" >Smith&SonPainting.com</Link>
            <p className="featured-desc">
              In this project I used React.js, React Router Dom, Gsap, Mongoose, MongoDb, Express, etc. and so on.
            </p>
          </div>
        </div>
        <div className="imgDiv"> 
          <img  ref={img} className="paint" src={smith} alt="painting website" /> 
        </div> 
        
      
        
    </section>
  )
}