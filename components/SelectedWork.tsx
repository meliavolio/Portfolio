import Image from 'next/image';
import { ui, type Locale } from '@/lib/i18n';

const projects = [
  {
    id: 'libro',
    title: 'Qué es la inteligencia artificial y cómo impacta en nuestras vidas',
    kicker: 'MI LIBRO',
    meta: 'Grijalbo · 2024',
    description:
      'Una guía para entender qué hay detrás de la inteligencia artificial, cómo funciona y qué preguntas abre en nuestra vida cotidiana.',
    image: '/assets/libro-estudio.jpg',
    alt: 'Melisa sostiene su libro sobre inteligencia artificial',
    cta: 'Conocé el libro',
    href: 'https://www.penguinlibros.com/ar/tematicas/356924-libro-que-es-la-inteligencia-artificial-9789502817378',
  },
  {
    id: 'redes-pop',
    title: 'Redes Pop',
    kicker: 'MI NEWSLETTER',
    meta: 'Tecnología + cultura digital',
    description:
      'Una newsletter sobre tecnología, redes sociales y cultura digital. Una mirada sobre cómo las plataformas, los algoritmos y la inteligencia artificial atraviesan nuestra vida cotidiana.',
    image: '/assets/camara.jpg',
    alt: 'Melisa observa a través de una cámara instantánea',
    cta: 'Leé Redes Pop',
    href: 'https://redespop.substack.com/subscribe',
  },
] as const;

export function SelectedWork({ locale = 'es' }: { locale?: Locale }) {
  const text = ui[locale];
  const localizedProjects = projects.map(project => ({ ...project,
    kicker: project.id === 'libro' ? text.bookKicker : text.newsletterKicker,
    meta: project.id === 'libro' ? project.meta : text.newsletterMeta,
    description: project.id === 'libro' ? text.bookDescription : text.newsletterDescription,
    alt: project.id === 'libro' ? text.bookAlt : text.newsletterAlt,
    cta: project.id === 'libro' ? text.bookAction : text.newsletterAction,
  }));
  return (
    <section className="section selected-work" id="trabajo" aria-labelledby="work-title">
      <div className="wrap">
        <header className="signature-projects-intro">
          <h2 id="work-title">
            {text.selected}<span aria-hidden="true">.</span>
          </h2>
          <p>
            {text.selectedIntro}
          </p>
        </header>

        <div className="signature-projects">
          {localizedProjects.map((project) => (
            <article
              className={`signature-project signature-project-${project.id}`}
              key={project.id}
            >
              <div className="signature-project-copy">
                <span className="signature-project-meta">
                  <strong className="signature-project-kicker">{project.kicker}</strong>
                  <span className="signature-project-secondary-meta">{project.meta}</span>
                </span>
                <h3 lang={project.id === 'libro' ? 'es' : undefined}>{project.title}</h3>
                {project.id === 'libro' && text.bookTranslation && <p className="language-note book-title-translation">{text.bookTranslation}</p>}
                <p>{project.description}</p>
                {(project.id === 'libro' ? text.spanishBook : text.spanishNewsletter) && <p className="language-note">{project.id === 'libro' ? text.spanishBook : text.spanishNewsletter}</p>}

                {project.id === 'libro' && (
                  <div className="book-sales" aria-label={text.salesLabel}>
                    <strong>{text.salesNumber}</strong>
                    <span>{text.sales}</span>
                  </div>
                )}

                <a className="budget-link" href={project.href} target="_blank" rel="noreferrer">
                  {project.cta} <span aria-hidden="true">→</span>
                </a>
              </div>

              <figure className="signature-project-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 700px) 100vw, 52vw"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
