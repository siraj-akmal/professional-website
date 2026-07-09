
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'About',      path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects',   path: '/projects' },
    { label: 'Contact',    path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-chalk dark:bg-ink border-b-2 border-ink dark:border-chalk transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-ink dark:bg-chalk border-2 border-ink dark:border-chalk flex items-center justify-center text-chalk dark:text-ink font-display font-bold text-sm transition-colors group-hover:bg-accent group-hover:border-accent group-hover:text-chalk">
            SA
          </div>
          <span className="hidden sm:block font-mono text-xs font-bold uppercase tracking-[0.25em] text-ink dark:text-chalk">
            Siraj Akmal
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-mono text-xs font-bold tracking-widest uppercase transition-all duration-150 hover:text-accent ${
                location.pathname === item.path
                  ? 'text-accent border-b-2 border-accent pb-0.5'
                  : 'text-mid dark:text-chalk/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={onToggleDarkMode}
            className="w-9 h-9 flex items-center justify-center border-2 border-ink dark:border-chalk bg-transparent hover:bg-ink hover:text-chalk dark:hover:bg-chalk dark:hover:text-ink transition-all duration-150 text-ink dark:text-chalk"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden sm:flex items-center h-9 px-5 bg-ink dark:bg-chalk text-chalk dark:text-ink font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:border-accent dark:hover:bg-accent dark:hover:text-chalk border-2 border-ink dark:border-chalk transition-all duration-150"
          >
            Let's Talk
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center border-2 border-ink dark:border-chalk text-ink dark:text-chalk"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-ink dark:border-chalk bg-chalk dark:bg-ink">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 font-display text-4xl font-bold uppercase tracking-tighter transition-colors ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-ink dark:text-chalk hover:text-accent'
                }`}
              >
                <span className="font-mono text-xs text-mid">/{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            ))}
            <div className="border-t-2 border-ink dark:border-chalk pt-6 mt-2">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full bg-ink dark:bg-chalk text-chalk dark:text-ink font-mono text-sm font-bold uppercase tracking-[0.2em] py-4 border-2 border-ink dark:border-chalk shadow-brutal dark:shadow-brutal-chalk"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
