
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-chalk">
        <Navbar />
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
