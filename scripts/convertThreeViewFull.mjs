import sharp from 'sharp';

async function convertThreeViewFull() {
  try {
    // フル解像度の三面図をWebPに変換（拡大表示用）
    await sharp('temp/three-view-full.png')
      .webp({ quality: 90 })
      .toFile('public/images/three-view-full.webp');
    console.log('✅ three-view-full.webp generated');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

convertThreeViewFull();
