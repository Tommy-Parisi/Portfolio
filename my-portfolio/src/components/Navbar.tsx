import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <NavLink to="/" className={styles.logo} onClick={close}>
            THOMAS C PARISI
          </NavLink>

          {/* Desktop links */}
          <div className={styles.links}>
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.linkActive : ''}`
                }
              >
                {label}
                <span className={styles.linkUnderline} />
              </NavLink>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className={styles.backdrop} onClick={close} aria-hidden="true" />
      )}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`
            }
            onClick={close}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
