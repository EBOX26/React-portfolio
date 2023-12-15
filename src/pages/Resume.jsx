import React from 'react';

// Path to the resume PDF file
const resumePath = '/Ethan_Resume.pdf';

// Styles for the button
const buttonStyle = {
  padding: '12px',
  fontSize: '18px',
  borderRadius: '10px',
  backgroundColor: 'aqua',
  color: 'black',
  cursor: 'pointer',
  border: 'none',
};

// Styles for the main container
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  padding: '20px',
  backgroundColor: 'grey',
  borderRadius: '15px',
  marginTop: '20px',
  marginBottom: '20px',
};

// Styles for the subheading
const subHeadingStyle = {
  fontSize: '2em',
  color: 'white',
};

// Styles for the list items
const listStyle = {
  fontSize: '1.5em',
  color: 'white',
  textAlign: 'center',
};

// React component for the Resume section
const Resume = () => {
  return (
    <div style={containerStyle}>
      {/* Link to download the resume PDF */}
      <a
        href={resumePath}
        download="Download My Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button style={buttonStyle}>Download my Resume</button>
      </a>
      <br />
      <br />
      {/* Subheading for the section */}
      <h2 style={subHeadingStyle}>Full stack web development student</h2>
      {/* Empty paragraph for spacing */}
      <p> </p>
      {/* Front-End section */}
      <p style={listStyle}>
        <u>Front-End</u>
      </p>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Handlebars</li>
      <li>React Js</li>
      <li>Jquery</li>
      <br />
      {/* Back-End section */}
      <p style={listStyle}>
        <u>Back-End</u>
      </p>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MySQL</li>
      <li>Mongo db</li>
    </div>
  );
};

// Export the Resume component as the default export
export default Resume;
