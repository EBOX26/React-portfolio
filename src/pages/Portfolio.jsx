import React from 'react';

const applications = [
  {
    title: 'Commode Critic',
    imageSrc: '/images/commode-1.png',
    description: 'Backend project',
    deployedLink: '',
    githubLink: 'https://github.com/EBOX26/Commode-Critic.git',
  },
  {
    title: 'Dog meme',
    imageSrc: '/images/meme.png',
    description: 'Front end project',
    deployedLink: 'https://ebox26.github.io/Meme-generator/',
    githubLink: 'https://github.com/EBOX26/Meme-generator.git',
  },
  {
    title: 'Pre work study guide',
    imageSrc: '/images/prework-study-guide.png',
    description: 'prework',
    deployedLink: '',
    githubLink: 'https://github.com/EBOX26/prework-study-guide.git',
  },
  {
    title: 'Portfolio',
    imageSrc: '/images/og-portfolio.png',
    description: '2nd challenge',
    deployedLink: 'https://ebox26.github.io/Portfolio/',
    githubLink: 'https://github.com/EBOX26/Portfolio.git',
  },
  {
    title: 'Horiseon',
    imageSrc: '/images/horiseon-webpage.png',
    description: 'Refactor',
    deployedLink: 'https://ebox26.github.io/Horiseon-Webpage-Refactor/',
    githubLink: 'https://github.com/EBOX26/Horiseon-Webpage-Refactor.git',
  },
  {
    title: 'First day',
    imageSrc: '/images/First-day.png',
    description: 'first day',
    deployedLink: '',
    githubLink: 'https://github.com/EBOX26/first-day-demo.git',
  },
];

const Portfolio = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.portfolioTitle}>Portfolio</h3>
      <div style={styles.applicationsContainer}>
        {applications.map((app, index) => (
          <div key={index} style={styles.applicationCard}>
            <img src={app.imageSrc} alt={app.title} style={styles.appImage} />
            <div style={styles.overlay}>
              <a href={app.deployedLink} target="_blank" style={styles.link}>
                <h2 style={styles.appTitle}>{app.title}</h2>
              </a>
              <p style={styles.description}>{app.description}</p>
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

const styles = {
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

  portfolioTitle: {
    fontSize: '3em',
    textAlign: 'center',
  },

  applicationsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1200px',
  },

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

  appImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  },

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

  appTitle: {
    margin: 0,
    fontSize: '1.5em',
    textDecoration: 'none',
  },

  links: {
    marginTop: '10px',
  },

  link: {
    textDecoration: 'none',
    color: 'inherit',
  },

  githubIcon: {
    color: 'black',
    fontSize: '2em',
    margin: '5px',
  },

  description: {
    margin: 0,
  },

  '@media (max-width: 768px)': {
    applicationCard: {
      width: '100%',
    },
  },
};

export default Portfolio;
