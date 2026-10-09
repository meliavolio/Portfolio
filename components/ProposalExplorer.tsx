'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getProposals } from '@/lib/content';
import { ui, type Locale } from '@/lib/i18n';
import { BudgetLink } from '@/components/BudgetLink';
import { ProposalDetails } from '@/components/ProposalDetails';

type Category = 'talleres' | 'comunicacion';
const categories: Category[] = ['talleres', 'comunicacion'];
const firstSentence = (text: string) => text.slice(0, text.indexOf('.') + 1);

export function ProposalExplorer({ locale = 'es' }: { locale?: Locale }) {
  const proposals = getProposals(locale);
  const text = ui[locale];
  const [category, setCategory] = useState<Category>('talleres');
  const [expanded, setExpanded] = useState<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const syncHash = () => {
      setCategory(window.location.hash === '#comunicacion' ? 'comunicacion' : 'talleres');
      setExpanded(null);
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, []);

  function select(next: Category) {
    setCategory(next);
    setExpanded(null);
    if (window.location.hash !== `#${next}`) window.history.pushState(null, '', `#${next}`);
  }

  return <section className="proposal-explorer wrap" aria-label={text.proposalsLabel}>
    <div className="proposal-tabs" role="tablist" aria-label={text.categoriesLabel}>
      {categories.map((item, index) => <button key={item} ref={element => { tabs.current[index] = element; }}
        id={item} role="tab" aria-selected={category === item} aria-controls={`${item}-panel`}
        tabIndex={category === item ? 0 : -1} onClick={() => select(item)}
        onKeyDown={event => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
          event.preventDefault();
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - index;
          select(categories[next]);
          tabs.current[next]?.focus();
        }}>{item === 'talleres' ? text.workshops : text.communication}<span aria-hidden="true">↗</span></button>)}
    </div>
    {categories.map(item => <div key={item} role="tabpanel" id={`${item}-panel`} aria-labelledby={item} hidden={category !== item} tabIndex={0}>
      <div className="proposal-category-layout">
        <figure className="proposal-photo"><Image
          src={item === 'talleres' ? '/assets/foto-talleres.jpg' : '/assets/foto-comunicacion.jpg'}
          alt={item === 'talleres' ? text.workshopAlt : text.communicationAlt}
          width={item === 'talleres' ? 3000 : 5040} height={item === 'talleres' ? 2000 : 3360} sizes="(max-width: 700px) 100vw, 38vw" /></figure>
        <div className="proposal-list">
          {item === 'comunicacion' && <div className="category-intro"><p>{proposals.communicationIntro}</p><p>{text.combination}</p></div>}
          {(item === 'talleres' ? proposals.workshops : proposals.communication).map((proposal, index) => {
            const workshop = item === 'talleres' ? proposals.workshops[index] : null;
            const communication = item === 'comunicacion' ? proposals.communication[index] : null;
            const open = category === item && expanded === index;
            const id = `${item}-detail-${index}`;
            return <article className="compact-proposal" key={proposal.title}>
              <span className="proposal-number" aria-hidden="true">0{index + 1}</span>
              <h3>{proposal.title}</h3>
              <p>{firstSentence(proposal.description)}</p>
              {workshop && <ul className="compact-formats">{workshop.formats.map(format => <li key={format}>{format}</li>)}</ul>}
              <button className="proposal-toggle" aria-expanded={open} aria-controls={id} onClick={event => {
                setExpanded(open ? null : index);
                const button = event.currentTarget;
                requestAnimationFrame(() => {
                  if (button.getBoundingClientRect().top < 0) button.scrollIntoView({ block: 'start', behavior: 'instant' });
                });
              }}>{text.details}<span aria-hidden="true">{open ? '−' : '+'}</span><span className="sr-only"> {text.detailsOf} {proposal.title}</span></button>
              <div id={id} className="proposal-full-details" hidden={!open}>
                <ProposalDetails description={proposal.description} workshop={workshop} communication={communication} locale={locale}/>
              </div>
            </article>;
          })}
          <div className="category-budget"><BudgetLink locale={locale}/></div>
        </div>
      </div>
    </div>)}
  </section>;
}
