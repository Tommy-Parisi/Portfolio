import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  isNavbarVisible?: boolean;
};

const Layout = ({ children, isNavbarVisible = true }: LayoutProps) => {
  return (
    <>
      {isNavbarVisible && <Navbar />}
      <main style={{ padding: '2rem', maxWidth: '1500px', margin: '0 auto' }}>
        {children}
      </main>
      {<Footer />}
    </>
  );
};

export default Layout;
