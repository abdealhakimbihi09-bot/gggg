import React from 'react';
import { Download } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  icon?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide text-sm";
  
  const variants = {
    primary: "bg-neon-400 text-black hover:bg-white hover:shadow-neon shadow-lg shadow-lime-900/20 border border-transparent",
    secondary: "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600",
    outline: "bg-transparent text-neon-400 border border-neon-400 hover:bg-neon-400/10",
    glass: "bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 border border-white/10"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && <Download size={18} strokeWidth={3} />}
      {children}
    </button>
  );
};

export default Button;