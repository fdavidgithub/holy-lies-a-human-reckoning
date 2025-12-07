import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

interface ChartBar {
  id: string;
  category: string;
  value: number;
  displayValue: string;
  unit: string;
  sourceType: 'scientific' | 'historical' | 'mythological';
  confidence: 'high' | 'medium' | 'symbolic';
  isHumanCaused?: boolean;
  disclaimer?: string;
  subtitle?: string;
}

export const DeathComparisonChart = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const chartData: ChartBar[] = [
    // Mass Extinctions
    {
      id: 'extinction-ordovician',
      category: t('chart.extinction.ordovician'),
      value: 85,
      displayValue: '85',
      unit: t('chart.unit.speciesPercent'),
      sourceType: 'scientific',
      confidence: 'high',
    },
    {
      id: 'extinction-devonian',
      category: t('chart.extinction.devonian'),
      value: 75,
      displayValue: '75',
      unit: t('chart.unit.speciesPercent'),
      sourceType: 'scientific',
      confidence: 'high',
    },
    {
      id: 'extinction-permian',
      category: t('chart.extinction.permian'),
      value: 96,
      displayValue: '96',
      unit: t('chart.unit.speciesPercent'),
      sourceType: 'scientific',
      confidence: 'high',
    },
    {
      id: 'extinction-triassic',
      category: t('chart.extinction.triassic'),
      value: 80,
      displayValue: '80',
      unit: t('chart.unit.speciesPercent'),
      sourceType: 'scientific',
      confidence: 'high',
    },
    {
      id: 'extinction-cretaceous',
      category: t('chart.extinction.cretaceous'),
      value: 76,
      displayValue: '76',
      unit: t('chart.unit.speciesPercent'),
      sourceType: 'scientific',
      confidence: 'high',
    },
    // Holy Wars
    {
      id: 'holy-wars',
      category: t('chart.holyWars.title'),
      value: 50,
      displayValue: '50+',
      unit: t('chart.unit.millionPeople'),
      sourceType: 'historical',
      confidence: 'medium',
      isHumanCaused: true,
    },
    // Biblical Events
    {
      id: 'biblical-flood',
      category: t('chart.biblical.flood'),
      value: 20,
      displayValue: '?',
      unit: t('chart.unit.symbolic'),
      sourceType: 'mythological',
      confidence: 'symbolic',
      disclaimer: t('chart.biblical.disclaimer'),
    },
    {
      id: 'biblical-sodom',
      category: t('chart.biblical.sodom'),
      value: 10,
      displayValue: '?',
      unit: t('chart.unit.symbolic'),
      sourceType: 'mythological',
      confidence: 'symbolic',
      disclaimer: t('chart.biblical.disclaimer'),
    },
    {
      id: 'biblical-plagues',
      category: t('chart.biblical.plagues'),
      value: 15,
      displayValue: '?',
      unit: t('chart.unit.symbolic'),
      sourceType: 'mythological',
      confidence: 'symbolic',
      disclaimer: t('chart.biblical.disclaimer'),
    },
    // Pandemics
    {
      id: 'pandemic-blackdeath',
      category: t('chart.pandemic.blackDeath'),
      value: 75,
      displayValue: '75-200',
      unit: t('chart.unit.millionPeople'),
      sourceType: 'scientific',
      confidence: 'high',
    },
    {
      id: 'pandemic-spanish',
      category: t('chart.pandemic.spanish'),
      value: 50,
      displayValue: '50-100',
      unit: t('chart.unit.millionPeople'),
      sourceType: 'scientific',
      confidence: 'high',
    },
    {
      id: 'pandemic-covid',
      category: t('chart.pandemic.covid'),
      value: 7,
      displayValue: '7+',
      unit: t('chart.unit.millionPeople'),
      sourceType: 'scientific',
      confidence: 'high',
      subtitle: t('chart.pandemic.covidNote'),
    },
    // Wars for Power
    {
      id: 'wars-power',
      category: t('chart.wars.power'),
      value: 100,
      displayValue: '100+',
      unit: t('chart.unit.millionPeople'),
      sourceType: 'historical',
      confidence: 'high',
      isHumanCaused: true,
    },
    // Devil Deaths
    {
      id: 'devil-deaths',
      category: t('chart.devil.title'),
      value: 0,
      displayValue: '0',
      unit: '',
      sourceType: 'mythological',
      confidence: 'symbolic',
      subtitle: t('chart.devil.subtitle'),
    },
  ];

  const maxValue = 100;

  const getBarColor = (bar: ChartBar) => {
    if (bar.isHumanCaused) return 'bg-accent';
    if (bar.sourceType === 'mythological') return 'bg-muted-foreground/40';
    if (bar.sourceType === 'scientific') return 'bg-muted-foreground/70';
    return 'bg-muted-foreground/60';
  };

  const getSourceLabel = (type: 'scientific' | 'historical' | 'mythological') => {
    switch (type) {
      case 'scientific': return t('chart.source.scientific');
      case 'historical': return t('chart.source.historical');
      case 'mythological': return t('chart.source.mythological');
    }
  };

  const getConfidenceLabel = (confidence: 'high' | 'medium' | 'symbolic') => {
    switch (confidence) {
      case 'high': return t('chart.confidence.high');
      case 'medium': return t('chart.confidence.medium');
      case 'symbolic': return t('chart.confidence.symbolic');
    }
  };

  // Group data by category
  const groupedData = {
    extinctions: chartData.filter(d => d.id.startsWith('extinction')),
    holyWars: chartData.filter(d => d.id === 'holy-wars'),
    biblical: chartData.filter(d => d.id.startsWith('biblical')),
    pandemics: chartData.filter(d => d.id.startsWith('pandemic')),
    wars: chartData.filter(d => d.id === 'wars-power'),
    devil: chartData.filter(d => d.id === 'devil-deaths'),
  };

  const renderBarGroup = (title: string, bars: ChartBar[], label?: string, showDisclaimer?: boolean) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">{title}</h4>
        {label && (
          <span className="text-xs text-muted-foreground px-2 py-0.5 bg-muted/30 rounded">
            {label}
          </span>
        )}
      </div>
      <div className="space-y-3">
        {bars.map((bar, index) => (
          <div
            key={bar.id}
            className="relative"
            onMouseEnter={() => setHoveredBar(bar.id)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div className="flex items-center gap-4">
              <div className="w-48 md:w-64 flex-shrink-0">
                <span className="text-sm text-foreground/70">{bar.category}</span>
              </div>
              <div className="flex-1 relative h-8 bg-muted/20 rounded overflow-hidden">
                <div
                  className={`h-full ${getBarColor(bar)} rounded transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${(bar.value / maxValue) * 100}%` : '0%',
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono text-foreground/90">
                  {bar.displayValue} {bar.unit}
                </div>
              </div>
            </div>
            {bar.subtitle && (
              <p className="text-xs text-muted-foreground mt-1 ml-48 md:ml-64 pl-4 italic">
                {bar.subtitle}
              </p>
            )}
            {/* Tooltip */}
            {hoveredBar === bar.id && (
              <div className="absolute left-48 md:left-64 top-full mt-1 z-10 bg-card border border-border rounded-md shadow-lg p-3 min-w-48 animate-fade-in">
                <div className="text-xs space-y-1">
                  <p><span className="text-muted-foreground">{t('chart.tooltip.source')}:</span> <span className="text-foreground">{getSourceLabel(bar.sourceType)}</span></p>
                  <p><span className="text-muted-foreground">{t('chart.tooltip.confidence')}:</span> <span className="text-foreground">{getConfidenceLabel(bar.confidence)}</span></p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {showDisclaimer && (
        <p className="text-xs text-muted-foreground mt-3 pl-48 md:pl-64 italic border-l-2 border-accent/30 ml-4">
          {t('chart.biblical.disclaimer')}
        </p>
      )}
    </div>
  );

  return (
    <section id="death-chart" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`font-display text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('chart.title')}
        </h2>
        <p className={`text-lg text-muted-foreground mb-12 max-w-3xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('chart.subtitle')}
        </p>

        {/* Legend */}
        <div className={`flex flex-wrap gap-6 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent rounded" />
            <span className="text-xs text-muted-foreground">{t('chart.legend.humanCaused')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-muted-foreground/70 rounded" />
            <span className="text-xs text-muted-foreground">{t('chart.legend.scientific')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-muted-foreground/40 rounded" />
            <span className="text-xs text-muted-foreground">{t('chart.legend.mythological')}</span>
          </div>
        </div>

        {/* Chart Groups */}
        <div className={`space-y-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {renderBarGroup(
            t('chart.group.extinctions'),
            groupedData.extinctions,
            t('chart.label.speciesNotAnimals')
          )}
          
          {renderBarGroup(
            t('chart.group.holyWars'),
            groupedData.holyWars,
            t('chart.label.documented')
          )}
          
          {renderBarGroup(
            t('chart.group.biblical'),
            groupedData.biblical,
            t('chart.label.symbolic'),
            true
          )}
          
          {renderBarGroup(
            t('chart.group.pandemics'),
            groupedData.pandemics,
            t('chart.label.biological')
          )}
          
          {renderBarGroup(
            t('chart.group.wars'),
            groupedData.wars,
            t('chart.label.powerNotReligion')
          )}
          
          {renderBarGroup(
            t('chart.group.devil'),
            groupedData.devil
          )}
        </div>

        {/* Explanatory paragraph */}
        <div className={`mt-16 p-6 bg-muted/10 border border-border/50 rounded-lg transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-foreground/80 leading-relaxed">
            {t('chart.explanation')}
          </p>
        </div>
      </div>
    </section>
  );
};