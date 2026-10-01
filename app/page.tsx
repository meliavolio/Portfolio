import Image from 'next/image';
import { ArrowDownRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { Typewriter } from '@/components/ui/typewriter';
import { Journey } from '@/components/Journey';
import { SelectedWork } from '@/components/SelectedWork';
import { WorkTogether } from '@/components/WorkTogether';
import { PublicConversation } from '@/components/PublicConversation';
import { ContactSection } from '@/components/ContactSection';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function Home(){
  const p=portfolio;
  return <>
    <SiteHeader home/>
    <main id="contenido">
      <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow hero-signature">{p.hero.eyebrow}<i aria-hidden="true">.</i></span>
          <h1 id="hero-title"><span className="hero-greeting">{p.hero.greeting.slice(0,-1)}<i className="hero-title-period">.</i></span><span className="hero-name">{p.hero.name}</span></h1>
          <div className="hero-descriptor"><span>También soy&nbsp;</span><Typewriter text={['periodista.', 'comunicadora.', 'docente.', 'divulgadora de IA.']} speed={52} waitTime={2300} deleteSpeed={24} loop cursorChar="_" /></div>
          <p>{p.hero.intro}</p>
          <a className="text-link" href="#recorrido">{p.hero.scrollLabel}<ArrowDownRight size={19}/></a>
        </div>
        <figure className="hero-figure"><div className="hero-photo"><Image src={p.hero.photo.src} alt={p.hero.photo.alt} fill priority unoptimized sizes="(max-width: 700px) 92vw, (max-width: 1000px) 46vw, 590px" style={{objectPosition:p.hero.photo.position}} /></div></figure>
      </section>
      <Journey/>
      <WorkTogether/>
      <SelectedWork/>
      <PublicConversation/>
      <ContactSection/>
    </main><SiteFooter/>
  </>;
}
