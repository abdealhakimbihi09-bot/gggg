import React from 'react';
import { Check, Flame } from 'lucide-react';
import { APP_DATA } from '../constants';

const Description: React.FC = () => {
  const { full_description } = APP_DATA.main_sections;

  return (
    <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Flame className="text-neon-400" size={24} />
        {full_description.title}
      </h2>

      <div className="prose prose-invert prose-p:text-slate-300 max-w-none">
        <p className="leading-relaxed text-base md:text-lg">
          {full_description.content}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white mb-4">MOD Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {full_description.key_features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="mt-1 w-5 h-5 rounded-full bg-neon-400/20 flex items-center justify-center shrink-0">
                <Check size={12} className="text-neon-400" strokeWidth={4} />
              </div>
              <span className="text-slate-200 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;