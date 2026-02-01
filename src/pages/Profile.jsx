import creditsData from '../data/credits.json';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className="container">
        <h1 className="section-title" style={{color: '#333333', fontWeight: 800}}>響-Kyo-</h1>

        {/* メインコンテンツ（2カラム） */}
        <div className={styles.mainContent}>
          {/* 左カラム：画像 */}
          <div className={styles.leftColumn}>
            <div className={styles.mainImage}>
              <picture>
                <source media="(max-width: 768px)" srcSet="./images/key-visual-mobile.webp" />
                <img 
                  src="./images/key-visual.webp" 
                  alt="響-Kyo- 立ち絵" 
                  className={styles.characterImage}
                />
              </picture>
            </div>
            <div className={styles.subImage}>
              <img 
                src="./images/three-view.webp" 
                alt="響-Kyo- 三面図" 
                className={styles.characterImage}
              />
            </div>
          </div>

          {/* 右カラム：情報 */}
          <div className={styles.rightColumn}>
            {/* プロフィール文 */}
            <section className={styles.descriptionSection}>
              <div className={styles.card}>
                <h2 className={styles.sectionTitle}>電脳少女 Kyo</h2>
                <p className={styles.description}>
                  2次元と3次元を行き来できる元気なお姉さん系電脳少女。
                  <br />
                  イヤリングの安全ピンをトリガーに電脳世界の扉が開き、身体が電脳化した。
                  <br />
                  電脳世界ではふよふよ生きており、身体は23歳で固定されている。
                </p>
                <p className={styles.description}>
                  得意のテトリスを中心にTikTokで配信活動中。
                  <br />
                  夢は「武道館でテトリス！」そして「トップVTokerになる！」
                  <br />
                  この夢を叶える為に、日々いろんな活動をしている。
                </p>
              </div>
            </section>

            {/* 基本情報 */}
            <section className={styles.infoSection}>
              <div className={styles.card}>
                <h2 className={styles.sectionTitle}>基本情報</h2>
                <dl className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <dt>名前</dt>
                    <dd>響-Kyo-</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>性別</dt>
                    <dd>女</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>誕生日</dt>
                    <dd>6/30</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>身長</dt>
                    <dd>161cm</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>デビュー日</dt>
                    <dd>2021/03/17</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>再デビュー日</dt>
                    <dd>2026/03/17</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>活動内容</dt>
                    <dd>テトリス配信/雑談/マダミス</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>配信時間</dt>
                    <dd>15時~18時　定休日：火/木</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>ファンマーク</dt>
                    <dd>🧷✖</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>ファンネーム</dt>
                    <dd>きょー民(たみ)</dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* タグ */}
            <section className={styles.tagsSection}>
              <div className={styles.card}>
                <h2 className={styles.sectionTitle}>ハッシュタグ</h2>
                <dl className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <dt>メインタグ</dt>
                    <dd>#きょー感</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>FAタグ</dt>
                    <dd>#きょー画</dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>本人閲覧禁止タグ</dt>
                    <dd>#きょーセンシ</dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* クレジット */}
            <section className={styles.creditsSection}>
              <div className={styles.card}>
                <h2 className={styles.sectionTitle}>クリエイター</h2>
                <dl className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <dt>キャラデザイン</dt>
                    <dd>
                      {creditsData.characterDesign.url ? (
                        <a
                          href={creditsData.characterDesign.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.creditLink}
                        >
                          {creditsData.characterDesign.name} 様
                        </a>
                      ) : (
                        `${creditsData.characterDesign.name} 様`
                      )}
                    </dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>Live2Dイラスト</dt>
                    <dd>
                      {creditsData.live2dIllustration.url ? (
                        <a
                          href={creditsData.live2dIllustration.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.creditLink}
                        >
                          {creditsData.live2dIllustration.name} 様
                        </a>
                      ) : (
                        `${creditsData.live2dIllustration.name} 様`
                      )}
                    </dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>モデリング</dt>
                    <dd>
                      {creditsData.modeling.url ? (
                        <a
                          href={creditsData.modeling.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.creditLink}
                        >
                          {creditsData.modeling.name} 様
                        </a>
                      ) : (
                        `${creditsData.modeling.name} 様`
                      )}
                    </dd>
                  </div>
                  <div className={styles.infoItem}>
                    <dt>ロゴ</dt>
                    <dd>
                      {creditsData.logo.url ? (
                        <a
                          href={creditsData.logo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.creditLink}
                        >
                          {creditsData.logo.name} 様
                        </a>
                      ) : (
                        `${creditsData.logo.name} 様`
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </section>
          </div>
        </div>

        {/* ライドリ（独立セクション） */}
        <section className={styles.raidoriSection}>
          <a
            href="https://raidori.com/@project__kyo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.raidoriLink}
          >
            <img 
              src="./images/raidori.webp" 
              alt="ライドリ - 支援サイト" 
              className={styles.raidoriImage}
            />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Profile;
