'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Photo } from '@/data/portfolio';

type StoryMoment = { number: string; title: string; body: string; photo: Photo };

export function InteractiveScrollingStory({ moments }: { moments: StoryMoment[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const momentRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const index = momentRefs.current.indexOf(entry.target as HTMLElement);
        if (index >= 0) setActiveIndex(index);
      }
    }, { rootMargin: '-35% 0px -35% 0px' });
    momentRefs.current.forEach(element => { if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  return <div className="story-layout wrap">
    <div className="story-moments">
      {moments.map((moment, index) => <article
        id={`recorrido-${moment.number}`}
        key={moment.number}
        ref={element => { momentRefs.current[index] = element; }}
        className={`story-moment ${activeIndex === index ? 'is-active' : ''}`}
      >
        <span className="story-number">{moment.number} / 0{moments.length}</span>
        <h3>{moment.title}</h3>
        <p>{moment.body}</p>
        <figure className="story-mobile-image"><Image src={moment.photo.src} alt={moment.photo.alt} fill sizes="(max-width: 700px) 100vw, 48vw" /></figure>
      </article>)}
    </div>
    <div className="story-sticky">
      <div className="story-image-stack">
        {moments.map((moment, index) => <Image
          key={moment.number}
          src={moment.photo.src}
          alt={activeIndex === index ? moment.photo.alt : ''}
          aria-hidden={activeIndex !== index}
          className={`story-image ${activeIndex === index ? 'is-active' : ''}`}
          fill
          sizes="(max-width: 700px) 100vw, 49vw"
        />)}
      </div>
      <nav className="story-pagination" aria-label="Momentos del recorrido">
        {moments.map((moment, index) => <a key={moment.number} href={`#recorrido-${moment.number}`} aria-label={`Ir al momento ${moment.number}`} aria-current={activeIndex === index ? 'step' : undefined} className={activeIndex === index ? 'is-active' : ''}><span>{moment.number}</span></a>)}
      </nav>
    </div>
  </div>;
}
