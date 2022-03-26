import React, {useRef, useEffect} from "react"
import {gsap} from "gsap"

//Assets
import arrows from "./images/new-down-arrows.svg"
import check from "./images/green-check-icon.svg"
// import bars from "./images/hero-green-bars.svg"

export default function Hero(){
  const boxRef = useRef();
  const images = useRef();


  useEffect(() => {
    // image vars
    
    // const q = gsap.utils.selector(greenBars);
    // timeline sequence of events onload
    let tl = gsap.timeline()

    gsap.to(boxRef.current, {css: {visibility: "visible"}})

    
    // gsap.from(images, { duration: 2, y: 500, ease: "power3.inOut" });
    // gsap.from(".little", {y:200, duration: .85, ease: "power1.out"})
    tl.from(".first", { opacity: 0, duration: 2.5, ease: "power1.inOut", stagger: .1 })
      .from(".title", {opacity: 0, duration: .3, ease: "back"})
      .from(".meet", {opacity: 0, duration: .25, ease: "power1.out"})
      .from(".mouse", {opacity: 0, duration: .25, ease: "power1.out"})
      .from(".green", { y: 1000, duration: .5, ease: "power1.out", stagger: .15  })
      .from(".check", {opacity: 0, duration: .65, ease: "power1.out", stagger: .1 });
    
    
  }, []);
  return(
    <div className="hero" ref={boxRef}>
      <div className="content">
        <h3 className="first">HIGH QUALITY DESIGN</h3>
        <div className="title">
          <h1>Raising the Bar in Development</h1>
          {/* <div className="check"> */}
          <img className="check" src={check} alt="check mark" />
          {/* </div> */}
        </div>
        
        <div className="meet">
          <img className="arrows" src={arrows} alt="down arrows"/>
          <p>Meet Cesar Zulueta</p>
        </div>
        <div className="mouse">
          {/* <img className="mouse-scroll" src={mouse} alt="mouse scroll" /> */}
          <svg width="36" height="38" viewBox="0 0 46 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3.5" y="3.5" width="39" height="71" rx="19.5" fill="#4859F3" stroke="#FFFDFF" strokeWidth="7"/>
          <ellipse className="circle" cx="22.5" cy="25.5" rx="12.5" ry="11.5" fill="#60EE5D"/>
          </svg>
        </div>
      </div>

      <div className="hero-design-container" ref={images} >
        {/* <img className="hero-design" src={bars} alt="blue bars" /> */}
        <svg className="hero-design" width="1527" height="813" viewBox="0 0 1527 813" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className="green" opacity="0.8" y="740" width="158.896" height="73" fill="#60EE5D"/>
        <rect className="green" opacity="0.8" x="195.872" y="677" width="158.896" height="136" fill="#60EE5D"/>
        <rect className="green" opacity="0.8" x="390.744" y="589" width="158.896" height="224" fill="#60EE5D"/>
        <rect className="green" opacity="0.8" x="586.616" y="462" width="158.896" height="351" fill="#60EE5D"/>
        <rect className="green" opacity="0.8" x="781.488" y="340" width="158.896" height="473" fill="#60EE5D"/>
        <rect className="green" opacity="0.8" x="976.964" y="226" width="159.251" height="587" fill="#60EE5D"/>
        <rect className="green" opacity="0.8" x="1172.36" y="108" width="159.251" height="705" fill="#60EE5D"/>
        <rect className="green" id="big" opacity="0.8" x="1367.75" width="159.251" height="813" fill="#60EE5D"/>
        </svg>
      </div>
      
      
    </div>
  )
}