import { ui, type Locale } from '@/lib/i18n';

export function SiteFooter({ locale = 'es' }: { locale?: Locale }) {
  const text = ui[locale];
  return <footer className="site-footer"><div className="wrap"><span>© 2026 MELISA AVOLIO</span><span>{text.footer} <b className="footer-heart">♥</b> {text.footerBy}</span><a href="#inicio">{text.backTop}</a></div></footer>;
}
