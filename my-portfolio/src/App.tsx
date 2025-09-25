import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const hideNavbar = () => setIsNavbarVisible(false);
  const showNavbar = () => setIsNavbarVisible(true);

  return (
    <Routes>
      <Route path="/" element={<Layout isNavbarVisible={isNavbarVisible}><Home /></Layout>} />
      <Route path="/about" element={<Layout isNavbarVisible={isNavbarVisible}><About /></Layout>} />
      <Route path="/projects" element={<Layout isNavbarVisible={isNavbarVisible}><Projects onNavbarToggle={{ hide: hideNavbar, show: showNavbar }} /></Layout>} />
      <Route path="/contact" element={<Layout isNavbarVisible={isNavbarVisible}><Contact /></Layout>} />
    </Routes>
  );
}

export default App;
