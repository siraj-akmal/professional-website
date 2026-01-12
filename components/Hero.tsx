
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]"></div>
      
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-10 relative z-10">
          
          <div className="inline-flex items-center rounded-sm bg-concrete-dark/50 px-4 py-2 text-[10px] md:text-xs font-mono font-bold tracking-[0.4em] text-charcoal ring-1 ring-inset ring-charcoal/10 dark:bg-white/10 dark:text-primary dark:ring-primary/20 uppercase transition-all hover:bg-primary/10">
            <span className="mr-3 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            ACTIVE @ BLACKROCK
          </div>
          
          <div className="space-y-4">
            <h1 className="font-mono text-6xl font-black tracking-tighter text-charcoal sm:text-8xl lg:text-9xl dark:text-white leading-[0.85] uppercase">
              HELLO, I'M <br/>
              <span className="relative inline-block italic text-primary">
                SIRAJ
                <span className="absolute -bottom-2 left-0 h-4 w-full bg-primary/10 -z-10 -rotate-1 skew-x-12"></span>
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <h2 className="font-mono text-2xl sm:text-3xl font-light text-charcoal/40 dark:text-slate-500 uppercase tracking-tighter">
                Business Analyst
              </h2>
              <span className="hidden sm:block text-primary text-2xl">•</span>
              <h2 className="font-mono text-2xl sm:text-3xl font-light text-charcoal/40 dark:text-slate-500 uppercase tracking-tighter">
                Data Engineer
              </h2>
            </div>
          </div>

          <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-charcoal/70 dark:text-slate-300 font-light">
            Architecting high-integrity solutions at the intersection of <span className="text-charcoal dark:text-white font-medium">Finance</span> and <span className="text-charcoal dark:text-white font-medium">Code</span>. I build systems that turn complexity into clarity.
          </p>

          <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center justify-center mt-10">
            <Link
              to="/contact"
              className="group relative flex h-16 w-full sm:w-80 items-center justify-center overflow-hidden rounded bg-forest px-12 font-mono text-sm font-bold tracking-[0.2em] text-white shadow-2xl transition-all hover:bg-charcoal dark:bg-primary dark:text-charcoal dark:hover:bg-white"
            >
              <span className="relative z-10 flex items-center gap-3">
                INITIATE CONTACT
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-2">arrow_forward</span>
              </span>
            </Link>
            <Link
              to="/experience"
              className="flex h-16 items-center justify-center gap-3 rounded border border-concrete-dark px-10 text-sm font-bold text-charcoal hover:bg-concrete transition-all font-mono dark:text-white dark:border-white/10 dark:hover:bg-white/5 tracking-[0.2em] uppercase"
            >
              RESUME OVERVIEW
            </Link>
          </div>

          <div className="mt-20 flex flex-col items-center gap-8 w-full">
            <div className="flex items-center gap-12 text-charcoal/20 dark:text-white/10 uppercase font-mono text-[10px] font-bold tracking-[0.5em]">
               <span>Automate</span>
               <span className="text-primary opacity-50">•</span>
               <span>Analyze</span>
               <span className="text-primary opacity-50">•</span>
               <span>Advise</span>
            </div>
            <div className="h-[1px] w-full max-w-xs bg-gradient-to-r from-transparent via-concrete-dark dark:via-white/10 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Subtle corner accent */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end gap-2 opacity-20 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-charcoal dark:text-white">Built for High Performance</span>
        <div className="w-12 h-1 bg-primary"></div>
      </div>
    </section>
  );
};

export default Hero;
