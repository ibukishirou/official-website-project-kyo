import { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingIcons from './FloatingIcons';
import Breadcrumb from './Breadcrumb';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
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
