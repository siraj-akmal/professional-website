
import React from 'react';
import { Link } from 'react-router-dom';
import { TECH_STACK, PROJECTS } from '../constants';

const About: React.FC = () => {
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1NhRZKbsmyTk1HKx48e5o-a8o_E4tYq_s";

  const socialLinks = [
    { label: 'Email',    url: 'mailto:sra.303@gmail.com' },
    { label: 'GitHub',   url: 'https://github.com/siraj-akmal' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/siraj-akmal/' },
  ];

  return (
    <section className="w-full max-w-7xl px-6 md:px-12 py-16 md:py-24 mx-auto">

      {/* Section header */}
      <div className="flex items-center justify-between border-b-2 border-ink dark:border-chalk pb-6 mb-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mid">About</span>
          <span className="text-mid/40">—</span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">01</span>
        </div>
        <div className="flex gap-6">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.url}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="font-mono text-[10px] font-bold uppercase tracking-widest text-mid hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-24">

        {/* Text content */}
        <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">
          <h1
            className="font-display font-bold leading-[0.88] tracking-[-0.02em] text-ink dark:text-chalk uppercase"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
          >
            Turning Unstructured<br/>
            Data Into{' '}
            <span className="text-accent">Actionable</span><br/>
            Insights.
          </h1>

          <div className="flex flex-col gap-5 text-lg leading-relaxed text-mid dark:text-chalk/60 font-body max-w-xl border-l-4 border-accent pl-6">
            <p>
              I'm a Cross-Functional Analyst at BlackRock, working at the intersection of Finance and Data Science.
            </p>
            <p>
              Dedicated to the intersection of code and capital. I build resilient systems that operate seamlessly behind the scenes.
            </p>
          </div>

          {/* Tech stack */}
          <div className="pt-8 border-t-2 border-ink/10 dark:border-chalk/10">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mid mb-5 block">
              Current Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map(item => (
                <span
                  key={item}
                  className="font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink dark:border-chalk px-3 py-1.5 text-ink dark:text-chalk hover:bg-ink hover:text-chalk dark:hover:bg-chalk dark:hover:text-ink transition-all duration-150 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ink dark:bg-chalk text-chalk dark:text-ink font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 border-2 border-ink dark:border-chalk shadow-brutal dark:shadow-brutal-chalk hover:bg-accent hover:border-accent hover:shadow-brutal-accent dark:hover:bg-accent dark:hover:text-chalk dark:hover:border-accent transition-all duration-150 w-fit"
          >
            <span className="material-symbols-outlined text-[18px]">coffee</span>
            Let's Grab a Coffee
          </Link>
        </div>

        {/* Profile image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-sm">
            {/* Offset accent block */}
            <div className="absolute top-3 left-3 right-0 bottom-0 bg-accent -z-10"></div>
            <div className="relative border-2 border-ink dark:border-chalk overflow-hidden aspect-[3/4] bg-chalk-dark">
              <img
                src={profileImageUrl}
                alt="Siraj Akmal"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
                onError={() => { console.warn('Could not load profile image.'); }}
              />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-mid">
              <span>SIRAJ_PORTRAIT.JPG</span>
              <span>New York City, NY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Work */}
      <div className="border-t-2 border-ink dark:border-chalk pt-16">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mid">Recent Work</span>
            <span className="text-mid/40">—</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">02</span>
          </div>
          <Link
            to="/projects"
            className="font-mono text-xs font-bold uppercase tracking-widest text-mid hover:text-accent transition-colors flex items-center gap-2"
          >
            View All
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((work) => (
            <div key={work.title} className="group cursor-pointer">
              <div className="border-2 border-ink dark:border-chalk overflow-hidden aspect-[4/3] relative group-hover:shadow-brutal-accent group-hover:border-accent transition-all duration-200">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url('${work.image}')` }}
                />
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="pt-4 pb-2 border-b-2 border-ink/10 dark:border-chalk/10">
                <h4 className="font-display text-base font-bold text-ink dark:text-chalk group-hover:text-accent transition-colors tracking-tight uppercase mb-1">
                  {work.title}
                </h4>
                <p className="font-mono text-[10px] text-mid uppercase tracking-widest">
                  {work.categories.join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
