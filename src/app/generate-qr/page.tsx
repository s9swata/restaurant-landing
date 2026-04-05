'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { useRef, useState } from 'react';

export default function GenerateQR() {
  const [qrSize, setQrSize] = useState(400);
  const canvasRef = useRef<HTMLDivElement>(null);
  const url = 'https://restaurant-landing-henna.vercel.app/menu';
  const restaurantName = "L'Oro d'Italia";
  const cta = "Scan to view our menu";

  const downloadQRCode = async () => {
    const canvasElement = document.createElement('canvas');
    const ctx = canvasElement.getContext('2d');
    if (!ctx) return;

    // Poster dimensions
    const width = 800;
    const height = 1000;
    canvasElement.width = width;
    canvasElement.height = height;

    // Background
    ctx.fillStyle = '#f6f3ed'; // Elegant cream background
    ctx.fillRect(0, 0, width, height);

    // Ornament / Border (subtle)
    ctx.strokeStyle = '#222222';
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Title: Restaurant Name
    ctx.fillStyle = '#111111';
    ctx.textAlign = 'center';
    ctx.font = 'bold 54px serif';
    ctx.fillText(restaurantName, width / 2, 180);

    // Subtitle / Decorative Separator
    ctx.font = 'italic 24px serif';
    ctx.fillText('Since 2026 • Michelin Excellence', width / 2, 230);

    // Main QR Code from existing hidden canvas or newly rendered
    const qrCanvas = canvasRef.current?.querySelector('canvas');
    if (qrCanvas) {
      const qrImageRadius = 450;
      const x = (width - qrImageRadius) / 2;
      const y = 320;
      
      // Draw QR code with a white border
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x - 20, y - 20, qrImageRadius + 40, qrImageRadius + 40);
      ctx.drawImage(qrCanvas, x, y, qrImageRadius, qrImageRadius);
    }

    // Call to Action
    ctx.fillStyle = '#333333';
    ctx.font = '500 32px sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText(cta.toUpperCase(), width / 2, 850);

    // Footer Attribution
    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#999999';
    ctx.fillText('Valid for dine-in & takeaway • Paris, France', width / 2, 920);

    // Convert to PNG and download
    const pngUrl = canvasElement.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'L-Oro-d-Italia-Menu-QR.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen bg-[#f6f3ed] flex flex-col items-center justify-center p-8 font-serif">
      <div className="bg-white p-16 rounded-3xl shadow-2xl flex flex-col items-center space-y-10 max-w-xl w-full border border-gray-100">
        <div className="text-center space-y-2">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-sans">
            Restaurant
          </h2>
          <h1 className="text-4xl font-bold text-gray-900">{restaurantName}</h1>
          <p className="text-gray-500 italic">Michelin Dining in Paris</p>
        </div>

        {/* Live Preview / Hidden QR Source */}
        <div 
          ref={canvasRef} 
          className="p-8 bg-white border-4 border-surface-container-low rounded-2xl shadow-inner relative group"
        >
          <QRCodeCanvas
            value={url}
            size={qrSize}
            level="H"
            includeMargin={true}
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-not-allowed">
            <span className="text-xs bg-white py-1 px-2 rounded-full font-sans tracking-widest uppercase">
              Menu Target Page
            </span>
          </div>
        </div>

        <div className="w-full space-y-4">
          <p className="text-center text-sm font-sans tracking-wide text-gray-600">
            &quot;{cta}&quot;
          </p>
          <button
            onClick={downloadQRCode}
            className="w-full bg-[#111111] text-white py-5 rounded-2xl font-sans tracking-[0.2em] uppercase text-sm hover:bg-[#222222] transition-all flex items-center justify-center space-x-3 shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="font-bold">Download Menu Poster (PNG)</span>
          </button>
        </div>

        <div className="pt-8 border-t border-gray-50 w-full">
          <div className="flex justify-between items-center text-[10px] text-gray-400 font-sans tracking-widest uppercase px-2">
            <span>Level H Correction</span>
            <span>800x1000px Output</span>
            <span>Premium Export</span>
          </div>
        </div>
      </div>
    </div>
  );
}
