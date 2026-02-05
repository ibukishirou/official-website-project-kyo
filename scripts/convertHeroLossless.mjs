import sharp from 'sharp';

async function convertToLosslessWebP() {
  try {
    // ロスレスWebPに変換
    await sharp('temp/new-hero.png')
      .webp({ lossless: true })
      .toFile('public/images/hero.webp');
    
    console.log('✅ hero.webp (ロスレス) generated');
  } catch (error) {
    console.error('Error converting image:', error);
    process.exit(1);
  }
}

convertToLosslessWebP();
