import React from "react" 
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"
import Resume from "./components/Resume.js"
import "./css/styles.css"

export default function App(){
  return(
    <div className="main-page">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/resume" element={<Resume />}/>
            
        
        </Routes>
      <Footer />
    </div>
  )
}