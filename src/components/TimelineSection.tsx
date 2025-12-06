import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TimelineEvent {
  titleKey: string;
  yearKey: string;
  descKey: string;
  type: 'natural' | 'human' | 'current';
}

const events: TimelineEvent[] = [
  { titleKey: 'timeline.event1.title', yearKey: 'timeline.event1.year', descKey: 'timeline.event1.desc', type: 'natural' },
  { titleKey: 'timeline.event2.title', yearKey: 'timeline.event2.year', descKey: 'timeline.event2.desc', type: 'natural' },
  { titleKey: 'timeline.event3.title', yearKey: 'timeline.event3.year', descKey: 'timeline.event3.desc', type: 'human' },
  { titleKey: 'timeline.event4.title', yearKey: 'timeline.event4.year', descKey: 'timeline.event4.desc', type: 'human' },
  { titleKey: 'timeline.event5.title', yearKey: 'timeline.event5.year', descKey: 'timeline.event5.desc', type: 'human' },
  { titleKey: 'timeline.event6.title', yearKey: 'timeline.event6.year', descKey: 'timeline.event6.desc', type: 'current' },
];

const TimelineItem = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const dotColor = event.type === 'natural' 
    ? 'bg-text-muted' 
    : event.type === 'current' 
      ? 'bg-accent animate-pulse' 
      : 'bg-accent';

  return (
    <div 
      ref={ref}
      className={`relative pl-8 pb-12 last:pb-0 transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Line */}
      <div className="absolute left-[3px] top-2 bottom-0 w-px bg-border" />
      
      {/* Dot */}
      <div className={`absolute left-0 top-2 w-[7px] h-[7px] rounded-full ${dotColor}`} />
      
      {/* Content */}
      <div>
        <span className="text-xs font-body uppercase tracking-widest text-text-muted block mb-1">
          {t(event.yearKey)}
        </span>
        <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
          {t(event.titleKey)}
        </h3>
        <p className="text-text-secondary font-body leading-relaxed">
          {t(event.descKey)}
        </p>
      </div>
    </div>
  );
};

export const TimelineSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="timeline" className="section-padding bg-surface-elevated">
      <div className="container-narrow mx-auto">
        <h2 
          ref={ref}
          key={`timeline-title-${language}`}
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 text-center text-foreground transition-all duration-500 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {t('timeline.title')}
        </h2>

        <div className="max-w-2xl mx-auto" key={`timeline-events-${language}`}>
          {events.map((event, index) => (
            <TimelineItem key={event.titleKey} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
