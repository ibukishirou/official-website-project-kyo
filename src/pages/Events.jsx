import eventsData from '../data/events.json';
import styles from './Events.module.css';

const Events = () => {
  return (
    <div className={styles.events}>
      <div className="container">
        <h1 className={`section-title ${styles.gradientText}`}>イベント実績</h1>

        <div className={styles.content}>
          <h2 className={styles.mainTitle}>イベント/案件 実績</h2>

          {eventsData.map((yearData, index) => (
            <section key={index} className={styles.yearSection}>
              <h3 className={styles.yearTitle}>◇{yearData.year}年</h3>
              <div className={styles.categorySection}>
                <h4 className={styles.categoryTitle}>▽{yearData.category}</h4>
                <ul className={styles.itemList}>
                  {yearData.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.item}>
                      <div className={styles.itemTitle}>・{item.title}</div>
                      <div className={styles.itemClient}>　({item.client} 様)</div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
