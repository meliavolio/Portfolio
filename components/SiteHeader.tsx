import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getPortfolio } from '@/lib/content';
import { routes, ui, type Locale } from '@/lib/i18n';
import { LanguageSwitch } from '@/components/LanguageSwitch';

export function SiteHeader({ home = false, locale = 'es' }: { home?: boolean; locale?: Locale }) {
  const portfolio = getPortfolio(locale);
  const text = ui[locale];
  return <>
    <a className="skip-link" href="#contenido">{text.skip}</a>
    <header className="site-header"><div className="wrap header-inner">
      <Link className="wordmark" href={home ? '#inicio' : `${routes[locale].home}#inicio`} aria-label={text.homeLabel}>MA<span>.</span></Link>
      <nav aria-label={text.navigation}>{portfolio.navigation.map(item => <Link key={item.href} href={!home && item.href.startsWith('#') ? `${routes[locale].home}${item.href}` : item.href} aria-current={!home && item.href === routes[locale].proposals ? 'page' : undefined}>{item.label}</Link>)}</nav>
      <div className="header-actions"><a className="header-contact" href="#contacto">{text.contact} <ArrowUpRight size={14} aria-hidden="true" /></a><LanguageSwitch locale={locale} page={home ? 'home' : 'proposals'}/></div>
    </div></header>
  </>;
}
