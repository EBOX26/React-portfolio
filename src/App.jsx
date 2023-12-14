import { Outlet } from 'react-router-dom';
import Nav from './components/HeaderNavigation';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Nav />
      <main style={{ 
        background: 'linear-gradient(to bottom, #273469, #1E2749)',
        color: 'white',
        minHeight: '100vh', 
      }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;




