import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function HeaderNavigation() {
  const currentPage = useLocation().pathname;

  const navStyle = {
    backgroundColor: '#333',
    padding: '15px 0',
    borderBottom: '2px solid aqua',
  };

  const titleStyle = {
    color: 'white',
    textAlign: 'left',
    fontFamily: 'Dancing Script, cursive',
    fontWeight: 'bold',
    fontSize: '28px',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '20px',
    fontFamily: 'Verdana, sans-serif',
    transition: 'color 0.3s ease, background-color 0.3s ease',
  };

  const activeLinkStyle = {
    backgroundColor: 'aqua',
    color: '#000',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
      <div className="container-fluid">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h1 style={titleStyle}>Ethan Boland</h1>
          </div>
          <div className="navbar-nav">
            {['/', '/Portfolio', '/Contact', '/Resume'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${currentPage === path ? 'active' : ''}`}
                style={{ ...linkStyle, ...(currentPage === path && activeLinkStyle) }}
              >
                {path === '/' ? 'About Me' : path.replace('/', '')}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNavigation;
