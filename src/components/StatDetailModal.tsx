import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface DetailEvent {
  titleKey: string;
  yearKey: string;
  deathsKey: string;
  percentKey: string;
}

interface StatDetailConfig {
  titleKey: string;
  descriptionKey: string;
  events: DetailEvent[];
  disclaimerKey?: string;
}

const statDetails: Record<string, StatDetailConfig> = {
  stat1: {
    titleKey: 'detail.stat1.title',
    descriptionKey: 'detail.stat1.description',
    events: [
      { titleKey: 'detail.stat1.event1.title', yearKey: 'detail.stat1.event1.year', deathsKey: 'detail.stat1.event1.deaths', percentKey: 'detail.stat1.event1.percent' },
      { titleKey: 'detail.stat1.event2.title', yearKey: 'detail.stat1.event2.year', deathsKey: 'detail.stat1.event2.deaths', percentKey: 'detail.stat1.event2.percent' },
      { titleKey: 'detail.stat1.event3.title', yearKey: 'detail.stat1.event3.year', deathsKey: 'detail.stat1.event3.deaths', percentKey: 'detail.stat1.event3.percent' },
      { titleKey: 'detail.stat1.event4.title', yearKey: 'detail.stat1.event4.year', deathsKey: 'detail.stat1.event4.deaths', percentKey: 'detail.stat1.event4.percent' },
      { titleKey: 'detail.stat1.event5.title', yearKey: 'detail.stat1.event5.year', deathsKey: 'detail.stat1.event5.deaths', percentKey: 'detail.stat1.event5.percent' },
    ],
  },
  stat2: {
    titleKey: 'detail.stat2.title',
    descriptionKey: 'detail.stat2.description',
    events: [
      { titleKey: 'detail.stat2.event1.title', yearKey: 'detail.stat2.event1.year', deathsKey: 'detail.stat2.event1.deaths', percentKey: 'detail.stat2.event1.percent' },
    ],
    disclaimerKey: 'detail.stat2.disclaimer',
  },
  stat3: {
    titleKey: 'detail.stat3.title',
    descriptionKey: 'detail.stat3.description',
    events: [],
    disclaimerKey: 'detail.stat3.disclaimer',
  },
  stat5: {
    titleKey: 'detail.stat5.title',
    descriptionKey: 'detail.stat5.description',
    events: [
      { titleKey: 'detail.stat5.event1.title', yearKey: 'detail.stat5.event1.year', deathsKey: 'detail.stat5.event1.deaths', percentKey: 'detail.stat5.event1.percent' },
      { titleKey: 'detail.stat5.event2.title', yearKey: 'detail.stat5.event2.year', deathsKey: 'detail.stat5.event2.deaths', percentKey: 'detail.stat5.event2.percent' },
      { titleKey: 'detail.stat5.event3.title', yearKey: 'detail.stat5.event3.year', deathsKey: 'detail.stat5.event3.deaths', percentKey: 'detail.stat5.event3.percent' },
      { titleKey: 'detail.stat5.event4.title', yearKey: 'detail.stat5.event4.year', deathsKey: 'detail.stat5.event4.deaths', percentKey: 'detail.stat5.event4.percent' },
    ],
  },
  stat6: {
    titleKey: 'detail.stat6.title',
    descriptionKey: 'detail.stat6.description',
    events: [
      { titleKey: 'detail.stat6.event1.title', yearKey: 'detail.stat6.event1.year', deathsKey: 'detail.stat6.event1.deaths', percentKey: 'detail.stat6.event1.percent' },
      { titleKey: 'detail.stat6.event2.title', yearKey: 'detail.stat6.event2.year', deathsKey: 'detail.stat6.event2.deaths', percentKey: 'detail.stat6.event2.percent' },
      { titleKey: 'detail.stat6.event3.title', yearKey: 'detail.stat6.event3.year', deathsKey: 'detail.stat6.event3.deaths', percentKey: 'detail.stat6.event3.percent' },
    ],
    disclaimerKey: 'detail.stat6.disclaimer',
  },
  stat7: {
    titleKey: 'detail.stat7.title',
    descriptionKey: 'detail.stat7.description',
    events: [
      { titleKey: 'detail.stat7.event1.title', yearKey: 'detail.stat7.event1.year', deathsKey: 'detail.stat7.event1.deaths', percentKey: 'detail.stat7.event1.percent' },
      { titleKey: 'detail.stat7.event2.title', yearKey: 'detail.stat7.event2.year', deathsKey: 'detail.stat7.event2.deaths', percentKey: 'detail.stat7.event2.percent' },
      { titleKey: 'detail.stat7.event3.title', yearKey: 'detail.stat7.event3.year', deathsKey: 'detail.stat7.event3.deaths', percentKey: 'detail.stat7.event3.percent' },
      { titleKey: 'detail.stat7.event4.title', yearKey: 'detail.stat7.event4.year', deathsKey: 'detail.stat7.event4.deaths', percentKey: 'detail.stat7.event4.percent' },
    ],
  },
};

interface StatDetailModalProps {
  statId: string | null;
  onClose: () => void;
}

export const StatDetailModal = ({ statId, onClose }: StatDetailModalProps) => {
  const { t } = useLanguage();

  if (!statId || !statDetails[statId]) {
    return null;
  }

  const detail = statDetails[statId];

  return (
    <Dialog open={!!statId} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl bg-card border-border max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-foreground">
            {t(detail.titleKey)}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-text-secondary font-body">
            {t(detail.descriptionKey)}
          </p>

          {detail.events.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-display text-foreground font-semibold">
                {t('detail.timeline')}
              </h4>
              <div className="space-y-3">
                {detail.events.map((event, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-background border border-border rounded-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-display font-semibold text-foreground">
                        {t(event.titleKey)}
                      </h5>
                      <span className="text-sm text-text-secondary">
                        {t(event.yearKey)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                          {t('detail.deaths')}
                        </p>
                        <p className="text-xl font-display font-semibold text-accent">
                          {t(event.deathsKey)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                          {t('detail.percent')}
                        </p>
                        <p className="text-xl font-display font-semibold text-foreground">
                          {t(event.percentKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {detail.disclaimerKey && (
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-sm">
              <p className="text-sm text-accent font-body italic">
                {t(detail.disclaimerKey)}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
