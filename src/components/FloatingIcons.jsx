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
            <button onClick={shareToLine} className={styles.shareItem} title="LINE">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
            </button>
            <button onClick={shareToX} className={styles.shareItem} title="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button onClick={shareToBluesky} className={styles.shareItem} title="Bluesky">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.038.416-.054-.265.042-.532.096-.797.183-2.872.94-3.704 2.632-3.033 4.327.673 1.698 3.151 2.643 5.815 2.013 1.789-.423 3.58-1.538 4.676-2.886 1.097 1.348 2.888 2.463 4.677 2.886 2.664.63 5.142-.315 5.815-2.013.671-1.695-.161-3.387-3.033-4.327-.265-.087-.532-.141-.797-.183.141.016.28.034.416.054 2.67.296 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z"/>
              </svg>
            </button>
            <button onClick={copyToClipboard} className={styles.shareItem} title="URLコピー">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingIcons;
