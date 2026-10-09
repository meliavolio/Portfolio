import { getPortfolio } from '@/lib/content';
import { ui, type Locale } from '@/lib/i18n';
import { BudgetLink } from '@/components/BudgetLink';
import { ContactTitle } from '@/components/ContactTitle';
import { CopyEmail } from '@/components/CopyEmail';
import { SocialIconLinks } from '@/components/SocialIconLinks';

export function ContactSection({ locale = 'es' }: { locale?: Locale }) {
  const { contact } = getPortfolio(locale);
  return <section className="section contact" id="contacto" aria-labelledby="contact-title">
    <div className="wrap contact-layout"><div className="contact-content">
      <ContactTitle text={contact.heading}/><p>{contact.description}</p>
      <BudgetLink locale={locale}/>
      {ui[locale].formNote && <p className="language-note form-language-note">{ui[locale].formNote}</p>}
      <p className="contact-alternative">{ui[locale].alternative}</p>
      <CopyEmail email={contact.email} locale={locale}/>
      <SocialIconLinks locale={locale}/>
    </div><div className="contact-mark" aria-hidden="true">MA<span>.</span></div></div>
  </section>;
}
