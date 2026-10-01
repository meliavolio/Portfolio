'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Typewriter } from '@/components/ui/typewriter';

const invitations = [
  { title: 'Quiero entender y usar IA', text: 'Formaciones para entender la IA, explorar sus usos y construir tu propio sistema.', action: 'Conocé los talleres', href: '/propuestas#talleres' },
  { title: 'Quiero comunicar mis ideas', text: 'Voz y tono, oportunidades de publicación y preparación de propuestas para los medios.', action: 'Conocé las propuestas', href: '/propuestas#comunicacion' },
  { title: 'Quiero conocerte un poco más', text: 'Mi recorrido entre periodismo, tecnología y formación.', action: 'Un poco de mi recorrido', href: '#recorrido' },
];

export function HeroConversation() {
  const [open, setOpen] = useState<number | null>(null);
  const { hero } = portfolio;
  return <section className="conversation-hero wrap" id="inicio" aria-labelledby="hero-title">
    <div className="conversation-hello">
      <div className="conversation-hello-copy">
        <span className="conversation-signature">{hero.eyebrow}<span aria-hidden="true">.</span></span>
        <h1 id="hero-title"><Typewriter text={`${hero.greeting} ${hero.name}`} speed={40} showCursor={false}/></h1>
        <div className="conversation-professions"><span>También soy&nbsp;</span><Typewriter text={['periodista.', 'comunicadora.', 'docente.', 'divulgadora de IA.']} speed={52} waitTime={2300} deleteSpeed={24} loop cursorChar="_" /></div>
      </div>
      <figure className="conversation-portrait"><Image src={hero.photo.src} alt={hero.photo.alt} fill priority sizes="(max-width: 700px) 100px, 200px" /></figure>
    </div>
    <p className="conversation-intro">{hero.intro}</p>
    <div className="conversation-start" aria-labelledby="conversation-start-title">
      <h2 id="conversation-start-title">¿Por dónde empezamos?</h2>
      {invitations.map((invitation,index) => <div className="conversation-entry" key={invitation.href}>
        <h3><button type="button" id={`invitation-${index}`} aria-expanded={open === index} aria-controls={`invitation-panel-${index}`} onClick={() => setOpen(open === index ? null : index)}>{invitation.title}<span aria-hidden="true">{open === index ? '−' : '+'}</span></button></h3>
        <div className="conversation-answer" id={`invitation-panel-${index}`} aria-labelledby={`invitation-${index}`} hidden={open !== index}>
          <p>{invitation.text}</p><Link className="budget-link" href={invitation.href}>{invitation.action}<span aria-hidden="true">→</span></Link>
        </div>
      </div>)}
    </div>
  </section>;
}
