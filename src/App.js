import React from "react" 
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"
import Resume from "./components/Resume.js"
import "./css/styles.css"
// import "./css/App.css"



export default function App(){
  // const style={
  //   height: '100%'
  // }
  // const main1 = {
  //   minHeight: '100vh',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between'
  // }
  return(
    <div className="main-page" >
  
        <Navbar className="navBar1" />
          
            <Routes>
              
              <Route path="https://czulueta.github.io/portfolio" element={<Home />}/>
              <Route path="https://czulueta.github.io/portfolio/resume" element={<Resume />}/>
                
            
            </Routes>
          
        <Footer className="footer1" />
      
    </div>
  )
}