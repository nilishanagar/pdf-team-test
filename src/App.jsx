import React, { useState } from "react";
import PDFViewer from "./PDFViewer";
import "./App.css";

const App = () => {
  const [file, setFile] = useState(null);
  const [showPDF, setShowPDF] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];

    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
      setShowPDF(false);
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  return (
    <div className="app">
      <h2>PDF Viewer (React PDF)</h2>

      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      {file && (
        <button onClick={() => setShowPDF(true)} className="view-btn">
          View PDF
        </button>
      )}

      {showPDF && file && <PDFViewer file={file} />}
    </div>
  );
};

export default App;
