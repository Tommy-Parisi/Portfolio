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
      <main style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
