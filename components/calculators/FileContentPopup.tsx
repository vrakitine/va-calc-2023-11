import React from "react";

interface FileContentPopupProps {
  content: string; // Specify the type for the 'content' parameter
  onClose: () => void; // Specify the type for the 'onClose' parameter, assuming it's a function with no arguments that returns 'void'
}

function FileContentPopup({ content, onClose }: FileContentPopupProps) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose}>Close</button>
        <pre>{content}</pre>
      </div>
    </div>
  );
  );
}

export default FileContentPopup;

