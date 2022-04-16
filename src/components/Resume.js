import React from "react"
// import { Document, Page, View, Text } from "@react-pdf/renderer"
import { Document, Page} from "react-pdf/dist/esm/entry.webpack";
// import { Page } from "react-pdf"
import resume from "../static/myResume.pdf"
import "../css/resume.css"


export default function Resume(){
  return(
    <div className="main-resume">
      <Document className="resumPdf" file={resume} >
        <Page  pageNumber={1} />
          {/* <View style={{  color: "white", textAlign: "center", margin: 30}}>
            <Text>Section #1</Text> */}
          {/* </View> */}
      </Document>
    </div>
  )
}
// import resume from "../static/resume.pdf"
// import {Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js` ;

// export default function Resume(){
//   console.log('OBJECT');
//   console.log(resume)
//   return(
//     <div className="resume">
      
//       {/* <embed src={resume} width="100%" height="100vh" /> */}

//      {/* <Document
//       file={resume}
//       onLoadError={console.error}
//       style={{width: '100%', height: '100vh'}}
//      >
//        <Page pageIndex={0} />
//      </Document> */}
     
// <iframe src={resume} title='resume' style={{color: 'red', height: '500px'}}></iframe>
//     </div>
//   )
// }

