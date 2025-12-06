import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />

      <div 
        ref={ref}
        className="relative z-10 container-narrow mx-auto px-6 text-center"
      >
        <h1 
          key={`title-${language}`}
          className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <span className="text-foreground">{t('hero.title')}</span>
        </h1>

        <p 
          key={`subtitle-${language}`}
          className={`font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-500 delay-100 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.15s' }}
        >
          {t('hero.subtitle')}
        </p>

        <div 
          className={`transition-all duration-500 delay-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#idea"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-body text-sm uppercase tracking-widest hover:bg-accent/90 transition-all duration-300 glow-accent"
          >
            {t('hero.cta')}
          </a>

          <p 
            key={`micro-${language}`}
            className="mt-6 text-xs text-text-muted font-body italic"
          >
            {t('hero.micro')}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-text-muted" size={24} />
        </div>
      </div>
    </section>
  );
};
