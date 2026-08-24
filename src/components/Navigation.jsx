import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // 現在のパスが/talent配下か/works配下かを判定
  const isTalentSection = location.pathname.startsWith('/talent');
  const isWorksSection = location.pathname.startsWith('/works');

  // 動画投稿者向けメニュー（響-Kyo-）
  const creatorMenuItems = [
    { path: '/talent', label: 'HOME' },
    { path: '/talent/profile', label: 'プロフィール' },
    { path: '/talent/events', label: '実績' },
    { path: '/talent/guidelines', label: 'ガイドライン' },
    { path: '/talent/qa', label: 'Q&A' },
    { path: '/talent/contact', label: '問い合わせ' },
  ];

  // 動画編集者向けメニュー（きょー）
  const editorMenuItems = [
    { path: '/works', label: 'HOME' },
    { path: '/works/commission', label: 'コミッション' },
    { path: '/works/portfolio', label: 'ポートフォリオ' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // 表示するメニューアイテムを決定
  const currentMenuItems = isTalentSection ? creatorMenuItems : isWorksSection ? editorMenuItems : creatorMenuItems;
  
  // 相互リンク先の情報
  const crossLink = isTalentSection 
    ? { path: '/works', label: '動画クリエイター きょー はこちら！' }
    : { path: '/talent', label: 'Vタレント 響 -Kyo- はこちら！' };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img 
            src="/images/talent/logo-header.webp" 
            alt="響-Kyo-" 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Project Kyo</span>
        </Link>

        {/* デスクトップメニュー */}
        <div className={styles.desktopMenu}>
          <ul className={styles.menuGroup}>
            {currentMenuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${
                    location.pathname === item.path || 
                    (item.path === '/works/portfolio' && location.pathname.startsWith('/works/portfolio')) ||
                    (item.path === '/talent' && location.pathname === '/talent') ||
                    (item.path === '/works' && location.pathname === '/works')
                      ? styles.active : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* 相互リンクボタン */}
          <Link to={crossLink.path} className={styles.crossLinkButton}>
            {crossLink.label}
          </Link>
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
            <h3 className={styles.mobileMenuTitle}>
              {isTalentSection ? '響-Kyo-' : 'きょー'}
            </h3>
            <ul>
              {currentMenuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`${styles.mobileNavLink} ${
                      location.pathname === item.path ||
                      (item.path === '/works/portfolio' && location.pathname.startsWith('/works/portfolio')) ||
                      (item.path === '/talent' && location.pathname === '/talent') ||
                      (item.path === '/works' && location.pathname === '/works')
                        ? styles.active : ''
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* モバイル用相互リンク */}
          <div className={styles.mobileCrossLink}>
            <Link 
              to={crossLink.path} 
              className={styles.mobileCrossLinkButton}
              onClick={closeMenu}
            >
              {crossLink.label}
            </Link>
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
