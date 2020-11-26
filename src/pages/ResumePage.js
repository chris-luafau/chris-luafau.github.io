
import React from 'react'
import styled from 'styled-components'
import { Document, Page, PDFDownloadLink } from 'react-pdf'
import resume from '../assets/resume.pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const H2 = styled.h2 `
  text-align: center;
  /*color: #967bb6;*/
  color: dodgerblue;
  font-size: 2em;
  font-weight: 300;
`

const P = styled.p `
  text-align: center;
`

const Div = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`
function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
  });
}

const MyDoc = () => (
  <Div>
    <Document file={resume}>
      <Page pageNumber={1} onLoadSuccess={() => removeTextLayerOffset()} />
    </Document>
  </Div>
)

const DownloadPDF = () => (
  <Div>
    <a href="resume.pdf" download>Download</a>
  </Div>
)

export default class Resume extends React.Component {
  render() {
    return (
      <Div>
        <H2>Resume</H2>
        <MyDoc />
        <DownloadPDF />
      </Div>
    )
  }
}
