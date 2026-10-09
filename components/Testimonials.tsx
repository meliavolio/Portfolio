import { getProposals } from '@/lib/content';
import { ui, type Locale } from '@/lib/i18n';

export function Testimonials({ locale = 'es' }: { locale?: Locale }) {
  const proposals = getProposals(locale);
  const text = ui[locale];
  return <section className="testimonials-section" aria-labelledby="testimonials-title">
    <h2 id="testimonials-title">{text.testimonials}<span aria-hidden="true">.</span></h2>
    {text.translatedQuotes && <p className="language-note">{text.translatedQuotes}</p>}
    <div className="testimonial-grid">{proposals.testimonials.map(({ quote, context }, index) => <figure className="testimonial-card" key={context}>
      <span className="testimonial-label">{text.testimonialLabels[index]}</span>
      <span className="testimonial-quote" aria-hidden="true">“</span>
      <blockquote><p>{quote}</p></blockquote><figcaption>{context}</figcaption>
    </figure>)}</div>
  </section>;
}
