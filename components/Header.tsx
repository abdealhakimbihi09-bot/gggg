import React from 'react';
import { ChevronRight, Gamepad2, Menu } from 'lucide-react';
import { APP_DATA } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const { header } = APP_DATA;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left: Logo & Breadcrumb */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-neon-400 font-bold text-xl tracking-tighter">
            <Gamepad2 size={28} />
            <span>{header.site_name}</span>
          </div>

          <nav className="hidden md:flex items-center text-xs font-medium text-slate-400">
            {header.breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight size={14} className="mx-2 text-slate-600" />}
                <span className={index === header.breadcrumb.length - 1 ? "text-white" : "hover:text-neon-400 cursor-pointer transition-colors"}>
                  {item}
                </span>
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex text-xs py-2 px-4 h-9">
            {header.top_button.text}
          </Button>
          <button className="md:hidden text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;