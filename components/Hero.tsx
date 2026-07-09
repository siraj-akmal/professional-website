
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col px-6 md:px-12 lg:px-24">

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
        <span className="font-mono text-[10px] font-bold text-mid/50 uppercase tracking-widest hidden sm:block">
          New York City, NY
        </span>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col justify-center py-16 md:py-20">

        {/* Accent label */}
        <div className="flex items-center gap-4 mb-8">
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
          <span className="font-mono text-base md:text-xl font-bold text-ink/30 dark:text-chalk/30 uppercase tracking-tight">
            Business Analyst
          </span>
          <span className="text-accent font-bold text-xl">×</span>
          <span className="font-mono text-base md:text-xl font-bold text-ink/30 dark:text-chalk/30 uppercase tracking-tight">
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
            className="group flex items-center gap-3 bg-ink dark:bg-chalk text-chalk dark:text-ink font-mono text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 border-2 border-ink dark:border-chalk shadow-brutal dark:shadow-brutal-chalk hover:bg-accent hover:border-accent hover:shadow-brutal-accent dark:hover:bg-accent dark:hover:text-chalk dark:hover:border-accent transition-all duration-150"
          >
            Initiate Contact
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <Link
            to="/experience"
            className="flex items-center gap-3 bg-transparent text-ink dark:text-chalk font-mono text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 border-2 border-ink dark:border-chalk hover:bg-ink hover:text-chalk dark:hover:bg-chalk dark:hover:text-ink transition-all duration-150"
          >
            Resume Overview
          </Link>
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
    </section>
  );
};

export default Hero;
