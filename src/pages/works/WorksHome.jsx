import { useEffect } from 'react';
import linksData from '../../data/works/links.json';
import styles from './WorksHome.module.css';

const WorksHome = () => {
  // OGP画像を設定
  useEffect(() => {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', window.location.origin + '/images/works/ogp.webp');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.setAttribute('content', window.location.origin + '/images/works/ogp.webp');
      document.head.appendChild(meta);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', window.location.origin + '/images/works/ogp.webp');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:image');
      meta.setAttribute('content', window.location.origin + '/images/works/ogp.webp');
      document.head.appendChild(meta);
    }
  }, []);


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
                アイコン：桃源ハイリ様
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* プラン紹介 */}
      <section className={`${styles.section} ${styles.plans}`}>
        <div className="container">
          <h2 className="section-title">プラン紹介</h2>
          <div className={styles.plansContent}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/JDE0ewe9u0c"
                title="プラン紹介動画"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.videoIframe}
              ></iframe>
            </div>
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
