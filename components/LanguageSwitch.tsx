'use client';

import { routes, ui, type Locale } from '@/lib/i18n';
import { useRouter } from 'next/navigation';

export function LanguageSwitch({ locale, page }: { locale: Locale; page: 'home' | 'proposals' }) {
  const router = useRouter();
  return <div className="language-switch" role="group" aria-label={ui[locale].language}>
    {(['es', 'en'] as const).map(language => <a
      key={language} href={routes[language][page]} lang={language} hrefLang={language}
      aria-current={language === locale ? 'page' : undefined}
      aria-label={language === 'es' ? 'Español' : 'English'}
      onClick={event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        // Section IDs are shared so language changes keep the reader in the same section.
        event.preventDefault();
        router.push(`${routes[language][page]}${window.location.hash}`);
      }}
    >{language.toUpperCase()}</a>)}
  </div>;
}
