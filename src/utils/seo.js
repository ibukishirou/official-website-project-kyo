// SEO設定データ - 全ページのメタ情報を集中管理

const baseUrl = 'https://project-kyo.jp';

export const seoConfig = {
  // デフォルト設定
  default: {
    siteName: 'project kyo',
    twitterSite: '@project__kyo',
    ogType: 'website',
    locale: 'ja_JP',
  },

  // Talentセクション
  talent: {
    home: {
      title: '響-Kyo- 公式サイト | Vタレント・テトリス配信者',
      description: 'Vタレント「響-Kyo-」の公式サイト。テトリス配信、歌ってみた、イベント出演情報を掲載。TikTokで活躍中。',
      keywords: '響,Kyo,VTuber,Vタレント,テトリス,TikTok,配信,歌ってみた',
      ogImage: `${baseUrl}/images/talent/ogp.webp`,
      path: '/talent',
    },
    profile: {
      title: 'プロフィール | 響-Kyo- 公式サイト',
      description: 'Vタレント「響-Kyo-」のプロフィール。活動内容、経歴、SNSリンク集。',
      keywords: '響,Kyo,プロフィール,VTuber,経歴',
      ogImage: `${baseUrl}/images/talent/ogp.webp`,
      path: '/talent/profile',
    },
    events: {
      title: '出演イベント | 響-Kyo- 公式サイト',
      description: '響-Kyo-の出演イベント一覧。過去・今後のイベント情報を掲載。',
      keywords: '響,Kyo,イベント,出演,ライブ',
      ogImage: `${baseUrl}/images/talent/ogp.webp`,
      path: '/talent/events',
    },
    guidelines: {
      title: 'ファンガイドライン | 響-Kyo- 公式サイト',
      description: '響-Kyo-のファンガイドライン。二次創作や配信ルールについて。',
      keywords: '響,Kyo,ガイドライン,二次創作,ルール',
      ogImage: `${baseUrl}/images/talent/ogp.webp`,
      path: '/talent/guidelines',
    },
    qa: {
      title: 'よくある質問 | 響-Kyo- 公式サイト',
      description: '響-Kyo-に関するよくある質問（FAQ）。活動や配信に関する疑問を解決。',
      keywords: '響,Kyo,FAQ,よくある質問,Q&A',
      ogImage: `${baseUrl}/images/talent/ogp.webp`,
      path: '/talent/qa',
    },
    contact: {
      title: 'お問い合わせ | 響-Kyo- 公式サイト',
      description: '響-Kyo-へのお問い合わせフォーム。依頼やご相談はこちらから。',
      keywords: '響,Kyo,お問い合わせ,連絡,依頼',
      ogImage: `${baseUrl}/images/talent/ogp.webp`,
      path: '/talent/contact',
    },
  },

  // Worksセクション
  works: {
    home: {
      title: 'きょー（動画編集者）公式サイト | MV・動画制作',
      description: '動画編集者「きょー」の公式サイト。プレミアムMV、ベーシックMV、シンプルMVの制作実績とご依頼受付。',
      keywords: 'きょー,動画編集,MV制作,動画制作,映像制作,編集者',
      ogImage: `${baseUrl}/images/works/ogp.webp`,
      path: '/works',
    },
    commission: {
      title: 'ご依頼・プラン | きょー（動画編集者）',
      description: 'きょーの動画編集プラン一覧。プレミアムMV、ベーシックMV、シンプルMVの詳細と料金。',
      keywords: 'きょー,動画編集,MV制作,料金,プラン,依頼',
      ogImage: `${baseUrl}/images/works/ogp.webp`,
      path: '/works/commission',
    },
    portfolio: {
      title: 'ポートフォリオ | きょー（動画編集者）',
      description: 'きょーの動画編集ポートフォリオ。過去の制作実績をご覧いただけます。',
      keywords: 'きょー,動画編集,ポートフォリオ,実績,作品',
      ogImage: `${baseUrl}/images/works/ogp.webp`,
      path: '/works/portfolio',
    },
  },
};

// 構造化データ - JSON-LD

export const getPersonSchema = (type = 'talent') => {
  if (type === 'talent') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: '響-Kyo-',
      alternateName: 'Kyo',
      description: 'Vタレント・テトリス配信者',
      url: `${baseUrl}/talent`,
      image: `${baseUrl}/images/talent/ogp.webp`,
      sameAs: [
        'https://x.com/project__kyo',
        'https://www.tiktok.com/@project__kyo',
        'https://www.youtube.com/@project_kyo',
        'https://www.instagram.com/project__kyo',
        'https://bsky.app/profile/project-kyo.bsky.social',
      ],
    };
  } else if (type === 'works') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'きょー',
      jobTitle: '動画編集者',
      description: 'MV・動画制作専門の動画編集者',
      url: `${baseUrl}/works`,
      image: `${baseUrl}/images/works/kyo-icon.png`,
      sameAs: [
        'https://x.com/kyo_work0630',
        'https://www.youtube.com/@kyo_work0630',
        'https://www.tiktok.com/@kyo_work0630',
        'https://wick-share.com/sns/share/bK2UrWFS?v=1787389137323',
        'https://tsunagu.cloud/users/kyo_work0630',
      ],
    };
  }
};

export const getBreadcrumbSchema = (path) => {
  const pathSegments = path.split('/').filter(Boolean);
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ホーム',
      item: baseUrl,
    },
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    let name = segment;
    
    // パスに応じた名前のマッピング
    if (segment === 'talent') name = '響-Kyo-';
    else if (segment === 'works') name = 'きょー';
    else if (segment === 'profile') name = 'プロフィール';
    else if (segment === 'events') name = '出演イベント';
    else if (segment === 'guidelines') name = 'ファンガイドライン';
    else if (segment === 'qa') name = 'よくある質問';
    else if (segment === 'contact') name = 'お問い合わせ';
    else if (segment === 'commission') name = 'ご依頼・プラン';
    else if (segment === 'portfolio') name = 'ポートフォリオ';
    else if (segment === 'premium') name = 'プレミアムMV';
    else if (segment === 'basic') name = 'ベーシックMV';
    else if (segment === 'simple') name = 'シンプルMV';

    itemListElement.push({
      '@type': 'ListItem',
      position: index + 2,
      name,
      item: `${baseUrl}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
};

export const getWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'project kyo',
    url: baseUrl,
    description: 'Vタレント「響-Kyo-」と動画編集者「きょー」の公式サイト',
    publisher: {
      '@type': 'Organization',
      name: 'project kyo',
    },
  };
};
