
import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added PROJECTS to the import from constants
import { TECH_STACK, PROJECTS } from '../constants';

const About: React.FC = () => {
  // Converted the share link to a direct display link for the img tag
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1NhRZKbsmyTk1HKx48e5o-a8o_E4tYq_s";

  const socialLinks = [
    { label: 'Email', url: 'mailto:sra.303@gmail.com' },
    { label: 'GitHub', url: 'https://github.com/siraj-akmal' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/siraj-akmal/' }
  ];

  return (
    <section className="w-full max-w-7xl px-6 md:px-10 py-16 md:py-24 lg:py-32 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Profile Image Section */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative order-2 lg:order-1">
          <div className="absolute -top-8 -left-8 w-40 h-40 border-t-2 border-l-2 border-primary/20 hidden lg:block rounded-tl-sm"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 border-b-2 border-r-2 border-primary/20 hidden lg:block rounded-br-sm"></div>
          
          <div className="relative bg-white dark:bg-white/5 p-3 shadow-2xl rotate-2 max-w-[440px] w-full border border-concrete-dark dark:border-white/10 transition-transform hover:rotate-0 duration-700">
            <div className="aspect-[3/4] w-full bg-concrete dark:bg-charcoal overflow-hidden relative border border-concrete-dark dark:border-white/10">
              <img 
                src={profileImageUrl} 
                alt="Siraj Akmal" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
                onError={(e) => {
                  console.warn("Could not load image from Google Drive. Ensure the file is shared as 'Anyone with the link'.");
                }}
              />
              <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>
            </div>
            <div className="pt-4 pb-1 flex justify-between items-center px-2">
              <span className="font-mono text-[10px] text-charcoal/40 dark:text-gray-500 uppercase tracking-[0.2em] font-bold">
                SIRAJ_PORTRAIT.JPG
              </span>
              <span className="font-mono text-[10px] text-charcoal/40 dark:text-gray-500 uppercase tracking-[0.2em] font-bold">
                New York City, NY
              </span>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="lg:col-span-7 flex flex-col gap-10 order-1 lg:order-2 lg:pl-10">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-primary font-bold tracking-[0.3em] text-[10px] uppercase flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary"></span> About Me
            </span>
            <h1 className="font-mono text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal dark:text-white leading-[0.9] tracking-tighter uppercase">
              Turning unstructured  <br/> 
              <span className="italic text-terracotta font-serif normal-case tracking-normal">data</span> into Actionable Insights.
            </h1>
          </div>

          <div className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed text-charcoal/70 dark:text-gray-300 font-light max-w-2xl">
            <p>
              I'm a Cross-Functional Analyst at BlackRock, working at the intersection of Finance and Data Science.
            </p>
            <p>
              Dedicated to the intersection of code and capital. I assist data-driven solutions that simplify the complex, focusing on building resilient systems that operate seamlessly behind the scenes.
            </p>
          </div>

          <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-primary/30 to-transparent"></div>

          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-[10px] font-bold text-charcoal/40 dark:text-white uppercase tracking-[0.3em]">Current Stack</h3>
            <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs font-bold text-charcoal dark:text-gray-300 uppercase tracking-widest">
              {TECH_STACK.map(item => (
                <div key={item} className="flex items-center gap-3 group">
                  <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></span> 
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-8">
            <Link
              to="/contact"
              className="bg-charcoal dark:bg-primary hover:bg-forest dark:hover:bg-white text-white dark:text-charcoal font-bold h-14 px-10 rounded-sm shadow-xl transition-all border border-charcoal dark:border-transparent flex items-center gap-3 font-mono text-xs tracking-widest uppercase"
            >
              <span className="material-symbols-outlined text-[20px]">coffee</span>
              Let's Grab a Coffee
            </Link>
            
            <div className="flex items-center gap-8 text-charcoal/40 dark:text-gray-400">
              {socialLinks.map(link => (
                <a 
                  key={link.label} 
                  href={link.url}
                  target={link.label !== 'Email' ? "_blank" : undefined}
                  rel={link.label !== 'Email' ? "noopener noreferrer" : undefined}
                  className="hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest border-b border-transparent group-hover:border-primary pb-0.5">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Samples Grid */}
      <div className="mt-32 pt-24 border-t border-concrete-dark dark:border-white/5">
        <div className="flex justify-between items-end mb-16">
          <h3 className="font-mono text-2xl font-bold text-charcoal dark:text-white flex items-center gap-4 uppercase tracking-tighter">
            <span className="text-primary text-sm font-bold">02. //</span> RECENT WORK
          </h3>
          <Link to="/projects" className="text-primary hover:text-charcoal dark:hover:text-white font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group">
            View All <span className="group-hover:translate-x-2 transition-transform material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.slice(0, 3).map(work => (
            <div key={work.title} className="group cursor-pointer">
              <div className="bg-concrete dark:bg-white/5 aspect-[4/3] rounded-sm overflow-hidden relative mb-6 border border-transparent group-hover:border-primary/20 transition-all shadow-lg hover:shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  style={{ backgroundImage: `url('${work.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h4 className="font-mono text-lg font-bold text-charcoal dark:text-white mb-1 group-hover:text-primary transition-colors tracking-tight">
                {work.title}
              </h4>
              <p className="text-[10px] text-charcoal/40 dark:text-gray-500 font-bold font-mono uppercase tracking-widest">
                {work.categories.join(' • ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
