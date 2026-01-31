import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © Project Kyo All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
