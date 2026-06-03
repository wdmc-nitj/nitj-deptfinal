import React from "react";

function OpenPdf({ link }) {
  return (
    <iframe
      src={link}
      style={{
        width: "100vw",
        height: "90vh",
        border: "none",
      }}
      title="PDF Viewer"
    />
  );
}

export default OpenPdf;