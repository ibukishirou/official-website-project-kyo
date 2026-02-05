import songsData from '../data/songs.json';
import linksData from '../data/links.json';
import styles from './Home.module.css';

const Home = () => {

  const getIconClass = (serviceName) => {
    const iconMap = {
      'TikTok': 'fa-brands fa-tiktok',
      'YouTube': 'fa-brands fa-youtube',
      'Instagram': 'fa-brands fa-instagram',
      'Bluesky': 'fa-brands fa-bluesky',
      'X': 'fa-brands fa-x-twitter',
      'Booth': 'fa-solid fa-store',
      '欲しいものリスト': 'fa-solid fa-gift',
      'マシュマロ': 'fa-solid fa-envelope'
    };
    return iconMap[serviceName] || 'fa-solid fa-link';
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
          <img 
            src="/images/hero.webp" 
            alt="響-Kyo-" 
            className={styles.heroImg}
          />
        </div>
      </section>



      {/* ティザーPV */}
      <section className={`${styles.section} ${styles.teaser}`}>
        <div className="container">
          <h2 className="section-title" style={{color: '#333333', fontWeight: 800}}>ティザーPV</h2>
          <div className={styles.teaserContent}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/w005e5KCPus"
                title="響-Kyo- ティザーPV"
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
                <i className={`${getIconClass(link.name)} ${styles.linkIcon}`}></i>
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
