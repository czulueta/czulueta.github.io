import React from "react"
import resume from "./images/web developer - Cesar Zulueta Jr Resume.docx.pdf"



export default function Resume(){
  return(
    <div className="resume">
      <embed src={resume} width="100%" height="100vh" />
    </div>
  )
}