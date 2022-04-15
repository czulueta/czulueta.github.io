import { render } from "react-dom"
import React from "react"
import { BrowserRouter as Router, HashRouter } from "react-router-dom"
import App from "./App.js"


render(
  
  <Router>
    <HashRouter>
      <App /> 
    </HashRouter>
  </Router>
  
  ,
  document.getElementById("root")
)