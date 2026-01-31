import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'wip@wip.wip';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('コピーに失敗しました:', err);
      alert('コピーに失敗しました。手動でコピーしてください。');
    }
  };

  return (
    <div className={styles.contact}>
      <div className="container">
        <h1 className="section-title" style={{color: '#333333', fontWeight: 800}}>問い合わせ</h1>

        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.description}>
              ビジネスに関するお問い合わせは、以下のメールアドレスよりお願いいたします。
              <br />
              企業案件・個人からのお仕事のご依頼に限定しております。
              <br />
              その他のメッセージにつきましては、ご遠慮ください。
            </p>

            <div className={styles.emailSection}>
              <h2 className={styles.emailLabel}>メールアドレス</h2>
              <div className={styles.emailBox}>
                <span className={styles.emailText}>{email}</span>
                <button
                  onClick={copyToClipboard}
                  className={styles.copyButton}
                  aria-label="メールアドレスをコピー"
                >
                  {copied ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                  <span>{copied ? 'コピーしました!' : 'コピー'}</span>
                </button>
              </div>
            </div>

            <div className={styles.notice}>
              <p>※メールの返信には数日かかる場合がございます。予めご了承ください。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
