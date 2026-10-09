import Image from 'next/image';
import Link from 'next/link';
import { getProposals } from '@/lib/content';
import { routes, ui, type Locale } from '@/lib/i18n';
import { BudgetLink } from '@/components/BudgetLink';
import { Testimonials } from '@/components/Testimonials';

const workAreas = [
  {
    id: 'charlas',
    href: '/propuestas#talleres',
    action: 'Conocé los talleres',
    image: '/assets/ia-periodistas-horizontal.jpeg',
    alt: 'Melisa frente a una presentación de formación en inteligencia artificial para periodistas',
  },
  {
    id: 'comunicacion',
    href: '/propuestas#comunicacion',
    action: 'Conocé las propuestas',
    image: '/assets/nerdearla.jpeg',
    alt: 'Melisa durante una presentación en Nerdearla',
  },
  {
    id: 'ia-aplicada',
    href: null,
    action: null,
    image: '/assets/formacion-aula.jpeg',
    alt: 'Melisa dicta una formación en la Universidad de Palermo',
  },
];

export function WorkTogether({ locale = 'es' }: { locale?: Locale }) {
  const proposals = getProposals(locale);
  const text = ui[locale];
  const areas = workAreas.map((area, index) => ({ ...area,
    href: area.href ? `${routes[locale].proposals}${index === 0 ? '#talleres' : '#comunicacion'}` : null,
    action: index === 0 ? text.workshopsAction : text.communicationAction,
    alt: locale === 'es' ? area.alt : [ 'Melisa leading an AI training session for journalists', 'Melisa speaking at Nerdearla', 'Melisa teaching at the University of Palermo' ][index],
  }));
  return <section className="section areas" aria-labelledby="areas-title">
    <div className="wrap">
      <header className="collaboration-intro">
        <h2 id="areas-title">{text.collaboration}<span aria-hidden="true">.</span></h2>
        <p>{text.collaborationIntro}</p>
      </header>
      <div className="collaboration-list">
        {areas.map((area, index) => <article className={`collaboration-area collaboration-area-${area.id}`} key={area.id}>
          <div className="collaboration-area-layout">
            <figure><Image src={area.image} alt={area.alt} fill sizes="(max-width: 700px) 100vw, 48vw" /></figure>
            <div className="collaboration-copy">
              <h3>{proposals.homeAreas[index].title}</h3><p>{proposals.homeAreas[index].text}</p>
              {area.href ? <Link className="budget-link proposal-text-link" href={area.href}>{area.action} <span aria-hidden="true">→</span></Link> : <>
                <details className="proposal-details talk-topics"><summary>{text.topics}<span aria-hidden="true">+</span></summary><ul>{text.talkTopics.map(topic => <li key={topic}>{topic}</li>)}</ul></details>
                <p className="talk-note">{text.talkNote}</p>
                <BudgetLink locale={locale}/>
              </>}
            </div>
          </div>
        </article>)}
      </div>
      <Testimonials locale={locale}/>
      <aside className="custom-invitation custom-invitation-compact">
        <h3>{text.custom}<span aria-hidden="true">.</span></h3>
        <div className="invitation-copy">
          <p>{text.customIntro}</p>
          <div className="invitation-actions"><a href="#contacto">{text.customAction} <span aria-hidden="true">→</span></a><BudgetLink locale={locale}/></div>
        </div>
      </aside>
    </div>
  </section>;
}
