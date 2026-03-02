import sharp from 'sharp';

sharp('temp/three-view-2.png')
  .webp({ quality: 90 })
  .toFile('public/images/three-view-2.webp')
  .then(() => console.log('✅ three-view-2.webp generated'))
  .catch(err => console.error('Error:', err));
