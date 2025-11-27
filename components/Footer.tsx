import React from 'react';
import { APP_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-white/5 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          {APP_DATA.footer.copyright_text}
        </p>
        <div className="flex justify-center gap-6 mt-4 text-xs text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">DMCA Disclaimer</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;