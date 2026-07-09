
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">

      {/* Section header */}
      <div className="flex items-center justify-between border-b-2 border-ink dark:border-chalk pb-6 mb-14">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mid">Selected Works</span>
          <span className="text-mid/40">—</span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">04</span>
        </div>
      </div>

      {/* Title block */}
      <div className="mb-16">
        <h1
          className="font-display font-bold leading-[0.88] tracking-[-0.02em] text-ink dark:text-chalk uppercase mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
        >
          Recent<br/>
          <span className="text-accent">Creations</span>
        </h1>
        <p className="text-lg font-body text-mid dark:text-chalk/60 max-w-xl leading-relaxed">
          A collection of digital tools, experiments, and full-stack applications built with code and caffeine.
        </p>
      </div>

      {/* Projects list */}
      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <article key={project.id} className="group border-t-2 border-ink dark:border-chalk">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 py-10 md:py-12">

              {/* Index number */}
              <div className="hidden md:block flex-shrink-0 font-mono text-6xl font-bold text-ink/08 dark:text-chalk/[0.06] w-16 pt-2 select-none leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Thumbnail */}
              <div className="md:w-52 lg:w-64 flex-shrink-0">
                <div className="border-2 border-ink dark:border-chalk overflow-hidden aspect-video group-hover:shadow-brutal-accent group-hover:border-accent transition-all duration-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.categories.map(cat => (
                    <span
                      key={cat}
                      className="font-mono text-[10px] font-bold uppercase tracking-wider border border-accent/50 text-accent px-2 py-0.5"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-ink dark:text-chalk uppercase tracking-tight leading-tight group-hover:text-accent transition-colors duration-150">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-mid dark:text-chalk/60 leading-relaxed font-body max-w-xl">
                  {project.description}
                </p>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-ink dark:text-chalk hover:text-accent border-b-2 border-transparent hover:border-accent transition-all duration-150 w-fit pb-0.5"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  View Project
                </a>
              </div>
            </div>
          </article>
        ))}
        <div className="border-t-2 border-ink dark:border-chalk" />
      </div>
    </section>
  );
};

export default Projects;
