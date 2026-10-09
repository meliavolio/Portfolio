import type { Metadata } from 'next';
import { getProposals } from './content';
import { routes, type Locale } from './i18n';

export function metadataFor(locale: Locale, page: 'home' | 'proposals'): Metadata {
  const title = page === 'proposals'
    ? `${getProposals(locale).title} — Melisa Avolio`
    : locale === 'en'
      ? 'Melisa Avolio — Technology journalist, author & AI educator'
      : 'Melisa Avolio — Tecnología, comunicación, educación e IA';
  const description = page === 'proposals' ? getProposals(locale).intro : locale === 'en'
    ? 'Melisa Avolio’s portfolio: technology journalism, the Redes Pop newsletter, an AI book, workshops and communication consulting.'
    : 'Portfolio de Melisa Avolio, periodista especializada en tecnología, comunicadora y formadora en inteligencia artificial.';
  return {
    metadataBase: new URL('https://meliavolio.netlify.app'), title, description,
    alternates: { canonical: routes[locale][page], languages: { es: routes.es[page], en: routes.en[page], 'x-default': routes.es[page] } },
    openGraph: { title, description, url: routes[locale][page], type: 'website', locale: locale === 'en' ? 'en_US' : 'es_AR', alternateLocale: locale === 'en' ? 'es_AR' : 'en_US' },
    twitter: { card: 'summary', title, description }, icons: { icon: '/favicon.svg' },
  };
}
