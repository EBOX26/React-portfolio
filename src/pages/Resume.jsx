import React from 'react';

const resumePath = '/Ethan_Resume.pdf';

const buttonStyle = {
  padding: '12px',
  fontSize: '18px',
  borderRadius: '10px',
  backgroundColor: 'aqua',
  color: 'black',
  cursor: 'pointer',
  border: 'none',
};

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

const subHeadingStyle = {
  fontSize: '2em',
  color: 'white',
};

const listStyle = {
  fontSize: '1.5em',
  color: 'white',
  textAlign: 'center',
};

const Resume = () => {
  return (
    <div style={containerStyle}>
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
      <h2 style={subHeadingStyle}>Full stack web development student</h2>
      <p> </p>
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

export default Resume;






  