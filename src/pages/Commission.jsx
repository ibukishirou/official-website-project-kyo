import commissionData from '../data/commission.json';
import styles from './Commission.module.css';

const Commission = () => {
  return (
    <div className={styles.commission}>
      <div className="container">
        <h1 className={`section-title ${styles.gradientText}`}>コミッション</h1>

        {/* メニュー */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>メニュー</h2>
          <div className={styles.menuGrid}>
            {commissionData.map((item) => (
              <div key={item.id} className={styles.menuCard}>
                <div className={styles.menuHeader}>
                  <h3 className={styles.menuName}>{item.menuName}</h3>
                  {item.price && <p className={styles.menuPrice}>{item.price}</p>}
                </div>
                <p className={styles.menuDescription} style={{ whiteSpace: 'pre-line' }}>
                  {item.description}
                </p>
                {item.referenceUrl && (
                  <div className={styles.referenceLink}>
                    <a href={item.referenceUrl} target="_blank" rel="noopener noreferrer">
                      {item.referenceTitle || '参考作品を見る'}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ご依頼の流れ */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>ご依頼の流れ</h2>
            <ol className={styles.flowList}>
              <li>ご依頼内容の確認/お見積り</li>
              <li>お支払い</li>
              <li>着手</li>
              <li>提出/修正</li>
              <li>納品</li>
            </ol>
          </div>
        </section>

        {/* お支払方法 */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>お支払方法</h2>
            <ul className={styles.paymentList}>
              <li>銀行振込</li>
              <li>BOOTH</li>
              <li>アズカリ</li>
            </ul>
          </div>
        </section>

        {/* 注意事項 */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>注意事項</h2>
            
            <div className={styles.noticeSection}>
              <h3 className={styles.noticeTitle}>▼お願い事項</h3>
              <ul className={styles.noticeList}>
                <li>作成したい動画の縦横比にあった素材をご提出ください<br />　※意図的なものは除く(横動画をショートで使用など)</li>
                <li>音声のみの素材は wavまたはmp3 でご提出ください</li>
                <li>やり取りが遅くなると納品も遅れます、できる限り迅速なやり取りをお願いします</li>
              </ul>
            </div>

            <div className={styles.noticeSection}>
              <h3 className={styles.noticeTitle}>▼出来ない事項</h3>
              <ul className={styles.noticeList}>
                <li>３Dを使用するMV</li>
                <li>完成後の修正<br />　※テロップミスなどは除く</li>
                <li>投稿後の再生数などの担保</li>
              </ul>
            </div>

            <div className={styles.noticeSection}>
              <h3 className={styles.noticeTitle}>▼キャンセルについて</h3>
              <p>基本的にお支払い後のキャンセルは受け付けておりません。</p>
            </div>
          </div>
        </section>

        {/* リンク */}
        <section className={styles.section}>
          <div className={styles.linkCards}>
            <a
              href="https://www.foriio.com/kyo-work0630"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <h3>ポートフォリオ</h3>
              <p>動画編集実績はこちら</p>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSecHI1W4aR253lJhP27rLBOGXC2SNP968Tn1tPBEBSFnaU1dw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <h3>ご依頼・お見積り</h3>
              <p>ご依頼の際はこちらから</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Commission;
