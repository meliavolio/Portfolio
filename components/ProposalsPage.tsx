import Link from 'next/link';
import { getProposals } from '@/lib/content';
import { routes, ui, type Locale } from '@/lib/i18n';
import { ProposalExplorer } from '@/components/ProposalExplorer';
import { ContactSection } from '@/components/ContactSection';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export function ProposalsPage({ locale = 'es' }: { locale?: Locale }) {
  const proposals = getProposals(locale);
  return <>
    <SiteHeader locale={locale}/>
    <main id="contenido" className="proposals-page">
      <header className="proposals-intro wrap" id="inicio">
        <Link className="back-home" href={`${routes[locale].home}#inicio`}>{ui[locale].backHome}</Link>
        <h1>{proposals.title}<span aria-hidden="true">.</span></h1>
        <p>{proposals.intro}</p>
      </header>
      <ProposalExplorer locale={locale}/>
      <ContactSection locale={locale}/>
    </main>
    <SiteFooter locale={locale}/>
  </>;
}
