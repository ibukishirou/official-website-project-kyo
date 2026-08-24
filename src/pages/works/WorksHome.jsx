import { useEffect } from 'react';
import linksData from '../../data/works/links.json';
import styles from './WorksHome.module.css';

const WorksHome = () => {
  // X埋め込みスクリプトをロード
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className={styles.home}>
      {/* プロフィールセクション */}
      <section className={styles.profile}>
        <div className="container">
          <div className={styles.profileContent}>
            <div className={styles.profileImage}>
              <img 
                src="/images/works/kyo-icon.png" 
                alt="きょー" 
                className={styles.profileImg}
              />
            </div>
            <div className={styles.profileInfo}>
              <h1 className={styles.profileName}>きょー</h1>
              <p className={styles.profileRole}>動画編集者</p>
              <p className={styles.profileDescription}>
                メロうける動画制作をモットーに！
              </p>
              <p className={styles.profileCredit}>
                アイコン：桃源ハイリ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 紹介動画 */}
      <section className={`${styles.section} ${styles.introduction}`}>
        <div className="container">
          <h2 className="section-title">紹介</h2>
          <div className={styles.xEmbedContainer}>
            <div className={styles.xEmbed}>
              <blockquote className="twitter-tweet" data-theme="light">
                <a href="https://x.com/togen_0611"></a>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* プラン紹介 */}
      <section className={`${styles.section} ${styles.plans}`}>
        <div className="container">
          <h2 className="section-title">プラン紹介</h2>
          <div className={styles.videoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeVideoId('https://youtu.be/JDE0ewe9u0c')}`}
              title="プラン紹介動画"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.videoIframe}
            ></iframe>
          </div>
        </div>
      </section>

      {/* リンク集 */}
      <section className={`${styles.section} ${styles.links}`}>
        <div className="container">
          <h2 className="section-title">リンク集</h2>
          <div className={styles.linksGrid}>
            {linksData.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
                title={link.platform}
              >
                <i className={`${link.icon} ${styles.linkIcon}`} style={{ color: link.color }}></i>
                <span className={styles.linkName}>{link.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorksHome;
