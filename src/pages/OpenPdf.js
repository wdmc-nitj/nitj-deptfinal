import React from "react";

function OpenPdf({ link }) {
  return (
    <div className="w-full mt-2">
      <iframe
        src={link}
        style={{
          width: "100%",
          height: "90vh",
          border: "none",
          display: "block",
        }}
        title="PDF Viewer"
      />
    </div>
  );
}

export default OpenPdf;