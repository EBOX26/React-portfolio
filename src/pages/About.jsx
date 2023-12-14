import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <img src="/images/meme.png" alt="photo" style={styles.profileImage} />
        <div style={styles.aboutMe}>
          <h3 style={styles.aboutMeTitle}>About Me</h3>
        </div>
      </div>
      <p style={styles.introText}>
        Hey there! 👋 I'm Ethan, a passionate student diving into the exciting world of full-stack web development. When I'm not immersed in the world of coding, you'll find me exploring the latest web development trends, tackling new coding challenges, and constantly seeking opportunities to expand my skill set. I believe in the power of continuous learning and staying curious in this ever-evolving field.
      </p>
    </div>
  );
};

const styles = {
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

  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '5px solid #fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },

  aboutMe: {
    margin: '0px',
  },

  aboutMeTitle: {
    textAlign: 'center',
    fontSize: '3em',
    color: 'black',
  },

  introText: {
    textAlign: 'center',
    fontSize: '2em',
    maxWidth: '80%',
    width: '100%',
    color: 'black',
  },
};

export default About;
