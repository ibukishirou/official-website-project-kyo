import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/profile', label: 'プロフィール' },
    { path: '/events', label: '実績' },
    { path: '/guidelines', label: 'ガイドライン' },
    { path: '/qa', label: 'Q&A' },
    { path: '/commission', label: 'コミッション' },
    { path: '/contact', label: '問い合わせ' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img 
            src="./images/logo-header.webp" 
            alt="響-Kyo-" 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Project Kyo</span>
        </Link>

        {/* デスクトップメニュー */}
        <ul className={styles.desktopMenu}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${styles.navLink} ${
                  location.pathname === item.path ? styles.active : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ハンバーガーメニューボタン */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* モバイルメニュー */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${styles.mobileNavLink} ${
                    location.pathname === item.path ? styles.active : ''
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* オーバーレイ */}
        {isOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
