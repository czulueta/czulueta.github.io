import { render } from "react-dom"
import React from "react"
import { BrowserRouter as Router, HashRouter } from "react-router-dom"
import App from "./App.js"


render(
  <HashRouter base="/">
    <Router>
      <App /> 
    </Router>
  </HashRouter>
  ,
  document.getElementById("root")
)