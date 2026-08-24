import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './FloatingIcons.module.css';

const FloatingIcons = () => {
  const location = useLocation();
  const isTalentSection = location.pathname.startsWith('/talent');
  const isWorksSection = location.pathname.startsWith('/works');
  
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
      {/* YouTube */}
      <a
        href={isTalentSection ? "https://www.youtube.com/@project__kyo" : "https://www.youtube.com/@kyo_work0630"}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
        aria-label="YouTube"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>

      {/* X (Twitter) */}
      <a
        href={isTalentSection ? "https://x.com/project__kyo" : "https://x.com/kyo_work0630"}
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
