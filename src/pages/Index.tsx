import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CoreIdeaSection } from '@/components/CoreIdeaSection';
import { TimelineSection } from '@/components/TimelineSection';
import { ComparisonSection } from '@/components/ComparisonSection';
import { DeathComparisonChart } from '@/components/DeathComparisonChart';
import { ExtinctionSection } from '@/components/ExtinctionSection';
import { MethodSection } from '@/components/MethodSection';
import { FinalSection } from '@/components/FinalSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <CoreIdeaSection />
        <TimelineSection />
        <ComparisonSection />
        <DeathComparisonChart />
        <ExtinctionSection />
        <MethodSection />
        <FinalSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default Index;
