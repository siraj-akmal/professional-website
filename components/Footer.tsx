
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-charcoal/5 dark:border-white/5 bg-background-light dark:bg-background-dark py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-8 bg-charcoal dark:bg-primary text-white dark:text-charcoal flex items-center justify-center rounded-sm shadow-sm">
              <span className="material-symbols-outlined text-[18px]">park</span>
            </div>
            <h2 className="text-sm font-bold tracking-[0.3em] font-mono uppercase text-charcoal dark:text-white group-hover:text-primary transition-colors">
              SIRAJ<span className="text-primary">.DEV</span>
            </h2>
          </Link>
          <p className="text-[10px] font-mono font-bold text-charcoal/40 dark:text-gray-500 uppercase tracking-widest">
            DESIGNED WITH CELCIUS AND GRAPES
          </p>
        </div>

        <nav className="flex flex-wrap gap-8 md:gap-12">
          {['About', 'Experience', 'Projects', 'Contact'].map(item => (
            <Link 
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-[11px] font-mono font-bold text-charcoal/50 hover:text-primary dark:text-gray-400 dark:hover:text-primary uppercase tracking-widest transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-concrete dark:bg-white/5 px-4 py-2 rounded-full border border-concrete-dark dark:border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[9px] font-mono font-bold text-charcoal/40 dark:text-gray-500 uppercase tracking-widest">
              System Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
