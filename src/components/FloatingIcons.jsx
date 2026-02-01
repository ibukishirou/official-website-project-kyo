import { useState, useEffect } from 'react';
import styles from './FloatingIcons.module.css';

const FloatingIcons = () => {
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleShareMenu = () => {
    if (shareMenuOpen) {
      // 閉じる時はアニメーション後に状態を変更
      setIsClosing(true);
      setTimeout(() => {
        setShareMenuOpen(false);
        setIsClosing(false);
      }, 300); // アニメーション時間に合わせる
    } else {
      setShareMenuOpen(true);
    }
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
        <i className="fa-brands fa-tiktok"></i>
      </a>

      {/* X (Main) */}
      <a
        href="https://x.com/project__kyo"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
        aria-label="X (Twitter)"
      >
        <i className="fa-brands fa-x-twitter"></i>
      </a>

      {/* 共有ボタン */}
      <div className={styles.shareContainer}>
        <button
          className={`${styles.icon} ${styles.shareButton}`}
          onClick={toggleShareMenu}
          aria-label="共有"
        >
          <i className="fa-solid fa-share-nodes"></i>
        </button>

        {/* 共有メニュー */}
        {(shareMenuOpen || isClosing) && (
          <div className={`${styles.shareMenu} ${isClosing ? styles.closing : ''}`}>
            <button onClick={shareToLine} className={styles.shareItem} title="LINE">
              <i className="fa-brands fa-line"></i>
            </button>
            <button onClick={shareToX} className={styles.shareItem} title="X (Twitter)">
              <i className="fa-brands fa-x-twitter"></i>
            </button>
            <button onClick={shareToBluesky} className={styles.shareItem} title="Bluesky">
              <i className="fa-brands fa-bluesky"></i>
            </button>
            <button onClick={copyToClipboard} className={styles.shareItem} title="URLコピー">
              <i className="fa-solid fa-link"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingIcons;
