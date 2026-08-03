import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(plan || 'basic');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [embedError, setEmbedError] = useState(false);

  // URLパラメータが変更されたらタブを更新
  useEffect(() => {
    if (plan && ['simple', 'basic', 'premium'].includes(plan)) {
      setActiveTab(plan);
    } else if (!plan) {
      // パラメータがない場合はbasicにリダイレクト
      navigate('/portfolio/basic', { replace: true });
    }
  }, [plan, navigate]);

  // 選択中のプランでフィルタリング
  const filteredItems = portfolioData.filter(item => item.plan === activeTab);

  // モーダルを開く
  const openModal = (index) => {
    setSelectedItemIndex(index);
    setSelectedMediaIndex(0); // mainVideoを最初に表示
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // スクロール防止
  };

  // モーダルを閉じる
  const closeModal = () => {
    setModalOpen(false);
    setSelectedItemIndex(null);
    setSelectedMediaIndex(0);
    document.body.style.overflow = 'auto';
  };

  // 前の作品へ移動
  const goToPreviousItem = () => {
    if (selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
      setSelectedMediaIndex(0);
    }
  };

  // 次の作品へ移動
  const goToNextItem = () => {
    if (selectedItemIndex < filteredItems.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
      setSelectedMediaIndex(0);
    }
  };

  // YouTube Video IDを抽出
  const getYouTubeVideoId = (url) => {
    // ショート動画の場合
    if (url.includes('/shorts/')) {
      const match = url.match(/\/shorts\/([^/?]+)/);
      return match ? match[1] : null;
    }
    // 通常の動画
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?\/]+)/);
    return match ? match[1] : null;
  };

  // Xポストかどうかを判定
  const isXPost = (url) => {
    return url.includes('x.com') || url.includes('twitter.com');
  };

  // YouTube サムネイルURLを取得（カード用 - 高解像度）
  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  // YouTube サムネイルURLを取得（モーダル用 - 中解像度320x180）
  const getYouTubeThumbnailMQ = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg` : null;
  };

  // 現在選択中のアイテムとメディア
  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;
  const allMedia = selectedItem ? [selectedItem.mainVideo, ...selectedItem.subMedia] : [];
  const currentMedia = allMedia[selectedMediaIndex];

  // X埋め込みスクリプトをロード
  useEffect(() => {
    if (modalOpen && currentMedia && isXPost(currentMedia)) {
      // 既存のスクリプトを削除
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // 新しいスクリプトを追加
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
      
      // twttrが利用可能になったらウィジェットを再ロード
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      };
    }
  }, [modalOpen, selectedMediaIndex, currentMedia]);

  // メディアが変更されたらembedErrorをリセット
  useEffect(() => {
    setEmbedError(false);
  }, [selectedMediaIndex, currentMedia]);

  // iframe読み込みエラーを検出（一定時間後にチェック）
  useEffect(() => {
    if (modalOpen && currentMedia && !isXPost(currentMedia)) {
      const timer = setTimeout(() => {
        // iframeが読み込まれているかチェック
        const iframe = document.querySelector(`.${styles.videoFrame}`);
        if (iframe) {
          try {
            // クロスオリジンのため直接チェックできないので、
            // YouTubeの埋め込みブロック動画は別途CSSで検出
            // ここでは念のためタイムアウト処理のみ
          } catch (e) {
            setEmbedError(true);
          }
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [modalOpen, selectedMediaIndex, currentMedia]);

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className={styles.portfolio}>
      <h1 className="section-title">ポートフォリオ</h1>

      {/* タブナビゲーション */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'simple' ? styles.active : ''}`}
          onClick={() => navigate('/portfolio/simple')}
        >
          シンプルMV
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'basic' ? styles.active : ''}`}
          onClick={() => navigate('/portfolio/basic')}
        >
          ベーシックMV
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'premium' ? styles.active : ''}`}
          onClick={() => navigate('/portfolio/premium')}
        >
          プレミアムMV
        </button>
      </div>

      {/* 作品一覧グリッド */}
      <div className={styles.grid}>
        {filteredItems.map((item, index) => {
          const thumbnail = getYouTubeThumbnail(item.mainVideo);
          
          return (
            <div key={index} className={styles.card} onClick={() => openModal(index)}>
              <div className={styles.thumbnailWrapper}>
                {thumbnail ? (
                  <img src={thumbnail} alt={item.title} className={styles.thumbnail} />
                ) : (
                  <div className={styles.defaultThumbnail}>
                    <i className="fas fa-play-circle"></i>
                  </div>
                )}
                <div className={styles.overlay}>
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.clientRow}>
                  <p className={styles.client}>{item.client}様</p>
                  {item.date && <p className={styles.date}>{item.date}</p>}
                </div>
                <div className={styles.tags}>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* モーダル */}
      {modalOpen && selectedItem && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>

            {/* 前後の作品ナビゲーション */}
            <div className={styles.itemNavigation}>
              <div className={`${styles.navButtonWrapper} ${styles.left}`}>
                <button
                  className={styles.navButton}
                  onClick={goToPreviousItem}
                  disabled={selectedItemIndex === 0}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                {selectedItemIndex > 0 && (
                  <>
                    <span className={`${styles.navItemTitle} ${styles.pcOnly}`}>
                      {filteredItems[selectedItemIndex - 1].title.length > 20
                        ? filteredItems[selectedItemIndex - 1].title.substring(0, 20) + '...'
                        : filteredItems[selectedItemIndex - 1].title}
                    </span>
                    <span className={`${styles.navItemTitle} ${styles.spOnly}`}>
                      {filteredItems[selectedItemIndex - 1].title.length > 10
                        ? filteredItems[selectedItemIndex - 1].title.substring(0, 10) + '...'
                        : filteredItems[selectedItemIndex - 1].title}
                    </span>
                  </>
                )}
              </div>
              <span className={styles.itemCounter}>
                {selectedItemIndex + 1} / {filteredItems.length}
              </span>
              <div className={`${styles.navButtonWrapper} ${styles.right}`}>
                {selectedItemIndex < filteredItems.length - 1 && (
                  <>
                    <span className={`${styles.navItemTitle} ${styles.pcOnly}`}>
                      {filteredItems[selectedItemIndex + 1].title.length > 20
                        ? filteredItems[selectedItemIndex + 1].title.substring(0, 20) + '...'
                        : filteredItems[selectedItemIndex + 1].title}
                    </span>
                    <span className={`${styles.navItemTitle} ${styles.spOnly}`}>
                      {filteredItems[selectedItemIndex + 1].title.length > 10
                        ? filteredItems[selectedItemIndex + 1].title.substring(0, 10) + '...'
                        : filteredItems[selectedItemIndex + 1].title}
                    </span>
                  </>
                )}
                <button
                  className={styles.navButton}
                  onClick={goToNextItem}
                  disabled={selectedItemIndex === filteredItems.length - 1}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* メインコンテンツとサイドバー */}
            <div className={styles.modalBody}>
              {/* 左側：動画と情報 */}
              <div className={styles.modalMain}>
                {/* メインメディアプレイヤー */}
                <div className={styles.mediaPlayer}>
                  {isXPost(currentMedia) ? (
                    <div className={styles.xEmbed}>
                      <blockquote className="twitter-tweet" data-theme="light">
                        <a href={currentMedia.replace('/video/1', '')}></a>
                      </blockquote>
                    </div>
                  ) : embedError ? (
                    /* 埋め込みエラー時：YouTubeへの導線のみ表示 */
                    <div className={styles.embedError}>
                      <div className={styles.errorContent}>
                        <i className="fab fa-youtube"></i>
                        <h3>この動画はYouTubeでのみ再生できます</h3>
                        <p>動画の所有者により、外部サイトでの再生が制限されています。</p>
                        <a
                          href={currentMedia}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.youtubeButton}
                        >
                          <i className="fab fa-youtube"></i>
                          YouTubeで視聴する
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* 正常時：純粋なiframeのみ */
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentMedia)}?enablejsapi=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className={styles.videoFrame}
                      onLoad={(e) => {
                        // YouTube Player APIでエラーを検出
                        const iframe = e.target;
                        const checkEmbed = () => {
                          // iframeが非常に小さい高さの場合はエラーと判定
                          if (iframe && iframe.offsetHeight < 100) {
                            setEmbedError(true);
                          }
                        };
                        setTimeout(checkEmbed, 2000);
                      }}
                    ></iframe>
                  )}
                </div>

                {/* 作品情報 */}
                <div className={styles.modalInfo}>
                  <h2 className={styles.modalTitle}>{selectedItem.title}</h2>
                  <div className={styles.modalClientRow}>
                    <p className={styles.modalClient}>{selectedItem.client}様</p>
                    {selectedItem.date && <p className={styles.modalDate}>{selectedItem.date}</p>}
                  </div>
                  <div className={styles.modalTags}>
                    {selectedItem.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右側：メディア一覧（サムネイル） */}
              <div className={styles.modalSidebar}>
                <div className={styles.mediaThumbnails}>
                  {allMedia.map((media, index) => {
                    const thumbnail = getYouTubeThumbnailMQ(media);
                    const isActive = index === selectedMediaIndex;
                    
                    // ラベル表示ロジック
                    let label = '';
                    if (index !== 0) {
                      if (isXPost(media)) {
                        label = '告知動画';
                      } else {
                        // YouTube動画（ショート/通常問わず）は一律で「宣伝動画」
                        label = '宣伝動画';
                      }
                    }

                    return (
                      <div
                        key={index}
                        className={`${styles.mediaThumbnail} ${isActive ? styles.activeThumbnail : ''}`}
                        onClick={() => setSelectedMediaIndex(index)}
                      >
                        {thumbnail ? (
                          <img src={thumbnail} alt={`Media ${index + 1}`} />
                        ) : (
                          <div className={styles.defaultThumb}>
                            <i className="fab fa-x-twitter"></i>
                          </div>
                        )}
                        {label && (
                          <span className={styles.mediaLabel}>
                            {label}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
