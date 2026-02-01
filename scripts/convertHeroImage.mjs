import sharp from 'sharp';

async function convertHeroImage() {
  try {
    // ヒーロー画像をWebPに変換（PC用: 1920px幅、SP用: 768px幅）
    await sharp('temp/hero-new.png')
      .resize(1920, null, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality: 90 })
      .toFile('public/images/hero.webp');
    console.log('✅ hero.webp generated');

    await sharp('temp/hero-new.png')
      .resize(768, null, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality: 85 })
      .toFile('public/images/hero-mobile.webp');
    console.log('✅ hero-mobile.webp generated');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

convertHeroImage();
