import SEO from '../../components/SEO';
import { seoConfig, getBreadcrumbSchema } from '../../utils/seo';
import styles from './Guidelines.module.css';

const Guidelines = () => {
  const pageConfig = seoConfig.talent.guidelines;

  return (
    <>
      <SEO
        title={pageConfig.title}
        description={pageConfig.description}
        keywords={pageConfig.keywords}
        ogImage={pageConfig.ogImage}
        path={pageConfig.path}
        structuredData={getBreadcrumbSchema(pageConfig.path)}
      />
      <div className={styles.guidelines}>
      <div className="container">
        <h1 className="section-title" style={{color: '#333333', fontWeight: 800}}>各種ガイドライン</h1>

        {/* 二次創作ガイドライン */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>二次創作ガイドライン</h2>
            <div className={styles.textContent}>
              <p>
                ファンアートは「#きょー画」を記載の元、投稿していただけると大変嬉しいです。
                <br />
                衣装改変/髪型改変などはある程度自由にしていただいて構いません。
              </p>
              <p>
                ただし、AIの取込・使用/差別的/過度なグロ/政治的な描写のイラストは禁止しています。
              </p>
              <p>
                また、R-18のイラストや本人には見られたくないものなどについては「#きょーセンシ」を記載の元投稿いただけますと棲み分けが出来ますのでご活用ください。
                <br />
                ※こちらのタグは響本人が確認しないタグとなっております。
              </p>
              <p>
                タグ付きのファンアートに関しては、活動(サムネイル/SNSの投稿等)に使用する場合があります。
                <br />
                使用不可の場合は、投稿時に一言添えていただけますと助かります。
              </p>
            </div>
          </div>
        </section>

        {/* ファンアート依頼 */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>ファンアート依頼</h2>
            <div className={styles.textContent}>
              <p>
                skeb等でのイラスト依頼については、活動の助けになるので大歓迎です。
                <br />
                ご依頼の際は以下の点をコピペしてお伝えください。
              </p>
              <div className={styles.templateBox}>
                <p>・響本人がSNSなどで使用します(サムネイル/SNS掲載等)。</p>
                <p>・人物のみ背景透過もしくはレイヤー分けpsdでいただけますと幸いです。</p>
              </div>
              <p>
                完成品についてはギガファイル便などを使用し、そのURLをリプライなどでいただけますと幸いです。
              </p>
              <p className={styles.warningText}>
                ⚠ご依頼の際には、お相手に特大のリスペクトを絵師様にお送りします。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Guidelines;
