import type { Metadata } from 'next';
import Link from 'next/link';
import { proposals } from '@/data/proposals';
import { ProposalExplorer } from '@/components/ProposalExplorer';
import { ContactSection } from '@/components/ContactSection';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Talleres y comunicación — Melisa Avolio',
  description: proposals.intro,
  alternates: { canonical: '/propuestas' },
  openGraph: { title: 'Talleres y comunicación — Melisa Avolio', description: proposals.intro, url: '/propuestas', type: 'website', locale: 'es_AR' },
  twitter: { card: 'summary', title: 'Talleres y comunicación — Melisa Avolio', description: proposals.intro },
};

export default function ProposalsPage() {
  return <>
    <SiteHeader/>
    <main id="contenido" className="proposals-page">
      <header className="proposals-intro wrap" id="inicio">
        <Link className="back-home" href="/#inicio">← Volver al inicio</Link>
        <h1>{proposals.title}<span aria-hidden="true">.</span></h1>
        <p>{proposals.intro}</p>
      </header>
      <ProposalExplorer/>
      <ContactSection/>
    </main>
    <SiteFooter/>
  </>;
}
