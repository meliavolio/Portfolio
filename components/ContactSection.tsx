import { portfolio } from '@/data/portfolio';
import { BudgetLink } from '@/components/BudgetLink';
import { ContactTitle } from '@/components/ContactTitle';
import { CopyEmail } from '@/components/CopyEmail';
import { SocialIconLinks } from '@/components/SocialIconLinks';

export function ContactSection() {
  const { contact } = portfolio;
  return <section className="section contact" id="contacto" aria-labelledby="contact-title">
    <div className="wrap contact-layout"><div className="contact-content">
      <ContactTitle text={contact.heading}/><p>{contact.description}</p>
      <BudgetLink/>
      <p className="contact-alternative">También podés escribirme a</p>
      <CopyEmail email={contact.email}/>
      <SocialIconLinks/>
    </div><div className="contact-mark" aria-hidden="true">MA<span>.</span></div></div>
  </section>;
}
