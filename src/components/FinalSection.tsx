import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const FinalSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="end" className="section-padding bg-surface-elevated">
      <div className="container-narrow mx-auto text-center">
        <h2 
          ref={ref}
          key={`final-title-${language}`}
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-foreground transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {t('final.title')}
        </h2>

        <div className="max-w-2xl mx-auto space-y-6 mb-12" key={`final-content-${language}`}>
          <p 
            className={`text-lg text-text-secondary font-body leading-relaxed transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            {t('final.p1')}
          </p>
          <p 
            className={`text-lg text-text-secondary font-body leading-relaxed transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {t('final.p2')}
          </p>
          <p 
            className={`text-lg text-accent font-body leading-relaxed font-medium transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            {t('final.p3')}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className={`inline-block px-8 py-4 border border-accent text-accent font-body text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          {t('final.cta')}
        </button>
      </div>
    </section>
  );
};
