import React from "react" 
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Featured from "./components/Featured.js"
import Skills from "./components/Skills.js"
import Secondproject from "./components/Secondproject.js"
import Footer from "./components/Footer.js"
import "./css/styles.css"

export default function App(){
  return(
    <div className="main-page">
      <Navbar />
      <Hero />
      <Featured />
      <Skills />
      <Secondproject />
      <Footer />
    </div>
  )
}