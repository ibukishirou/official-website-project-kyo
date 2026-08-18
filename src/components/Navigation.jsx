import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // 動画投稿者向けメニュー（響-Kyo-）
  const creatorMenuItems = [
    { path: '/', label: 'HOME' },
    { path: '/profile', label: 'プロフィール' },
    { path: '/events', label: '実績' },
    { path: '/guidelines', label: 'ガイドライン' },
    { path: '/qa', label: 'Q&A' },
    { path: '/contact', label: '問い合わせ' },
  ];

  // 動画編集者向けメニュー（きょー）
  const editorMenuItems = [
    { path: '/commission', label: 'コミッション' },
    { path: '/portfolio', label: 'ポートフォリオ' },
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
            src="/images/logo-header.webp" 
            alt="響-Kyo-" 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Project Kyo</span>
        </Link>

        {/* デスクトップメニュー */}
        <div className={styles.desktopMenu}>
          <ul className={styles.menuGroup}>
            {creatorMenuItems.map((item) => (
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
          
          <div className={styles.divider}></div>
          
          <ul className={styles.menuGroup}>
            {editorMenuItems.map((item) => (
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
        </div>

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
          <div className={styles.mobileMenuGroup}>
            <h3 className={styles.mobileMenuTitle}>響-Kyo-</h3>
            <ul>
              {creatorMenuItems.map((item) => (
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
          
          <div className={styles.mobileMenuGroup}>
            <h3 className={styles.mobileMenuTitle}>きょー</h3>
            <ul>
              {editorMenuItems.map((item) => (
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
