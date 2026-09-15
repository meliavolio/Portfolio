'use client';

import Image from 'next/image';
import { useState } from 'react';

const venues = [
  'Forbes',
  'TN',
  'Nerdearla',
  'Media Party',
  'LA NACION',
  'El Economista',
  'Revista ELLE',
] as const;

const authoredStories = [
  {
    publication: 'El Economista',
    title: 'Robots sin sentimientos: la exageración (o “hype”) por la inteligencia artificial',
    href: 'https://eleconomista.com.ar/tech/robots-sentimientos-exageracion-o-hype-inteligencia-artificial-consciencia-n55113',
  },
  {
    publication: 'La Capital',
    title: 'Por qué WhatsApp no tiene botón de apagado',
    href: 'https://www.lacapitalmdp.com/la-desconexion-voluntaria-de-las-redes-por-que-whatsapp-no-tiene-boton-de-apagado/',
  },
  {
    publication: 'Universidad de San Andrés',
    title: 'Alcances del Big Data: ¿se puede predecir si un penal será gol?',
    href: 'https://udesa.edu.ar/noticias/los-alcances-del-big-data-se-puede-predecir-si-un-penal-sera-gol-o-como-estara-el-clima-en-dos-meses',
  },
  {
    publication: 'Esfera Comunicacional',
    title: 'Cómo trabajar con IA en periodismo',
    href: 'https://esferacomunicacional.ar/de-mitos-con-robots-al-eje-critico-como-trabajar-con-inteligencia-artificial-en-periodismo/',
  },
] as const;

const appearances = [
  {
    publication: 'La Nación',
    title: '¿Puede sobrevivir el gusto personal a la angustia algorítmica?',
    href: 'https://www.lanacion.com.ar/ideas/puede-sobrevivir-el-gusto-personal-a-la-angustia-algoritmica-nid14122024/',
  },
  {
    publication: 'Forbes',
    title: 'Quemados de las redes: ¿una nueva era de posteos cero y observadores silenciosos?',
    href: 'https://www.forbesargentina.com/negocios/quemados-redes-una-nueva-era-posteos-cero-observadores-silenciosos-n79648',
  },
  {
    publication: 'TN Tecno',
    title: 'El año en el que la IA dejó de ser un experimento y se metió en casa: ya la usan 800 millones de personas',
    href: 'https://tn.com.ar/tecno/novedades/2025/12/20/el-ano-en-el-que-la-ia-dejo-de-ser-un-experimento-y-se-metio-en-casa-ya-la-usan-800-millones-de-personas/',
  },
  {
    publication: 'Podcast La Nación',
    title: 'Qué nos atrae de los videos con gente que reacciona frente a lo que ve en la pantalla',
    href: 'https://www.lanacion.com.ar/tecnologia/por-que-nos-peleamos-con-personas-desconocidas-en-internet-nid25012022/',
  },
] as const;

function EditorialIndex({
  items,
  className = '',
}: {
  items: readonly { publication: string; title: string; href: string }[];
  className?: string;
}) {
  return (
    <ul className={`editorial-index ${className}`}>
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <span className="editorial-index-source">{item.publication}</span>
            <span className="editorial-index-title">{item.title}</span>
            <span className="editorial-index-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function PublicConversation() {
  const [openArchive, setOpenArchive] = useState<'authored' | 'appearances' | null>(null);

  const toggleArchive = (archive: 'authored' | 'appearances') => {
    setOpenArchive((current) => (current === archive ? null : archive));
  };

  return (
    <section className="section public-conversation" id="medios" aria-labelledby="conversation-title">
      <header className="wrap conversation-heading">
        <h2 id="conversation-title">
          Me invitan a hablar de tecnología en<span aria-hidden="true">.</span>
        </h2>
      </header>

      <div
        className="conversation-marquee"
        tabIndex={0}
        aria-label={`Medios y eventos: ${venues.join(', ')}`}
      >
        <div className="conversation-marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="conversation-marquee-set" key={copy}>
              {venues.map((venue) => (
                <span key={`${copy}-${venue}`}>
                  {venue}<i>·</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap conversation-scene">
        <figure>
          <Image
            src="/assets/media-party.jpg"
            alt="Melisa habla con un micrófono en Media Party"
            fill
            quality={95}
            sizes="(max-width: 700px) 100vw, 58vw"
          />
          <figcaption>MEDIA PARTY</figcaption>
        </figure>
        <p>Una conversación que sale de la pantalla y sigue en encuentros, medios y escenarios.</p>
      </div>

      <div className="wrap conversation-archive">
        <section
          className={`archive-accordion ${openArchive === 'authored' ? 'is-open' : ''}`}
          aria-labelledby="authored-title"
        >
          <button
            type="button"
            aria-expanded={openArchive === 'authored'}
            aria-controls="authored-panel"
            onClick={() => toggleArchive('authored')}
          >
            <span className="archive-accordion-copy">
              <h3 id="authored-title">Historias que conté<span aria-hidden="true">.</span></h3>
              <span>Notas y columnas escritas por mí.</span>
            </span>
            <span className="archive-accordion-symbol" aria-hidden="true">
              {openArchive === 'authored' ? '−' : '+'}
            </span>
          </button>
          <div
            className="archive-accordion-panel"
            id="authored-panel"
            role="region"
            aria-labelledby="authored-title"
            aria-hidden={openArchive !== 'authored'}
          >
            <div className="archive-accordion-panel-inner">
              <EditorialIndex items={authoredStories} />
            </div>
          </div>
        </section>

        <section
          className={`archive-accordion ${openArchive === 'appearances' ? 'is-open' : ''}`}
          aria-labelledby="appearances-title"
        >
          <button
            type="button"
            aria-expanded={openArchive === 'appearances'}
            aria-controls="appearances-panel"
            onClick={() => toggleArchive('appearances')}
          >
            <span className="archive-accordion-copy">
              <h3 id="appearances-title">
                Cuando me toca estar del otro lado<span aria-hidden="true">.</span>
              </h3>
              <span>Entrevistas y conversaciones donde me invitan a aportar mi mirada.</span>
            </span>
            <span className="archive-accordion-symbol" aria-hidden="true">
              {openArchive === 'appearances' ? '−' : '+'}
            </span>
          </button>
          <div
            className="archive-accordion-panel"
            id="appearances-panel"
            role="region"
            aria-labelledby="appearances-title"
            aria-hidden={openArchive !== 'appearances'}
          >
            <div className="archive-accordion-panel-inner">
              <EditorialIndex items={appearances} className="appearance-index" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
