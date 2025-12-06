import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="container-narrow mx-auto text-center">
        <p 
          key={`footer-tagline-${language}`}
          className="text-sm text-text-muted font-body mb-6"
        >
          {t('footer.tagline')}
        </p>

        <div className="flex items-center justify-center gap-6" key={`footer-links-${language}`}>
          <a 
            href="#" 
            className="text-xs font-body uppercase tracking-widest text-text-secondary hover:text-accent transition-colors"
          >
            {t('footer.contact')}
          </a>
          <span className="text-border">|</span>
          <a 
            href="#" 
            className="text-xs font-body uppercase tracking-widest text-text-secondary hover:text-accent transition-colors"
          >
            {t('footer.sources')}
          </a>
          <span className="text-border">|</span>
          <a 
            href="#" 
            className="text-xs font-body uppercase tracking-widest text-text-secondary hover:text-accent transition-colors"
          >
            {t('footer.project')}
          </a>
        </div>
      </div>
    </footer>
  );
};
