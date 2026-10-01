import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

export function SiteHeader({ home = false }: { home?: boolean }) {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header"><div className="wrap header-inner">
      <Link className="wordmark" href={home ? '#inicio' : '/#inicio'} aria-label="Melisa Avolio, volver al inicio">MA<span>.</span></Link>
      <nav aria-label="Navegación principal">{portfolio.navigation.map(item => <Link key={item.href} href={!home && item.href.startsWith('#') ? `/${item.href}` : item.href} aria-current={!home && item.href === '/propuestas' ? 'page' : undefined}>{item.label}</Link>)}</nav>
      <a className="header-contact" href="#contacto">Escribime <ArrowUpRight size={14} aria-hidden="true" /></a>
    </div></header>
  </>;
}
