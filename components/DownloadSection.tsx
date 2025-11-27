import React from 'react';
import { DownloadCloud, Server, Shield } from 'lucide-react';
import { APP_DATA } from '../constants';
import Button from './Button';

const DownloadSection: React.FC = () => {
  const { download_section } = APP_DATA;

  return (
    <div id="download-section" className="space-y-6 py-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Download Links</h2>
        <p className="text-slate-400 text-sm">Select a version to start your download immediately.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {download_section.two_cards.map((card, index) => (
          <div 
            key={index}
            className={`relative p-6 rounded-2xl flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300 ${
              card.recommended 
                ? 'bg-gradient-to-br from-dark-800 to-dark-900 border border-neon-400 shadow-[0_0_20px_rgba(163,255,0,0.1)]' 
                : 'bg-dark-800 border border-white/10'
            }`}
          >
            {card.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-400 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Recommended
              </div>
            )}

            <div className="flex items-start justify-between">
              <div>
                <h3 className={`font-bold text-lg ${card.recommended ? 'text-white' : 'text-slate-200'}`}>
                  {card.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1"><Server size={12}/> {card.size}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  <span>v{card.version}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${card.recommended ? 'bg-neon-400/10 text-neon-400' : 'bg-slate-700/50 text-slate-400'}`}>
                <DownloadCloud size={24} />
              </div>
            </div>

            <div className="mt-auto pt-4">
              <div className="flex items-center gap-2 mb-4 text-xs text-slate-500">
                <Shield size={12} className={card.recommended ? "text-green-500" : "text-slate-500"} />
                {card.recommended ? "Scanned & Verified Safe" : "Standard Security Scan"}
              </div>
              <Button 
                variant={card.recommended ? 'primary' : 'secondary'} 
                fullWidth
                onClick={() => alert(`Starting download for ${card.title}...`)}
              >
                {card.button_text} DOWNLOAD
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadSection;