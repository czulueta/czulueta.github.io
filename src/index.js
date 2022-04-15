import { render } from "react-dom"
import React from "react"
import { HashRouter } from "react-router-dom"
import App from "./App.js"


render(
  <HashRouter hashType="noslash">
      <App /> 
  </HashRouter>
  ,
  document.getElementById("root")
)