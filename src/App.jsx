import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/HeaderNavigation';
import Footer from './components/Footer';

const App = () => {
  const mainStyle = {
    background: 'linear-gradient(to bottom, #273469, #1E2749)',
    color: 'white',
    minHeight: '100vh',
  };

  return (
    <>
      <Nav />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;




