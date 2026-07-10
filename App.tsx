
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-chalk dark:bg-ink">
        <Navbar onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/"           element={<Hero />} />
            <Route path="/about"      element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
