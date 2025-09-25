import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <span className="header-text" style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)' }}>
            THOMAS C PARISI
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className={styles.links}>
          <Link to="/" className={`${styles.link} header-text`} style={{ fontSize: '1.5rem' }}>Home</Link>
          <Link to="/about" className={`${styles.link} header-text`} style={{ fontSize: '1.5rem' }}>About</Link>
          <Link to="/projects" className={`${styles.link} header-text`} style={{ fontSize: '1.5rem' }}>Projects</Link>
          <Link to="/contact" className={`${styles.link} header-text`} style={{ fontSize: '1.5rem' }}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link to="/" className={`${styles.mobileLink} header-text`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`${styles.mobileLink} header-text`} onClick={closeMenu}>About</Link>
          <Link to="/projects" className={`${styles.mobileLink} header-text`} onClick={closeMenu}>Projects</Link>
          <Link to="/contact" className={`${styles.mobileLink} header-text`} onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
