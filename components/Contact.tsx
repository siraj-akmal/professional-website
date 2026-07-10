
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const email = 'sra.303@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <section className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 md:py-24 w-full max-w-7xl mx-auto">

      {/* Section label */}
      <div className="flex items-center gap-4 border-b-2 border-ink dark:border-chalk pb-6 mb-16">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-mid">Get In Touch</span>
        <span className="text-mid/40">—</span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">05</span>
      </div>

      <div className="flex flex-col gap-16">

        {/* Email block */}
        <div className="flex flex-col gap-8">
          <p className="text-xl md:text-2xl text-mid dark:text-chalk/60 font-body leading-relaxed max-w-2xl">
            Looking to collaborate on a new project or just want to chat about coffee and code? Feel free to reach out.
          </p>

          <div className="group/email">
            <a
              href={`mailto:${email}`}
              className="font-display font-bold tracking-tighter leading-[0.85] text-ink dark:text-chalk hover:text-accent transition-colors duration-300 uppercase break-all"
              style={{ fontSize: 'clamp(1.75rem, 5.5vw, 6rem)' }}
            >
              {email}
            </a>
            <div className="h-[3px] w-0 bg-accent mt-4 group-hover/email:w-full transition-all duration-500 ease-out" />
          </div>

          <button
            onClick={handleCopy}
            aria-live="polite"
            className="group flex items-center gap-3 border-2 border-ink dark:border-chalk px-6 py-3 hover:bg-ink hover:text-chalk dark:hover:bg-chalk dark:hover:text-ink transition-all duration-150 w-fit text-ink dark:text-chalk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-chalk dark:focus-visible:ring-offset-ink"
          >
            <span className="material-symbols-outlined text-[18px]">{copied ? 'check' : 'content_copy'}</span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">{copied ? 'Copied!' : 'Copy Address'}</span>
          </button>
        </div>

        {/* Social links */}
        <div className="border-t-2 border-ink dark:border-chalk pt-12 flex flex-wrap gap-4">
          {[
            { label: 'LinkedIn', sub: 'Professional Network', url: 'https://www.linkedin.com/in/siraj-akmal/' },
            { label: 'GitHub',   sub: 'Code Repository',      url: 'https://github.com/siraj-akmal' },
          ].map(social => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border-2 border-ink dark:border-chalk px-8 py-6 hover:border-accent hover:shadow-brutal-accent transition-all duration-150 min-w-[180px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-chalk dark:focus-visible:ring-offset-ink"
            >
              <span className="font-display text-xl font-bold uppercase tracking-tight text-ink dark:text-chalk group-hover:text-accent transition-colors mb-1">
                {social.label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-mid">
                {social.sub}
              </span>
              <span className="material-symbols-outlined text-[16px] text-mid group-hover:text-accent mt-5 transition-colors self-end">
                open_in_new
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
