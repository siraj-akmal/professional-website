
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4 text-forest dark:text-primary">
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold">Selected Works</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-charcoal dark:text-white leading-[0.9] uppercase">
            Recent <span className="text-terracotta italic font-serif normal-case tracking-normal">Creations</span>
          </h1>
          <p className="text-charcoal/50 dark:text-gray-400 mt-6 text-lg max-w-lg leading-relaxed font-light">
            A collection of digital tools, experiments, and full-stack applications built with code and caffeine.
          </p>
        </div>
      </div>

      {/* Changed from grid to flex-wrap with justify-center to center orphans in the last row */}
      <div className="flex flex-wrap justify-center gap-10 mb-20">
        {PROJECTS.map((project) => (
          <article 
            key={project.id} 
            className="group relative bg-concrete dark:bg-white/5 rounded-sm overflow-hidden shadow-slab hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col border-b-[4px] border-transparent hover:border-forest dark:hover:border-primary w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.categories.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-white dark:bg-charcoal/50 border border-concrete-dark dark:border-white/10 rounded-full text-[9px] font-bold text-forest dark:text-primary uppercase tracking-widest">
                    {cat}
                  </span>
                ))}
              </div>
              
              <h3 className="font-mono text-xl font-bold text-charcoal dark:text-white mb-3 group-hover:text-terracotta dark:group-hover:text-primary transition-colors tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-sm text-charcoal/60 dark:text-gray-400 mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="mt-auto pt-6 border-t border-concrete-dark/50 dark:border-white/10 flex items-center justify-center">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal dark:text-white hover:text-terracotta dark:hover:text-primary transition-colors group/link"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  Learn more
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
