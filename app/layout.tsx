import type { Metadata } from 'next';
import './globals.css';
import './visual-v2.css';
import './display-cards.css';
import './editorial-pass.css';

export const metadata: Metadata = {
  title: 'Melisa Avolio — Tecnología, comunicación, educación e IA',
  description: 'Portfolio de Melisa Avolio, periodista especializada en tecnología, comunicadora y formadora en inteligencia artificial.',
  openGraph: { title: 'Melisa Avolio — Tecnología, comunicación, educación e IA', description: 'Portfolio de Melisa Avolio, periodista especializada en tecnología, comunicadora y formadora en inteligencia artificial.', type: 'website', locale: 'es_AR' },
  twitter: { card: 'summary', title: 'Melisa Avolio — Tecnología, comunicación, educación e IA', description: 'Periodismo, comunicación, educación y tecnología.' },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="es"><body>{children}</body></html>;
}
