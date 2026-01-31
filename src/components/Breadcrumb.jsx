import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    '': 'HOME',
    'profile': 'プロフィール',
    'events': 'イベント実績',
    'guidelines': 'ガイドライン',
    'qa': 'Q&A',
    'commission': 'コミッション',
    'contact': '問い合わせ',
  };

  // ホームページではパンくずを表示しない
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className={styles.breadcrumb}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          HOME
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={to} className={styles.item}>
              <span className={styles.separator}>/</span>
              {isLast ? (
                <span className={styles.current}>
                  {breadcrumbNameMap[value] || value}
                </span>
              ) : (
                <Link to={to} className={styles.link}>
                  {breadcrumbNameMap[value] || value}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
