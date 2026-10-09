import { metadataFor } from '@/lib/metadata';
import '../globals.css';
import '../visual-v2.css';
import '../display-cards.css';
import '../editorial-pass.css';
import '../proposals.css';
import '../bilingual.css';

export const metadata = metadataFor('es', 'home');

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
