import React, { useState, useEffect } from 'react';
import { APP_DATA } from '../constants';

const ScreenshotSlider: React.FC = () => {
  const { screenshots_slider } = APP_DATA.main_sections;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!screenshots_slider.auto_play) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots_slider.images.length);
    }, screenshots_slider.interval_seconds * 1000);

    return () => clearInterval(interval);
  }, [screenshots_slider]);

  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-bold text-white border-l-4 border-neon-400 pl-4">
        {screenshots_slider.title}
      </h2>
      
      <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-xl border border-white/10 bg-dark-900 group">
        {screenshots_slider.images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? '1' : '1.05',
              zIndex: index === currentIndex ? 10 : 0
            }}
          >
            <img 
              src={img} 
              alt={`Screenshot ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability if needed */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-950 to-transparent opacity-60"></div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {screenshots_slider.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-neon-400 w-6' : 'bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotSlider;