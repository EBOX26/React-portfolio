import React from 'react';

// Array containing information about different applications for the portfolio
const applications = [
  // Application 1
  {
    title: 'Commode Critic',
    imageSrc: '/images/commode-1.png',
    description: 'Backend project',
    deployedLink: '',
    githubLink: 'https://github.com/EBOX26/Commode-Critic.git',
  },
  // Application 2
  {
    title: 'Dog meme',
    imageSrc: '/images/meme.png',
    description: 'Front end project',
    deployedLink: 'https://ebox26.github.io/Meme-generator/',
    githubLink: 'https://github.com/EBOX26/Meme-generator.git',
  },
  // Application 3
  {
    title: 'Pre work study guide',
    imageSrc: '/images/prework-study-guide.png',
    description: 'Prework',
    deployedLink: '',
    githubLink: 'https://github.com/EBOX26/prework-study-guide.git',
  },
  // Application 4
  {
    title: 'Portfolio',
    imageSrc: '/images/og-portfolio.png',
    description: '2nd challenge',
    deployedLink: 'https://ebox26.github.io/Portfolio/',
    githubLink: 'https://github.com/EBOX26/Portfolio.git',
  },
  // Application 5
  {
    title: 'Horiseon',
    imageSrc: '/images/horiseon-webpage.png',
    description: 'Refactor',
    deployedLink: 'https://ebox26.github.io/Horiseon-Webpage-Refactor/',
    githubLink: 'https://github.com/EBOX26/Horiseon-Webpage-Refactor.git',
  },
  // Application 6
  {
    title: 'First day',
    imageSrc: '/images/First-day.png',
    description: 'First day',
    deployedLink: '',
    githubLink: 'https://github.com/EBOX26/first-day-demo.git',
  },
];

// Portfolio component
const Portfolio = () => {
  return (
    <div style={styles.container}>
      {/* Portfolio title */}
      <h3 style={styles.portfolioTitle}>Portfolio</h3>
      {/* Container for application cards */}
      <div style={styles.applicationsContainer}>
        {/* Map through applications and create a card for each */}
        {applications.map((app, index) => (
          <div key={index} style={styles.applicationCard}>
            {/* Application image */}
            <img src={app.imageSrc} alt={app.title} style={styles.appImage} />
            {/* Overlay for additional information */}
            <div style={styles.overlay}>
              {/* Link to deployed application (if available) */}
              <a href={app.deployedLink} target="_blank" style={styles.link}>
                <h2 style={styles.appTitle}>{app.title}</h2>
              </a>
              {/* Description of the application */}
              <p style={styles.description}>{app.description}</p>
              {/* Links section containing GitHub link */}
              <div style={styles.links}>
                <a href={app.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" style={styles.githubIcon}></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles object containing CSS styles for the components
const styles = {
  // Main container style
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'grey',
    borderRadius: '15px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  
  // Portfolio title style
  portfolioTitle: {
    fontSize: '3em',
    textAlign: 'center',
  },

  // Container for application cards style
  applicationsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1200px',
  },

  // Application card style
  applicationCard: {
    border: '5px solid aqua',
    borderRadius: '10px',
    marginTop: '50px',
    position: 'relative',
    width: '48%',
    marginBottom: '50px',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },

  // Application image style
  appImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  },

  // Overlay style for additional information
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '100%',
    color: 'black',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },

  // Application title style
  appTitle: {
    margin: 0,
    fontSize: '1.5em',
    textDecoration: 'none',
  },

  // Links section style
  links: {
    marginTop: '10px',
  },

  // Link style
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },

  // GitHub icon style
  githubIcon: {
    color: 'black',
    fontSize: '2em',
    margin: '5px',
  },

  // Description style
  description: {
    margin: 0,
  },

  // Media query for responsive design
  '@media (max-width: 768px)': {
    applicationCard: {
      width: '100%',
    },
  },
};

// Export the Portfolio component as the default export
export default Portfolio;
