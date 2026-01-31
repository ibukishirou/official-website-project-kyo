import { useEffect } from 'react';
import songsData from '../data/songs.json';
import linksData from '../data/links.json';
import styles from './Home.module.css';

const Home = () => {
  useEffect(() => {
    // スクロール演出の処理
    const handleScroll = () => {
      const scrollIndicator = document.querySelector(`.${styles.scrollIndicator}`);
      if (scrollIndicator && window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
      } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIconClass = (serviceName) => {
    const iconMap = {
      'TikTok': 'fa-brands fa-tiktok',
      'YouTube': 'fa-brands fa-youtube',
      'Instagram': 'fa-brands fa-instagram',
      'Bluesky': 'custom-bluesky',
      'X (main)': 'fa-brands fa-x-twitter',
      'X (交流)': 'fa-brands fa-x-twitter',
      'Booth': 'fa-solid fa-store',
      '欲しいものリスト': 'fa-solid fa-gift',
      'マシュマロ': 'fa-solid fa-envelope'
    };
    return iconMap[serviceName] || 'fa-solid fa-link';
  };

  const renderIcon = (serviceName) => {
    const iconClass = getIconClass(serviceName);
    
    if (iconClass === 'custom-bluesky') {
      return (
        <svg viewBox="0 0 24 24" className={styles.linkIcon}>
          <defs>
            <linearGradient id="bluesky-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#7FFFD4', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#FF69B4', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.038.416-.054-.265.042-.532.096-.797.183-2.872.94-3.704 2.632-3.033 4.327.673 1.698 3.151 2.643 5.815 2.013 1.789-.423 3.58-1.538 4.676-2.886 1.097 1.348 2.888 2.463 4.677 2.886 2.664.63 5.142-.315 5.815-2.013.671-1.695-.161-3.387-3.033-4.327-.265-.087-.532-.141-.797-.183.141.016.28.034.416.054 2.67.296 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z" fill="url(#bluesky-gradient)"/>
        </svg>
      );
    }
    
    return <i className={`${iconClass} ${styles.linkIcon}`}></i>;
  };

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  return (
    <div className={styles.home}>
      {/* ファーストビュー */}
      <section className={styles.hero}>
        <picture className={styles.heroImage}>
          <source media="(max-width: 768px)" srcSet="/images/display-mobile.webp" />
          <img 
            src="/images/display.webp" 
            alt="響-Kyo-" 
            className={styles.heroImg}
          />
        </picture>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}></div>
          <p>Scroll</p>
        </div>
      </section>

      {/* 自己紹介 */}
      <section className={`${styles.section} ${styles.introduction}`}>
        <div className="container">
          <h2 className="section-title" style={{color: '#333333', fontWeight: 800}}>電脳少女 Kyo</h2>
          <div className={styles.introContent}>
            <p>
              2次元と3次元を行き来できる元気なお姉さん系電脳少女。
              <br />
              イヤリングの安全ピンをトリガーに電脳世界の扉が開き、身体が電脳化した。
              <br />
              電脳世界ではふよふよ生きており、身体は23歳で固定されている。
            </p>
            <p>
              得意のテトリスを中心にTikTokで配信活動中。
              <br />
              夢は「武道館でテトリス！」そして「トップVTokerになる！」
              <br />
              この夢を叶える為に、日々いろんな活動をしている。
            </p>
          </div>
        </div>
      </section>

      {/* 歌ってみた */}
      <section className={`${styles.section} ${styles.songs}`}>
        <div className="container">
          <h2 className="section-title" style={{color: '#333333', fontWeight: 800}}>歌ってみた</h2>
          <div className={styles.songsGrid}>
            {songsData.map((song) => (
              <a
                key={song.id}
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.songCard}
              >
                <div className={styles.songThumbnail}>
                  <img
                    src={getYouTubeThumbnail(song.url)}
                    alt={song.title}
                    loading="lazy"
                  />
                </div>
                <h3 className={styles.songTitle}>{song.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* リンク集 */}
      <section className={`${styles.section} ${styles.links}`}>
        <div className="container">
          <h2 className="section-title" style={{color: '#333333', fontWeight: 800}}>リンク集</h2>
          <div className={styles.linksGrid}>
            {linksData.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
                title={link.name}
              >
                {renderIcon(link.name)}
                <span className={styles.linkName}>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
