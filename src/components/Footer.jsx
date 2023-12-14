import React from 'react';


const socialLinks = [
  {
    href: 'https://github.com/EBOX26',
    iconClass: 'fab fa-github',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com',
    iconClass: 'fab fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://stackoverflow.com',
    iconClass: 'fab fa-stack-overflow',
    label: 'Stack',
  },
];

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    padding: '20px',
    color: 'white',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '15px',
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const linkStyle = {
    margin: '0 20px',
    color: 'aqua',
    textDecoration: 'none',
  };

  const iconStyle = {
    fontSize: '3em',
  };

  return (
    <footer style={footerStyle}>
      <div style={headingStyle}>
        <h2 style={{ margin: 0, fontSize: '1.5em' }}>Connect with Me</h2>
      </div>

      <div style={linkContainerStyle}>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <i className={link.iconClass} style={iconStyle}></i>
            <br />
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;


