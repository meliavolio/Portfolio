import { proposals } from '@/data/proposals';

export function Testimonials() {
  return <section className="testimonials-section" aria-labelledby="testimonials-title">
    <h2 id="testimonials-title">Qué dicen de mi trabajo<span aria-hidden="true">.</span></h2>
    <div className="testimonial-grid">{proposals.testimonials.map(({ quote, context }, index) => <figure className="testimonial-card" key={context}>
      <span className="testimonial-label">{['Libro', 'Charla', 'Taller'][index]}</span>
      <span className="testimonial-quote" aria-hidden="true">“</span>
      <blockquote><p>{quote}</p></blockquote><figcaption>{context}</figcaption>
    </figure>)}</div>
  </section>;
}
