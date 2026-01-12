
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="flex flex-col gap-10 mb-20">
        <div className="w-16 h-2 bg-primary"></div>
        <h1 className="text-charcoal dark:text-white text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] max-w-2xl uppercase">
          Professional<br/>Journey
        </h1>
        <p className="text-forest-light dark:text-gray-400 text-lg md:text-xl font-light max-w-xl leading-relaxed">
          From academic research to global asset management. A record of building high-integrity solutions at the intersection of Finance and Technology.
        </p>
      </div>

      <div className="relative flex flex-col">
        {EXPERIENCE.map((item, index) => (
          <div key={item.id} className="group flex flex-col md:flex-row gap-0 md:gap-12 relative pb-16 last:pb-0">
            {/* Timeline Left Column */}
            <div className="hidden md:flex w-48 flex-col items-end pt-10 pr-10 text-right shrink-0">
              <span className={`font-mono text-sm font-bold ${item.isCurrent ? 'text-primary' : 'text-charcoal/60 dark:text-gray-400'}`}>
                {item.duration}
              </span>
              <span className="font-mono text-xs text-charcoal/40 dark:text-gray-500 mt-2 font-bold tracking-widest">
                {item.period}
              </span>
            </div>

            {/* Timeline center line */}
            <div className="flex flex-col items-center relative min-h-full">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-concrete-dark dark:bg-white/10 group-last:hidden"></div>
              <div className={`w-4 h-4 rounded-full ${item.isCurrent ? 'bg-primary border-4 border-background-light dark:border-background-dark ring-1 ring-primary' : 'bg-concrete dark:bg-white/10 border-2 border-concrete-dark dark:border-white/20'} z-10 mt-10 shadow-sm transition-all group-hover:scale-125`}></div>
            </div>

            {/* Content Column */}
            <div className="flex-1 pt-4 md:pt-0 pl-10 md:pl-0">
              <div className="bg-concrete dark:bg-white/5 p-8 md:p-10 rounded-sm border border-concrete-dark dark:border-white/10 slab-shadow transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 relative">
                <div className="md:hidden flex flex-col gap-1 mb-4">
                   <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">
                    {item.duration}
                  </span>
                  <span className="font-mono text-[10px] text-charcoal/40 dark:text-gray-500 font-bold uppercase tracking-widest">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-2 leading-tight">
                  {item.role}
                </h3>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-lg text-primary">
                    {item.type === 'internship' ? 'explore' : item.type === 'education' ? 'school' : 'apartment'}
                  </span>
                  <span className="text-forest dark:text-primary font-mono font-bold text-sm tracking-tight uppercase">
                    {item.company}
                  </span>
                </div>

                <p className="text-charcoal/70 dark:text-gray-300 mb-8 leading-relaxed font-light text-base md:text-lg">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map(skill => (
                    <span key={skill} className="inline-flex items-center px-4 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-background-light dark:bg-white/5 text-forest dark:text-gray-300 border border-concrete-dark dark:border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-forest dark:bg-primary/10 py-16 px-8 md:px-16 rounded-sm border border-forest-light dark:border-primary/20 text-center flex flex-col items-center gap-8 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
           <div className="bg-texture w-full h-full"></div>
        </div>

        <div className="w-12 h-12 bg-white/10 dark:bg-primary rounded-full flex items-center justify-center border border-white/10 text-primary dark:text-charcoal shadow-sm">
          <span className="material-symbols-outlined">description</span>
        </div>
        
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-black text-white dark:text-white tracking-tight leading-none uppercase">
            Full Resume Available
          </h2>
          <p className="text-white/60 dark:text-primary/60 text-lg font-light">
            Download the detailed PDF version for a complete look at my certifications, core competencies, and academic achievements.
          </p>
        </div>

        <a 
          href="https://www.istockphoto.com/photos/work-in-progress" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-3 bg-primary text-charcoal hover:bg-white dark:hover:bg-white transition-all duration-500 h-14 px-10 rounded-sm font-bold tracking-widest font-mono text-xs uppercase shadow-2xl"
        >
          <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-y-1">download</span>
          <span>DOWNLOAD PDF RESUME</span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
