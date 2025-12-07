import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { StatDetailModal } from './StatDetailModal';

interface StatCardProps {
  label: string;
  value: string;
  delay: number;
  statId: string;
  onClick?: (statId: string) => void;
  clickable?: boolean;
}

const StatCard = ({ label, value, delay, statId, onClick, clickable = true }: StatCardProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      onClick={() => clickable && onClick?.(statId)}
      className={`p-4 bg-card border border-border rounded-sm transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'} ${clickable ? 'cursor-pointer hover:border-accent hover:bg-card/80' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-2xl md:text-3xl font-display font-semibold text-accent mb-1">
        {value}
      </p>
      <p className="text-xs text-text-secondary font-body">
        {label}
      </p>
      {clickable && (
        <p className="text-[10px] text-accent/60 mt-2 font-body">
          Clique para detalhes →
        </p>
      )}
    </div>
  );
};

export const CoreIdeaSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  const handleStatClick = (statId: string) => {
    setSelectedStat(statId);
  };

  return (
    <>
    <StatDetailModal statId={selectedStat} onClose={() => setSelectedStat(null)} />
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
                className={`text-lg text-text-secondary font-body leading-relaxed transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
              >
                {t('idea.p3')}
              </p>
              <p 
                className={`text-lg text-accent font-body leading-relaxed font-medium transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}
              >
                {t('idea.p4')}
              </p>
            </div>
          </div>

          {/* Right: Stat cards - Grid layout for 7 items */}
          <div className="grid grid-cols-2 gap-3" key={`stats-${language}`}>
            <StatCard 
              label={t('idea.stat1.label')} 
              value={t('idea.stat1.value')} 
              delay={0.1}
              statId="stat1"
              onClick={handleStatClick}
            />
            <StatCard 
              label={t('idea.stat2.label')} 
              value={t('idea.stat2.value')} 
              delay={0.15}
              statId="stat2"
              onClick={handleStatClick}
            />
            <StatCard 
              label={t('idea.stat3.label')} 
              value={t('idea.stat3.value')} 
              delay={0.2}
              statId="stat3"
              onClick={handleStatClick}
            />
            <StatCard 
              label={t('idea.stat4.label')} 
              value={t('idea.stat4.value')} 
              delay={0.25}
              statId="stat4"
              clickable={false}
            />
            <StatCard 
              label={t('idea.stat5.label')} 
              value={t('idea.stat5.value')} 
              delay={0.3}
              statId="stat5"
              onClick={handleStatClick}
            />
            <StatCard 
              label={t('idea.stat6.label')} 
              value={t('idea.stat6.value')} 
              delay={0.35}
              statId="stat6"
              onClick={handleStatClick}
            />
            <div className="col-span-2">
              <StatCard 
                label={t('idea.stat7.label')} 
                value={t('idea.stat7.value')} 
                delay={0.4}
                statId="stat7"
                onClick={handleStatClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
