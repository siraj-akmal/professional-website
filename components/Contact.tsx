
import React from 'react';

const Contact: React.FC = () => {
  const email = 'sra.303@gmail.com';

  return (
    <section className="flex-grow flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 lg:py-40 w-full max-w-7xl mx-auto">
      <div className="w-full mb-20 animate-fade-in-down">
        <span className="inline-flex items-center gap-6 text-[10px] font-mono font-bold tracking-[0.4em] text-primary uppercase">
          <span className="w-16 h-[1px] bg-primary"></span>
          Get In Touch
        </span>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24 w-full">
        <div className="flex flex-col gap-12 group/email">
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl text-charcoal/50 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
              Looking to collaborate on a new project or just want to chat about coffee and code? Feel free to reach out.
            </p>
          </div>
          
          <div className="relative inline-block w-fit">
            <a 
              className="block font-mono text-[10vw] md:text-7xl lg:text-8xl xl:text-[7vw] font-bold tracking-tighter leading-[0.85] text-charcoal dark:text-white hover:text-primary transition-all duration-500 whitespace-nowrap select-all decoration-clone"
              href={`mailto:${email}`}
            >
              sra.303@<br className="md:hidden"/>gmail.com
            </a>
            <div className="h-2 md:h-4 w-0 bg-primary mt-8 transition-all duration-700 ease-out group-hover/email:w-full"></div>
          </div>

          <div className="mt-8">
            <button 
              onClick={() => navigator.clipboard.writeText(email)}
              className="group flex items-center gap-4 px-8 py-5 bg-transparent border border-charcoal/10 dark:border-white/10 rounded-sm hover:bg-charcoal hover:border-charcoal dark:hover:bg-primary dark:hover:text-charcoal transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              <span className="material-symbols-outlined text-charcoal/30 dark:text-gray-400 group-hover:text-white dark:group-hover:text-charcoal text-[22px]">content_copy</span>
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-charcoal dark:text-gray-300 group-hover:text-white dark:group-hover:text-charcoal">Copy Address</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 pt-16 border-t border-concrete-dark dark:border-white/5">
          {[
            { 
              label: 'LinkedIn', 
              sub: 'Professional', 
              icon: 'share', 
              url: 'https://www.linkedin.com/in/siraj-akmal/' 
            },
            { 
              label: 'GitHub', 
              sub: 'Code', 
              icon: 'code', 
              url: 'https://github.com/siraj-akmal' 
            }
          ].map(social => (
            <a 
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 pr-10 pl-8 py-5 bg-concrete dark:bg-white/5 border border-transparent hover:border-primary/20 rounded-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <span className="material-symbols-outlined text-charcoal/30 dark:text-gray-500 group-hover:text-primary text-[32px]">
                {social.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-mono font-bold leading-none text-charcoal dark:text-white mb-2 uppercase tracking-tighter">
                  {social.label}
                </span>
                <span className="text-[9px] font-bold text-charcoal/40 dark:text-gray-500 uppercase tracking-widest group-hover:text-primary">
                  {social.sub}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
