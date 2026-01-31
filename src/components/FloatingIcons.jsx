import { useState } from 'react';
import styles from './FloatingIcons.module.css';

const FloatingIcons = () => {
  const [shareMenuOpen, setShareMenuOpen] = useState(false);

  const toggleShareMenu = () => {
    setShareMenuOpen(!shareMenuOpen);
  };

  const shareToLine = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('響-Kyo- 公式サイト');
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
  };

  const shareToX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('響-Kyo- 公式サイト');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareToBluesky = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('響-Kyo- 公式サイト');
    window.open(`https://bsky.app/intent/compose?text=${text} ${url}`, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('URLをクリップボードにコピーしました！');
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  return (
    <div className={styles.floatingIcons}>
      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@project_kyo"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
        aria-label="TikTok"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      </a>

      {/* X (Main) */}
      <a
        href="https://x.com/project__kyo"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
        aria-label="X (Twitter)"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      {/* 共有ボタン */}
      <div className={styles.shareContainer}>
        <button
          className={`${styles.icon} ${styles.shareButton}`}
          onClick={toggleShareMenu}
          aria-label="共有"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>

        {/* 共有メニュー */}
        {shareMenuOpen && (
          <div className={styles.shareMenu}>
            <button onClick={shareToLine} className={styles.shareItem}>
              <span>LINE</span>
            </button>
            <button onClick={shareToX} className={styles.shareItem}>
              <span>X</span>
            </button>
            <button onClick={shareToBluesky} className={styles.shareItem}>
              <span>Bluesky</span>
            </button>
            <button onClick={copyToClipboard} className={styles.shareItem}>
              <span>URLコピー</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingIcons;
