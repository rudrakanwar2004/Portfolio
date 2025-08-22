import React from 'react';
import { saveAs } from 'file-saver';

const Resume = () => {
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1FVBXQRkkRqzTStlmp943xWy4SWiCx2en"
  const resumeName = 'RudraKanwar_Resume.pdf'; // Your name here

  const handleDownload = () => {
    saveAs(resumeUrl, resumeName);
  };

  return (
    <center>
      <button 
        onClick={handleDownload}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
        Download Resume (PDF)
      </button>
      </center>
  );
};

export default Resume;
