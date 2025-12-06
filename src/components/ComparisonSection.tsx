import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ComparisonCard {
  titleKey: string;
  valueKey: string;
  descKey: string;
  barWidth: number;
  isAccent?: boolean;
}

const cards: ComparisonCard[] = [
  { titleKey: 'comparison.nature.title', valueKey: 'comparison.nature.value', descKey: 'comparison.nature.desc', barWidth: 100 },
  { titleKey: 'comparison.god.title', valueKey: 'comparison.god.value', descKey: 'comparison.god.desc', barWidth: 15, isAccent: true },
  { titleKey: 'comparison.industrial.title', valueKey: 'comparison.industrial.value', descKey: 'comparison.industrial.desc', barWidth: 3, isAccent: true },
];

const ComparisonCard = ({ card, index }: { card: ComparisonCard; index: number }) => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="mb-4">
        <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-1">
          {t(card.titleKey)}
        </h3>
        <p className={`text-2xl md:text-3xl font-body font-light ${card.isAccent ? 'text-accent' : 'text-text-secondary'}`}>
          {t(card.valueKey)}
        </p>
      </div>
      
      {/* Visual bar */}
      <div className="h-2 bg-border rounded-sm mb-3 overflow-hidden">
        <div 
          className={`h-full rounded-sm transition-all duration-1000 ${card.isAccent ? 'bg-accent' : 'bg-text-muted'}`}
          style={{ width: isVisible ? `${card.barWidth}%` : '0%' }}
        />
      </div>
      
      <p className="text-sm text-text-muted font-body">
        {t(card.descKey)}
      </p>
    </div>
  );
};

export const ComparisonSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comparison" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h2 
          ref={ref}
          key={`comparison-title-${language}`}
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 text-center text-foreground transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {t('comparison.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16" key={`comparison-cards-${language}`}>
          {cards.map((card, index) => (
            <ComparisonCard key={card.titleKey} card={card} index={index} />
          ))}
        </div>

        {/* Conclusion */}
        <div 
          className={`text-center transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <p 
            key={`comparison-conclusion-${language}`}
            className="text-xl md:text-2xl font-display italic text-accent"
          >
            {t('comparison.conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
};
