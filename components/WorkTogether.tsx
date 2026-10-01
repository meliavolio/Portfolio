import Image from 'next/image';
import Link from 'next/link';
import { proposals } from '@/data/proposals';
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

export function WorkTogether() {
  return <section className="section areas" aria-labelledby="areas-title">
    <div className="wrap">
      <header className="collaboration-intro">
        <h2 id="areas-title">¿Cómo podemos trabajar en conjunto?<span aria-hidden="true">.</span></h2>
        <p>Charlas, capacitaciones y proyectos para entender, comunicar y trabajar con tecnología e inteligencia artificial.</p>
      </header>
      <div className="collaboration-list">
        {workAreas.map((area, index) => <article className={`collaboration-area collaboration-area-${area.id}`} key={area.id}>
          <div className="collaboration-area-layout">
            <figure><Image src={area.image} alt={area.alt} fill sizes="(max-width: 700px) 100vw, 48vw" /></figure>
            <div className="collaboration-copy">
              <h3>{proposals.homeAreas[index].title}</h3><p>{proposals.homeAreas[index].text}</p>
              {area.href ? <Link className="budget-link proposal-text-link" href={area.href}>{area.action} <span aria-hidden="true">→</span></Link> : <>
                <details className="proposal-details talk-topics"><summary>Ver temas<span aria-hidden="true">+</span></summary><ul><li>Cultura digital.</li><li>Inteligencia artificial.</li><li>Comunicación.</li><li>Redes sociales.</li></ul></details>
                <p className="talk-note">Podemos definir un tema y un enfoque según el público y el objetivo del encuentro.</p>
                <BudgetLink/>
              </>}
            </div>
          </div>
        </article>)}
      </div>
      <Testimonials/>
      <aside className="custom-invitation custom-invitation-compact">
        <h3>¿Tenés otra idea en mente?<span aria-hidden="true">.</span></h3>
        <div className="invitation-copy">
          <p>Contame qué necesitás. Podemos explorar una propuesta a medida, una colaboración o una forma de llevar estas conversaciones a tu comunidad</p>
          <div className="invitation-actions"><a href="#contacto">Contame tu idea <span aria-hidden="true">→</span></a><BudgetLink/></div>
        </div>
      </aside>
    </div>
  </section>;
}
