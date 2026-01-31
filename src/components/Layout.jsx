import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingIcons from './FloatingIcons';
import Breadcrumb from './Breadcrumb';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // ページが切り替わったらスクロール位置をトップにリセット
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        <Breadcrumb />
        {children}
      </main>
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default Layout;
