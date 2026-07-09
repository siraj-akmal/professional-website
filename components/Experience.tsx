
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">

      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mid">Career</span>
          <span className="text-mid/40">—</span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">03</span>
        </div>
        <h1
          className="font-display font-bold leading-[0.88] tracking-[-0.02em] text-ink dark:text-chalk uppercase mb-8"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
        >
          Professional<br/>Journey
        </h1>
        <p className="text-lg font-body text-mid dark:text-chalk/60 max-w-xl leading-relaxed">
          From academic research to global asset management. A record of building high-integrity solutions at the intersection of Finance and Technology.
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col">
        {EXPERIENCE.map((item) => (
          <div key={item.id} className="group border-t-2 border-ink dark:border-chalk">
            <div className="flex flex-col md:flex-row md:items-start py-8 md:py-10 gap-6 md:gap-0">

              {/* Left meta */}
              <div className="md:w-52 flex-shrink-0 md:pr-8">
                <div className={`font-mono text-xs font-bold uppercase tracking-wider mb-1 ${item.isCurrent ? 'text-accent' : 'text-mid'}`}>
                  {item.duration}
                </div>
                <div className="font-mono text-[10px] text-mid/60 uppercase tracking-wider">
                  {item.period}
                </div>
              </div>

              {/* Divider on desktop */}
              <div className="hidden md:block w-px bg-ink/10 dark:bg-chalk/10 mr-8 self-stretch" />

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-ink dark:text-chalk uppercase tracking-tight leading-tight mb-1 group-hover:text-accent transition-colors duration-150">
                      {item.role}
                    </h3>
                    <span className="font-mono text-sm font-bold text-accent uppercase tracking-wide">
                      {item.company}
                    </span>
                  </div>
                  {item.isCurrent && (
                    <span className="flex-shrink-0 border-2 border-accent text-accent font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-base text-mid dark:text-chalk/60 leading-relaxed font-body mb-6 max-w-2xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] font-bold uppercase tracking-wider border border-ink/20 dark:border-chalk/20 px-3 py-1 text-mid dark:text-chalk/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t-2 border-ink dark:border-chalk" />
      </div>

      {/* Resume CTA */}
      <div className="mt-20 border-2 border-ink dark:border-chalk shadow-brutal dark:shadow-brutal-chalk bg-ink dark:bg-chalk p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-chalk dark:text-ink uppercase tracking-tight mb-2">
            Full Resume Available
          </h2>
          <p className="text-chalk/60 dark:text-ink/60 font-body">
            Download the detailed PDF for certifications, core competencies, and academic achievements.
          </p>
        </div>
        <a
          href="https://www.istockphoto.com/photos/work-in-progress"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-3 bg-accent text-chalk hover:bg-chalk hover:text-ink font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 border-2 border-accent hover:border-chalk transition-all duration-150"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default Experience;
