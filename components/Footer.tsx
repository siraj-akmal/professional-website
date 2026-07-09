
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-2 border-ink dark:border-chalk bg-chalk dark:bg-ink py-10 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-2">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-ink dark:bg-chalk text-chalk dark:text-ink flex items-center justify-center font-display font-bold text-sm border-2 border-ink dark:border-chalk group-hover:bg-accent group-hover:border-accent group-hover:text-chalk transition-all duration-150">
              SA
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-ink dark:text-chalk">
              SIRAJ<span className="text-accent">.DEV</span>
            </span>
          </Link>
          <p className="font-mono text-[10px] font-bold text-mid uppercase tracking-widest">
            Designed with Celsius & Grapes
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-8">
          {['About', 'Experience', 'Projects', 'Contact'].map(item => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="font-mono text-[11px] font-bold text-mid hover:text-accent dark:text-chalk/40 dark:hover:text-accent uppercase tracking-widest transition-colors duration-150"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Status */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono text-[10px] font-bold text-mid uppercase tracking-widest">
            System Online
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
