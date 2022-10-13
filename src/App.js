import "./styles.css";
import Html from "react-pdf-html";
import ExportPdfComponent from "./ExportPdfComponent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const App = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <ExportPdfComponent /> */}
      {/* <PDFViewer>
        <MyDocument />
      </PDFViewer> */}

      <div>
        <div className="mb5">
          <button onClick={printDocument}>Print</button>
        </div>
        <div id="divToPrint" className="mt4">
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
        </div>
      </div>
    </div>
  );
};

export default App;
