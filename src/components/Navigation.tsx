import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { key: 'nav.idea', href: '#idea' },
  { key: 'nav.timeline', href: '#timeline' },
  { key: 'nav.comparison', href: '#comparison' },
  { key: 'nav.extinction', href: '#extinction' },
  { key: 'nav.method', href: '#method' },
  { key: 'nav.end', href: '#end' },
];

export const Navigation = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border" 
          : "bg-transparent"
      )}
    >
      <div className="container-wide mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="font-display text-lg tracking-wide text-foreground hover:text-accent transition-colors"
          >
            HL
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-xs font-body uppercase tracking-widest text-text-secondary hover:text-accent transition-all duration-300"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body uppercase tracking-widest text-text-secondary hover:text-accent transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
