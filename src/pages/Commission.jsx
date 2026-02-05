import { useEffect } from 'react';
import commissionData from '../data/commission.json';
import styles from './Commission.module.css';

const Commission = () => {
  useEffect(() => {
    // TikTok埋め込みスクリプトを読み込む
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // クリーンアップ
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const getYouTubeVideoId = (url) => {
    // YouTube Shorts対応
    if (url.includes('/shorts/')) {
      const match = url.match(/\/shorts\/([^/?]+)/);
      return match ? match[1] : null;
    }
    // 通常のYouTube URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const renderPreview = (url) => {
    if (!url) return null;

    // YouTube判定
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = getYouTubeVideoId(url);
      if (videoId) {
        // Shorts判定（縦動画）
        const isShorts = url.includes('/shorts/');
        return (
          <div className={styles.videoPreview} style={{ aspectRatio: isShorts ? '9 / 16' : '16 / 9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            ></iframe>
          </div>
        );
      }
    }

    return null;
  };

  const renderTikTokEmbed = (embedHtml) => {
    if (!embedHtml) return null;
    
    return (
      <div 
        className={styles.tiktokWrapper}
        dangerouslySetInnerHTML={{ __html: embedHtml }}
      />
    );
  };

  return (
    <div className={styles.commission}>
      <div className="container">
        <h1 className="section-title" style={{color: '#333333', fontWeight: 800}}>コミッション</h1>

        {/* メニュー */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>メニュー</h2>
          <div className={styles.menuGrid}>
            {Object.entries(commissionData).map(([menuName, item]) => {
              const hasPreview = item.referenceUrl;
              const isOptionCard = menuName === 'オプション';
              const isShortVideo = menuName === 'ショート動画';
              const hasDualPreview = isShortVideo && item.tiktokEmbed1 && item.tiktokEmbed2;
              
              return (
                <div key={menuName} className={`${styles.menuCard} ${(hasPreview || hasDualPreview) ? styles.menuCardWithPreview : ''} ${isOptionCard ? styles.optionCard : ''}`}>
                  <div className={styles.menuContent}>
                    <div className={styles.menuHeader}>
                      <h3 className={styles.menuName}>{menuName}</h3>
                      {item.price && <p className={styles.menuPrice}>{item.price}</p>}
                    </div>
                    {isOptionCard ? (
                      <div className={styles.optionList}>
                        {item.description.split('\n').map((line, index) => {
                          const match = line.match(/^(.+?)(＋.+)$/);
                          if (match) {
                            return (
                              <div key={index} className={styles.optionItem}>
                                <span className={styles.optionLabel}>{match[1]}</span>
                                <span className={styles.optionPrice}>{match[2]}</span>
                              </div>
                            );
                          }
                          return <div key={index} className={styles.optionItem}>{line}</div>;
                        })}
                      </div>
                    ) : (
                      <p className={styles.menuDescription} style={{ whiteSpace: 'pre-line' }}>
                        {item.description}
                      </p>
                    )}
                    {item.referenceUrl && !hasPreview && (
                      <div className={styles.referenceLink}>
                        <a href={item.referenceUrl} target="_blank" rel="noopener noreferrer">
                          {item.referenceTitle || '参考作品を見る'}
                        </a>
                      </div>
                    )}
                  </div>
                  {hasDualPreview ? (
                    <div className={styles.dualPreviewContainer}>
                      {renderTikTokEmbed(item.tiktokEmbed1)}
                      {renderTikTokEmbed(item.tiktokEmbed2)}
                    </div>
                  ) : (
                    hasPreview && renderPreview(item.referenceUrl)
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ご依頼の流れ */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>ご依頼の流れ</h2>
            <ol className={styles.flowList}>
              <li><span className={styles.flowNumber}>1</span><span className={styles.flowText}>ご依頼内容の確認/お見積り</span></li>
              <li><span className={styles.flowNumber}>2</span><span className={styles.flowText}>お支払い</span></li>
              <li><span className={styles.flowNumber}>3</span><span className={styles.flowText}>着手</span></li>
              <li><span className={styles.flowNumber}>4</span><span className={styles.flowText}>提出/修正</span></li>
              <li><span className={styles.flowNumber}>5</span><span className={styles.flowText}>納品</span></li>
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
              <h3 className={styles.notesTitle}>お願い事項</h3>
              <ul className={styles.noticeList}>
                <li>作成したい動画の縦横比にあった素材をご提出ください<br />※意図的なものは除く(横動画をショートで使用など)</li>
                <li>音声のみの素材は wavまたはmp3 でご提出ください</li>
                <li>やり取りが遅くなると納品も遅れます、できる限り迅速なやり取りをお願いします</li>
              </ul>
            </div>

            <div className={styles.noticeSection}>
              <h3 className={styles.notesTitle}>出来ない事項</h3>
              <ul className={styles.noticeList}>
                <li>３Dを使用するMV</li>
                <li>完成後の修正<br />※テロップミスなどは除く</li>
                <li>投稿後の再生数などの担保</li>
              </ul>
            </div>

            <div className={styles.noticeSection}>
              <h3 className={styles.notesTitle}>キャンセルについて</h3>
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
