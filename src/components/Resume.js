import React from "react"
import resume from "./images/web developer - Cesar Zulueta Jr Resume.docx.pdf"



export default function Resume(){
  return(
    <div className="resume">
      <img src={resume} alt="Cesar Zulueta's resume"/>
    </div>
  )
}