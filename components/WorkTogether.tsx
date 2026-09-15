import Image from 'next/image';

const workAreas = [
  {
    id: 'charlas',
    title: 'Charlas + capacitaciones',
    lead: 'Para entender, conversar y aprender haciendo.',
    description: 'Diseño charlas y experiencias de formación sobre inteligencia artificial, tecnología y cultura digital para organizaciones, equipos e instituciones educativas.',
    image: '/assets/ia-periodistas-horizontal.jpeg',
    alt: 'Melisa frente a una presentación de formación en inteligencia artificial para periodistas',
  },
  {
    id: 'comunicacion',
    title: 'Comunicación + contenidos',
    lead: 'Para contar la tecnología sin perder de vista a las personas.',
    description: 'Desarrollo contenidos, estrategias y proyectos editoriales sobre tecnología, IA y cultura digital, combinando experiencia periodística, mirada crítica y lenguaje cercano.',
    image: '/assets/nerdearla.jpeg',
    alt: 'Melisa durante una presentación en Nerdearla',
  },
  {
    id: 'ia-aplicada',
    title: 'IA aplicada',
    lead: 'Para pasar de “quiero usar IA” a entender dónde realmente aporta.',
    description: 'Acompaño a personas y equipos a explorar herramientas y formas de incorporar IA en procesos de comunicación, contenidos y aprendizaje, combinando experimentación, criterio y control humano.',
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
        {workAreas.map(area => <details className={`collaboration-area collaboration-area-${area.id}`} key={area.id}>
          <summary>
            <figure><Image src={area.image} alt={area.alt} fill sizes="(max-width: 700px) 100vw, 48vw" /></figure>
            <div className="collaboration-copy"><h3>{area.title}</h3><p>{area.lead}</p><span className="collaboration-toggle" aria-hidden="true">+</span></div>
          </summary>
          <div className="collaboration-reveal"><p>{area.description}</p></div>
        </details>)}
      </div>
      <aside className="custom-invitation">
        <h3>¿Tenés otra idea en mente?<span aria-hidden="true">.</span></h3>
        <div><p>Contame qué necesitás. Podemos pensar una propuesta a medida y, si creo que no soy la persona indicada para acompañarte, también te lo voy a decir.</p><a href="#contacto">Contame tu idea <span aria-hidden="true">→</span></a></div>
      </aside>
    </div>
  </section>;
}
