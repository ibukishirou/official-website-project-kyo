import linksData from '../../data/works/links.json';
import SEO from '../../components/SEO';
import { seoConfig, getPersonSchema, getBreadcrumbSchema, getWebSiteSchema } from '../../utils/seo';
import styles from './WorksHome.module.css';

const WorksHome = () => {
  const pageConfig = seoConfig.works.home;


  return (
    <>
      <SEO
        title={pageConfig.title}
        description={pageConfig.description}
        keywords={pageConfig.keywords}
        ogImage={pageConfig.ogImage}
        path={pageConfig.path}
        structuredData={[
          getPersonSchema('works'),
          getBreadcrumbSchema(pageConfig.path),
          getWebSiteSchema(),
        ]}
      />
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
                メロつける動画制作をモットーに！
              </p>
              <p className={styles.profileCredit}>
                アイコン：<a href="https://x.com/togen_0611" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>桃源ハイリ様</a>
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
    </>
  );
};

export default WorksHome;
