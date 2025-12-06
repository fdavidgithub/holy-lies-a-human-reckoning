import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const StatCard = ({ label, value, delay }: { label: string; value: string; delay: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`p-6 bg-card border border-border rounded-sm transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">
        {value}
      </p>
      <p className="text-sm text-text-secondary font-body">
        {label}
      </p>
    </div>
  );
};

export const CoreIdeaSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="idea" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div ref={ref}>
            <h2 
              key={`idea-title-${language}`}
              className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            >
              {t('idea.title')}
            </h2>

            <div className="space-y-6" key={`idea-content-${language}`}>
              <p 
                className={`text-lg text-text-secondary font-body leading-relaxed transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.1s' }}
              >
                {t('idea.p1')}
              </p>
              <p 
                className={`text-lg text-text-secondary font-body leading-relaxed transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                {t('idea.p2')}
              </p>
              <p 
                className={`text-lg text-accent font-body leading-relaxed font-medium transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
              >
                {t('idea.p3')}
              </p>
            </div>
          </div>

          {/* Right: Stat cards */}
          <div className="space-y-4" key={`stats-${language}`}>
            <StatCard 
              label={t('idea.stat1.label')} 
              value={t('idea.stat1.value')} 
              delay={0.1}
            />
            <StatCard 
              label={t('idea.stat2.label')} 
              value={t('idea.stat2.value')} 
              delay={0.2}
            />
            <StatCard 
              label={t('idea.stat3.label')} 
              value={t('idea.stat3.value')} 
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
