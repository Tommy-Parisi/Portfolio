import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className="header-text" style={{ fontSize: '2.5rem' }}>
            THOMAS C PARISI
          </span>
        </Link>
        <div className={styles.links}>
          <Link to="/" className={`${styles.link} header-text`} style={{ fontSize: '1.5rem' }}>Home</Link>
          <Link to="/about" className={`${styles.link} header-text`} style={{ fontSize: '1.5rem' }}>About</Link>
          <Link to="/projects" className={`${styles.link} header-text`} style={{ fontSize: '1.5rem' }}>Projects</Link>
          <Link to="/contact" className={`${styles.link} header-text`} style={{ fontSize: '1.5rem' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
