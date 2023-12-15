import React from 'react';

const About = () => {
  return (
    // Main container for the About section
    <div style={styles.container}>
      {/* Profile container including image and about me text */}
      <div style={styles.profileContainer}>
        {/* Avatar image */}
        <img src="/images/avatar.png" alt="photo" style={styles.profileImage} />
        {/* About Me section */}
        <div style={styles.aboutMe}>
          <h3 style={styles.aboutMeTitle}>About Me</h3>
        </div>
      </div>
      {/* Introduction text */}
      <p style={styles.introText}>
        Hey there! 👋 I'm Ethan, a passionate student diving into the exciting world of full-stack web development.
        When I'm not immersed in the world of coding, you'll find me exploring the latest web development trends,
        tackling new coding challenges, and constantly seeking opportunities to expand my skill set.
        I believe in the power of continuous learning and staying curious in this ever-evolving field.
      </p>
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
    height: '100vh',
    width: '100%',
    padding: '20px',
    backgroundColor: 'grey',
    borderRadius: '15px',
    marginTop: '20px',
    marginBottom: '20px',
  },

  // Profile container style
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    backgroundColor: 'aqua',
    padding: '10px',
    margin: '20px auto',
  },

  // Profile image style
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '5px solid #fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },

  // About Me section style
  aboutMe: {
    margin: '0px',
  },

  // About Me title style
  aboutMeTitle: {
    textAlign: 'center',
    fontSize: '3em',
    color: 'black',
  },

  // Introduction text style
  introText: {
    textAlign: 'center',
    fontSize: '2em',
    maxWidth: '80%',
    width: '100%',
    color: 'black',
  },
};

// Exporting the About component as the default export
export default About;
