
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Hero: React.FC = () => {
  // Change the index to feature a different project in the hero card.
  const featured = PROJECTS[0];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col flex-1">

      {/* Status bar */}
      <div className="flex items-center justify-between py-6 border-b-2 border-ink/10 dark:border-chalk/10">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mid">
            Currently @ BlackRock — Cross Functional Analyst
          </span>
        </div>
        <span className="font-mono text-[10px] font-bold text-mid uppercase tracking-widest hidden sm:block">
          New York City, NY
        </span>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col justify-center py-16 md:py-20">

        {/* Two-column layout: intro copy (left) + featured project card (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left column — sub-headline, heading, role, description, CTAs */}
          <div className="flex flex-col">

            {/* Accent label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-accent"></div>
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent font-bold">
                Finance & Data Science
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="font-display font-bold leading-[0.85] tracking-[-0.03em] text-ink dark:text-chalk uppercase mb-12"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)' }}
            >
              <span className="block">HELLO,</span>
              <span className="block">I'M SIRAJ.</span>
            </h1>

            {/* Role tags */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="font-mono text-base md:text-xl font-bold text-ink/60 dark:text-chalk/60 uppercase tracking-tight">
                Business Analyst
              </span>
              <span className="text-accent font-bold text-xl">×</span>
              <span className="font-mono text-base md:text-xl font-bold text-ink/60 dark:text-chalk/60 uppercase tracking-tight">
                Data Engineer
              </span>
            </div>

            {/* Description */}
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-mid dark:text-chalk/60 font-body mb-14">
              Architecting high-integrity solutions at the intersection of{' '}
              <strong className="text-ink dark:text-chalk font-semibold">Finance</strong> and{' '}
              <strong className="text-ink dark:text-chalk font-semibold">Code</strong>.
              I build systems that turn complexity into clarity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-3 bg-ink dark:bg-chalk text-chalk dark:text-ink font-mono text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 border-2 border-ink dark:border-chalk shadow-brutal dark:shadow-brutal-chalk hover:bg-accent hover:border-accent hover:shadow-brutal-accent dark:hover:bg-accent dark:hover:text-chalk dark:hover:border-accent active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-chalk dark:focus-visible:ring-offset-ink"
              >
                Initiate Contact
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/experience"
                className="flex items-center gap-3 bg-transparent text-ink dark:text-chalk font-mono text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 border-2 border-ink dark:border-chalk hover:bg-ink hover:text-chalk dark:hover:bg-chalk dark:hover:text-ink transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-chalk dark:focus-visible:ring-offset-ink"
              >
                Resume Overview
              </Link>
            </div>
          </div>

          {/* Right column — featured project card */}
          <a
            href={featured.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex flex-col border-2 border-ink dark:border-chalk bg-chalk dark:bg-ink shadow-brutal dark:shadow-brutal-chalk hover:border-accent hover:shadow-brutal-accent active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-chalk dark:focus-visible:ring-offset-ink"
          >
            {/* Card header strip */}
            <div className="flex items-center justify-between border-b-2 border-ink dark:border-chalk px-5 py-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mid">
                Featured Project
              </span>
              <span className="text-accent text-sm">★</span>
            </div>

            {/* Thumbnail */}
            <div className="aspect-video border-b-2 border-ink dark:border-chalk overflow-hidden bg-chalk-dark dark:bg-ink flex items-center justify-center p-12">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-wrap gap-2">
                {featured.categories.map(cat => (
                  <span
                    key={cat}
                    className="font-mono text-[10px] font-bold uppercase tracking-wider border-2 border-accent/50 text-accent px-2 py-0.5"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold text-ink dark:text-chalk uppercase tracking-tight leading-tight group-hover:text-accent transition-colors duration-150">
                {featured.title}
              </h3>

              <p className="text-sm text-mid dark:text-chalk/60 leading-relaxed font-body line-clamp-3">
                {featured.description}
              </p>

              <span className="mt-1 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-ink dark:text-chalk group-hover:text-accent border-b-2 border-transparent group-hover:border-accent transition-all duration-150 w-fit pb-0.5">
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                View Project
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="border-t-2 border-ink dark:border-chalk py-5 overflow-hidden">
        <div className="marquee-track">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 mr-16 font-mono text-xs font-bold uppercase tracking-[0.4em] text-ink/20 dark:text-chalk/20 whitespace-nowrap"
            >
              <span>Automate</span>
              <span className="text-accent">★</span>
              <span>Analyze</span>
              <span className="text-accent">★</span>
              <span>Advise</span>
              <span className="text-accent">★</span>
            </span>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
