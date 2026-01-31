import qaData from '../data/qa.json';
import styles from './QA.module.css';

const QA = () => {
  return (
    <div className={styles.qa}>
      <div className="container">
        <h1 className="section-title" style={{color: '#000000', fontWeight: 800}}>Q&A</h1>

        <div className={styles.qaList}>
          {qaData.map((item) => (
            <div key={item.id} className={styles.qaItem}>
              <div className={styles.question}>
                <span className={styles.qLabel}>Q</span>
                <p>{item.question}</p>
              </div>
              <div className={styles.answer}>
                <span className={styles.aLabel}>A</span>
                <p style={{ whiteSpace: 'pre-line' }}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QA;
