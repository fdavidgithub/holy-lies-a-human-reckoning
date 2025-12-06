import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const causes = [
  'extinction.cause1',
  'extinction.cause2',
  'extinction.cause3',
  'extinction.cause4',
  'extinction.cause5',
];

export const ExtinctionSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation(0.3);

  return (
    <section id="extinction" className="section-padding bg-surface-elevated">
      <div className="container-narrow mx-auto">
        <h2 
          ref={ref}
          key={`extinction-title-${language}`}
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-center text-foreground transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {t('extinction.title')}
        </h2>

        <div className="max-w-3xl mx-auto" key={`extinction-content-${language}`}>
          <p 
            className={`text-lg text-text-secondary font-body leading-relaxed mb-6 transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            {t('extinction.intro')}
          </p>

          <p 
            className={`text-lg text-text-secondary font-body leading-relaxed mb-8 transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {t('extinction.current')}
          </p>

          {/* Causes list */}
          <ul className="space-y-3 mb-12">
            {causes.map((causeKey, index) => (
              <li 
                key={causeKey}
                className={`flex items-center gap-3 text-text-secondary font-body transition-all duration-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {t(causeKey)}
              </li>
            ))}
          </ul>

          {/* Quote block */}
          <div 
            ref={quoteRef}
            className={`relative p-8 md:p-12 bg-card border-l-2 border-accent transition-all duration-500 ${quoteVisible ? 'animate-scale-in' : 'opacity-0'}`}
          >
            <p className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed">
              "{t('extinction.quote')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
