const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const url = 'https://restaurant-landing-henna.vercel.app/menu';
const outputPath = path.join(__dirname, 'restaurant-menu-qr.png');

QRCode.toFile(outputPath, url, {
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  },
  width: 1024, // Higher resolution for better print quality
  errorCorrectionLevel: 'H',
  margin: 4
}, function (err) {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  console.log('✅ QR code generated successfully at: ' + outputPath);
});
