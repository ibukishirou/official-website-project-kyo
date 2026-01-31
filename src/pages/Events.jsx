import eventsData from '../data/events.json';
import styles from './Events.module.css';

const Events = () => {
  // 年度でグループ化
  const eventsByYear = eventsData.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = { events: [], projects: [] };
    }
    if (item.category === 'イベント') {
      acc[item.year].events.push(...item.items);
    } else if (item.category === '案件') {
      acc[item.year].projects.push(...item.items);
    }
    return acc;
  }, {});

  const renderItemCard = (item, index) => {
    const CardContent = (
      <>
        <h4 className={styles.itemTitle}>{item.title}</h4>
        <p className={styles.itemClient}>{item.client} 様</p>
      </>
    );

    if (item.url) {
      return (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.itemCard}
        >
          {CardContent}
        </a>
      );
    }

    return (
      <div key={index} className={styles.itemCard}>
        {CardContent}
      </div>
    );
  };

  return (
    <div className={styles.events}>
      <div className="container">
        <h1 className="section-title" style={{color: '#333333', fontWeight: 800}}>実績</h1>

        <div className={styles.content}>
          <p className={styles.pageDescription}>
            これまでに参加したイベントやお仕事の実績を掲載しています。
          </p>

          {Object.entries(eventsByYear).sort(([a], [b]) => b - a).map(([year, data]) => (
            <div key={year} className={styles.yearSection}>
              <h2 className={styles.yearTitle}>{year}年</h2>

              {data.events.length > 0 && (
                <div className={styles.categorySection}>
                  <h3 className={styles.categoryTitle}>イベント</h3>
                  <div className={styles.itemsGrid}>
                    {data.events.map((item, index) => renderItemCard(item, index))}
                  </div>
                </div>
              )}

              {data.projects.length > 0 && (
                <div className={styles.categorySection}>
                  <h3 className={styles.categoryTitle}>案件</h3>
                  <div className={styles.itemsGrid}>
                    {data.projects.map((item, index) => renderItemCard(item, index))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
