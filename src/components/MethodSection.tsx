import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const sources = [
  'method.source1',
  'method.source2',
  'method.source3',
  'method.source4',
];

export const MethodSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="method" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h2 
          ref={ref}
          key={`method-title-${language}`}
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-center text-foreground transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {t('method.title')}
        </h2>

        <div className="max-w-3xl mx-auto" key={`method-content-${language}`}>
          <div className="space-y-6 mb-12">
            <p 
              className={`text-lg text-text-secondary font-body leading-relaxed transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              {t('method.p1')}
            </p>
            <p 
              className={`text-lg text-text-secondary font-body leading-relaxed transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              {t('method.p2')}
            </p>
            <p 
              className={`text-lg text-accent font-body leading-relaxed font-medium transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              {t('method.p3')}
            </p>
          </div>

          {/* Sources */}
          <div 
            className={`transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="font-display text-xl font-medium text-foreground mb-4">
              {t('method.sources')}
            </h3>
            <ul className="space-y-2">
              {sources.map((sourceKey, index) => (
                <li 
                  key={sourceKey}
                  className="text-text-muted font-body text-sm flex items-center gap-2"
                >
                  <span className="text-accent">→</span>
                  {t(sourceKey)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
