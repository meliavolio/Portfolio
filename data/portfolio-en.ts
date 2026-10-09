import { portfolio } from './portfolio';

export const portfolioEn: typeof portfolio = {
  ...portfolio,
  navigation: [
    { label: 'Home', href: '#inicio' }, { label: 'About', href: '#recorrido' },
    { label: 'Work', href: '#trabajo' }, { label: 'Workshops & communication', href: '/en/proposals' },
    { label: 'Media', href: '#medios' }, { label: 'Contact', href: '#contacto' },
  ],
  hero: {
    ...portfolio.hero,
    greeting: 'Hi, thanks for being here.', name: 'I’m Melisa.',
    intro: 'I help people and teams understand technology, discover what they can do with artificial intelligence and communicate their ideas through stories.',
    photo: { ...portfolio.hero.photo, alt: 'Melisa Avolio at a table with her laptop and sticky notes' },
    scrollLabel: 'A little about my journey',
  },
  journey: {
    eyebrow: '01 / MY JOURNEY', heading: 'The story I’m writing.', subtitle: 'Bringing technology closer to people.',
    moments: [
      { ...portfolio.journey.moments[0], label: 'TELL', title: 'Ask questions. Tell stories.',
        body: 'I have a degree in Communication from the University of Buenos Aires (UBA) and work as a journalist and editor specializing in technology. I spent 16 years at Télam, Argentina’s national news agency, where I co-created and edited the Technology section.\n\nI’m also invited to discuss technology and artificial intelligence in Forbes Argentina, TN, LA NACION, El Economista and ELLE Argentina.',
        photo: { ...portfolio.journey.moments[0].photo, alt: 'Melisa at an event celebrating 15 years of Google in Argentina' } },
      { ...portfolio.journey.moments[1], label: 'SHARE', title: 'A book. A newsletter. Many conversations.',
        body: 'I wrote Qué es la inteligencia artificial y cómo impacta en nuestras vidas (Grijalbo), a Spanish-language book about AI with more than 4,000 copies sold, and created Redes Pop, my newsletter on technology and digital culture.',
        photo: { ...portfolio.journey.moments[1].photo, alt: 'Melisa with a laptop and microphone at FLACSO Argentina' } },
      { ...portfolio.journey.moments[2], label: 'SUPPORT', title: 'Learn something new. Give it a try.',
        body: 'Today I design AI learning experiences, give talks, moderate events and create content. I want to help people understand technology and discover what they can do with it.',
        photo: { ...portfolio.journey.moments[2].photo, alt: 'Melisa leading an artificial intelligence training session for journalists' } },
    ],
  },
  areas: {
    eyebrow: '02 / WHAT I DO', heading: 'What I do today',
    items: [ { number: '01', title: 'Communication', text: 'Journalism, content and digital strategy.' },
      { number: '02', title: 'Education', text: 'Classes, workshops and learning experiences.' },
      { number: '03', title: 'AI + technology', text: 'Talks, training, consulting and public understanding of technology.' } ],
  },
  book: {
    ...portfolio.book, eyebrow: '05 / THE BOOK', heading: 'What happened after the book was published',
    description: 'In 2024, I published Qué es la inteligencia artificial y cómo impacta en nuestras vidas, a Spanish-language guide to understanding these technologies and how they are becoming part of everyday life.',
    photos: portfolio.book.photos.map((photo, index) => ({ ...photo, alt: [ 'Melisa signing her book at a launch event', 'Melisa holding a copy of her book', 'A book presentation and conversation' ][index] })),
  },
  contact: { ...portfolio.contact, heading: 'Let’s keep talking.', description: 'Tell me what you need, and we’ll shape a proposal around your project.' },
};
