import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "react-router-dom"
import website from "./images/website1.svg"

export default function Secondproject(){
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector("#inner2"),{
      x: -700,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector("#website-left2")
      }
    })
  },[])
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".web"),{
      x: 700,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector(".website-container")
      }
    })
  },[])
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".inner"),{
      x: -700,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector(".website-left")
      }
    })
  },[])
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".web2"),{
      x: 700,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector("#website-container2")
      }
    })
  },[])
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector("#inner3"),{
      x: -700,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector("#website-container3")
      }
    })
  },[])
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".web3"),{
      x: 700,
      duration: 1,
      scrollTrigger: {
        trigger: element.querySelector("#website-container3")
      }
    })
  },[])
  return(
    <section  id="second" className="website">
      <div ref={ref} className="last">
        <div  className="website-container transition3">
          <div className="website-left">
            <div className="inner">
              <p className="subtitle">Second App</p>

              <p className="featured-title">SomethingSomething.com</p>
              <p className="featured-desc">For this app I did this and I did that</p> 
            </div>
          </div>
          {/* decide later if you want this to go to another page on this website or take yo u to the actual website on another domain */}
          <Link to="/"><img className="web" src={website} alt="model website" /></Link>
        </div>
        <div id="website-container2" className="website-container transition3">
          <div id="website-left2" className="website-left">
            <div id="inner2" className="inner">
              <p className="subtitle">Third App</p>

              <p className="featured-title">SomethingSomething.com</p>
              <p className="featured-desc">For this app I did this and I did that</p> 
            </div>
          </div>
          <Link to="/"><img className="web2" src={website} alt="model website" /></Link>
        </div>
        <div id="website-container3" className="website-container transition3">
          <div  className="website-left">
            <div id="inner3" className="inner">
              <p className="subtitle">Fourth App</p>

              <p className="featured-title">SomethingSomething.com</p>
              <p className="featured-desc">For this app I did this and I did that</p> 
            </div>
          </div>
          <Link to="/"><img className="web3" src={website} alt="model website" /></Link>
        </div>
      </div>
    </section>
  )
}