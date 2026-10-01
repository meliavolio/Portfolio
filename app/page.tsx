import { HeroConversation } from '@/components/HeroConversation';



import { Journey } from '@/components/Journey';
import { SelectedWork } from '@/components/SelectedWork';
import { WorkTogether } from '@/components/WorkTogether';
import { PublicConversation } from '@/components/PublicConversation';
import { ContactSection } from '@/components/ContactSection';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export default function Home(){

  return <>
    <SiteHeader home/>
    <main id="contenido">
      <HeroConversation/>
      <Journey/>
      <WorkTogether/>
      <SelectedWork/>
      <PublicConversation/>
      <ContactSection/>
    </main><SiteFooter/>
  </>;
}
