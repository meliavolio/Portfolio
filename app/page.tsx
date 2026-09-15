import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { Typewriter } from '@/components/ui/typewriter';
import { Journey } from '@/components/Journey';
import { SelectedWork } from '@/components/SelectedWork';
import { WorkTogether } from '@/components/WorkTogether';
import { PublicConversation } from '@/components/PublicConversation';
import { ContactTitle } from '@/components/ContactTitle';
import { SocialIconLinks } from '@/components/SocialIconLinks';

export default function Home(){
  const p=portfolio;
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header"><div className="wrap header-inner"><a className="wordmark" href="#inicio" aria-label="Melisa Avolio, volver al inicio">MA<span>.</span></a><nav aria-label="Navegación principal">{p.navigation.map(item=><a key={item.href} href={item.href}>{item.label}</a>)}</nav><a className="header-contact" href="#contacto">Escribime <ArrowUpRight size={14}/></a></div></header>
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
      <section className="section contact" id="contacto" aria-labelledby="contact-title"><div className="wrap contact-layout"><div className="contact-content"><ContactTitle text={p.contact.heading}/><p>{p.contact.description}</p><a className="email-link" href={`mailto:${p.contact.email}`}>{p.contact.email}<ArrowUpRight size={26}/></a><SocialIconLinks/></div><div className="contact-mark" aria-hidden="true">MA<span>.</span></div></div></section>
    </main><footer className="site-footer"><div className="wrap"><span>© 2026 MELISA AVOLIO</span><span>Este sitio fue hecho con <b className="footer-heart">♥</b> por Melisa Avolio.</span><a href="#inicio">Volver arriba ↑</a></div></footer>
  </>;
}
