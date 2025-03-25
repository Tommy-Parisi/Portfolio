import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <h2>Thomas C. Parisi</h2>
        </Link>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/projects" className={styles.link}>Projects</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
