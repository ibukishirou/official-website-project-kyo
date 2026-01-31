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

  const getIconName = (serviceName) => {
    const iconMap = {
      'TikTok': 'tiktok',
      'YouTube': 'youtube',
      'Instagram': 'instagram',
      'Bluesky': 'globe',
      'X (main)': 'x',
      'X (交流)': 'x',
      'Booth': 'shopping-bag',
      '欲しいものリスト': 'gift',
      'マシュマロ': 'message-circle'
    };
    return iconMap[serviceName] || 'link';
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
        <div className={styles.heroImage}>
          {/* TODO: 画像を配置 - /project-kyo/イラスト/ディスプレイ_02.png */}
          <div className={styles.heroPlaceholder}>
            <p className={styles.heroText}>響-Kyo-</p>
          </div>
        </div>
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
                <i className={`ei ei-${getIconName(link.name)} ${styles.linkIcon}`}></i>
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
