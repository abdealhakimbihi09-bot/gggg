import React from 'react';
import { CheckCircle2, ShieldCheck, Star, Calendar, HardDrive, Smartphone, Share2 } from 'lucide-react';
import { APP_DATA } from '../constants';
import Button from './Button';

const HeroSection: React.FC = () => {
  const { page_info, main_sections } = APP_DATA;

  const handleScrollToDownload = () => {
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-neon-400/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="bg-dark-900/60 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
        
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-400/10 blur-3xl rounded-full -mr-16 -mt-16 transition-opacity duration-700 group-hover:opacity-100 opacity-50" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Game Icon */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:block relative">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-white/10 shadow-neon-hover relative z-10">
              <img 
                src={page_info.game_icon_url} 
                alt={page_info.title} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Platform badge floating */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:right-[-10px] md:translate-x-0 bg-dark-950 border border-white/20 text-xs font-bold px-3 py-1 rounded-full text-white flex items-center gap-1 z-20 shadow-lg">
               <Smartphone size={12} className="text-neon-400" />
               Android 5.0+
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 w-full space-y-4">
            
            {/* Verified Badge */}
            {main_sections.hero_card.show_verified_badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>Verified Safe</span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {page_info.title}
            </h1>

            {/* Developer & Version */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="text-neon-400 font-semibold">{page_info.developer}</span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="flex items-center gap-1">
                <span className="text-slate-500">Ver:</span> {page_info.version}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="flex items-center gap-1 text-yellow-400">
                <Star size={14} fill="currentColor" /> {page_info.rating}
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                <div className="text-slate-500 text-xs mb-1 flex items-center gap-1"><HardDrive size={12}/> Size</div>
                <div className="text-white font-semibold">{page_info.size}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                <div className="text-slate-500 text-xs mb-1 flex items-center gap-1"><Calendar size={12}/> Updated</div>
                <div className="text-white font-semibold">{page_info.updated_date}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/5 col-span-2 md:col-span-2">
                <div className="text-slate-500 text-xs mb-1">Downloads</div>
                <div className="text-white font-semibold">{page_info.downloads}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              {main_sections.hero_card.show_download_button && (
                <Button 
                  onClick={handleScrollToDownload} 
                  fullWidth 
                  icon 
                  className="sm:w-auto shadow-neon hover:shadow-neon-hover"
                >
                  {main_sections.hero_card.download_button_text}
                </Button>
              )}
              <Button variant="glass" className="sm:w-auto" fullWidth>
                <Share2 size={18} />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;