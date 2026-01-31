import creditsData from '../data/credits.json';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className="container">
        <h1 className={`section-title ${styles.gradientText}`}>プロフィール</h1>

        {/* 画像セクション */}
        <section className={styles.imageSection}>
          <div className={styles.imageGrid}>
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                {/* TODO: キービジュアル_00(通常).png */}
                <p>立ち絵</p>
              </div>
            </div>
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                {/* TODO: 三面図_アビスモデル(AI学習防止).png */}
                <p>三面図</p>
              </div>
            </div>
          </div>
        </section>

        {/* ライドリ */}
        <section className={styles.raidoriSection}>
          <a
            href="https://raidori.com/@project__kyo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.raidoriLink}
          >
            <div className={styles.raidoriBanner}>
              {/* TODO: ライドリ.png */}
              <p>ライドリ - 支援サイト</p>
            </div>
          </a>
        </section>

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

        {/* プロフィール情報 */}
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
                <dd>06/30</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>身長</dt>
                <dd>161cm</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>デビュー</dt>
                <dd>2021年3月17日</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>再デビュー</dt>
                <dd>2026年3月17日</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>配信時間</dt>
                <dd>15時～18時</dd>
              </div>
              <div className={styles.infoItem}>
                <dt>定休日</dt>
                <dd>火曜・木曜</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* タグ */}
        <section className={styles.tagsSection}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>タグ</h2>
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

        {/* クレジット */}
        <section className={styles.creditsSection}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>クレジット</h2>
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
                      {creditsData.characterDesign.name}様
                    </a>
                  ) : (
                    `${creditsData.characterDesign.name}様`
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
                      {creditsData.live2dIllustration.name}様
                    </a>
                  ) : (
                    `${creditsData.live2dIllustration.name}様`
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
                      {creditsData.modeling.name}様
                    </a>
                  ) : (
                    `${creditsData.modeling.name}様`
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
                      {creditsData.logo.name}様
                    </a>
                  ) : (
                    `${creditsData.logo.name}様`
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
