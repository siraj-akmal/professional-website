
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90 border-b border-concrete-dark dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-forest dark:bg-primary rounded-sm flex items-center justify-center text-white dark:text-charcoal transition-colors">
            <span className="material-symbols-outlined text-[20px]">potted_plant</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative text-xs font-mono font-bold tracking-widest uppercase transition-colors hover:text-primary dark:hover:text-primary ${
                location.pathname === item.path 
                  ? 'text-primary' 
                  : 'text-charcoal/60 dark:text-gray-300'
              }`}
            >
              <span className="absolute -left-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity">/</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-sm bg-concrete dark:bg-white/5 hover:bg-concrete-dark dark:hover:bg-white/10 transition-colors text-forest dark:text-primary"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <Link 
            to="/contact"
            className="hidden sm:flex bg-charcoal dark:bg-primary hover:bg-forest dark:hover:bg-primary/80 text-white dark:text-charcoal text-xs font-bold px-6 py-2 rounded-sm transition-all font-mono uppercase tracking-widest"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal dark:text-white w-10 h-10 flex items-center justify-center rounded-sm bg-concrete dark:bg-white/5"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-16 z-50 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        <nav className={`absolute top-0 left-0 w-full bg-background-light dark:bg-background-dark border-b border-concrete-dark dark:border-white/10 p-8 flex flex-col gap-6 shadow-2xl transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-3xl font-mono font-black uppercase tracking-tighter ${
                location.pathname === item.path 
                  ? 'text-primary' 
                  : 'text-charcoal dark:text-white'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-xs text-primary font-bold">/0{navItems.indexOf(item) + 1}</span>
                {item.label}
              </div>
            </Link>
          ))}
          
          <div className="h-[1px] w-full bg-concrete-dark dark:bg-white/10 my-4"></div>
          
          <Link 
            to="/contact"
            className="flex items-center justify-center w-full bg-primary text-charcoal font-bold py-4 rounded-sm font-mono text-sm tracking-[0.2em] uppercase"
          >
            Get In Touch
          </Link>
          
          <div className="flex gap-6 mt-4">
            {['LinkedIn', 'GitHub', 'Email'].map(social => (
              <a key={social} href="#" className="font-mono text-[10px] font-bold text-charcoal/40 dark:text-gray-500 uppercase tracking-widest hover:text-primary">
                {social}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
