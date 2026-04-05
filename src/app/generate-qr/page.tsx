'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';

export default function GenerateQR() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const url = 'https://restaurant-landing-henna.vercel.app/menu';

  const downloadQRCode = () => {
    const canvas = canvasRef.current?.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'restaurant-menu-qr.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f3ed] flex flex-col items-center justify-center p-8">
      <div className="bg-white p-12 rounded-2xl shadow-xl flex flex-col items-center space-y-8 max-w-md w-full">
        <h1 className="text-3xl font-serif text-gray-900 text-center">
          QR Code Generator
        </h1>
        <p className="text-gray-600 text-center text-sm">
          Scans will redirect to:<br />
          <span className="font-mono text-xs text-blue-600">{url}</span>
        </p>
        
        <div ref={canvasRef} className="p-4 bg-white border-8 border-gray-50 rounded-xl">
          <QRCodeCanvas
            value={url}
            size={256}
            level="H"
            includeMargin={true}
          />
        </div>

        <button
          onClick={downloadQRCode}
          className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 shadow-lg active:scale-[0.98]"
        >
          <span>Download PNG</span>
        </button>
        
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          The QR code is rendered at 256x256px with high error correction (Level H).
        </p>
      </div>
    </div>
  );
}
