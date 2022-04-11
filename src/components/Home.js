import React from "react"
import Hero from "./Hero.js"
import Featured from "./Featured.js"
import Skills from "./Skills.js"
import Secondproject from "./Secondproject.js"

export default function Home(){
  return(
    <div className="homeDiv">
      <Hero />
      <Featured />
      <Skills />
      <Secondproject />
    </div>
  )
}