'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolio } from '@/data/portfolio';

export function Journey() {
  const {journey} = portfolio;
  const [progress, setProgress] = useState(0);
  const [subtitleText, setSubtitleText] = useState('');
  const [subtitleStarted, setSubtitleStarted] = useState(false);
  const [subtitleComplete, setSubtitleComplete] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const subtitle = 'La historia que estoy escribiendo.';

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section || window.innerWidth <= 700) return;
        const rect = section.getBoundingClientRect();
        const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
        setProgress(Math.min(1, Math.max(0, -rect.top / scrollableDistance)));
      });
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, {passive: true});
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const showSubtitle = () => {
      setSubtitleText(subtitle);
      setSubtitleComplete(true);
    };

    const typeSubtitle = (index = 1) => {
      if (cancelled) return;
      setSubtitleText(subtitle.slice(0, index));
      if (index < subtitle.length) {
        timeout = setTimeout(() => typeSubtitle(index + 1), 38);
      } else {
        setSubtitleComplete(true);
      }
    };

    if (reducedMotion.matches) {
      showSubtitle();
    } else {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer?.disconnect();
        setSubtitleStarted(true);
        timeout = setTimeout(() => typeSubtitle(), 180);
      }, { threshold: 0.18 });
      if (sectionRef.current) observer.observe(sectionRef.current);
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [subtitle]);

  const labels = ['CONTAR', 'ENSEÑAR', 'EXPERIMENTAR'];
  const emphasis = ['contar', 'entenderla', 'cambiar'];
  const transitionProgress = (value: number, start: number, end: number) => {
    const normalized = Math.min(1, Math.max(0, (value - start) / (end - start)));
    return normalized * normalized * (3 - 2 * normalized);
  };
  const narrativePosition = progress <= .2
    ? 0
    : progress < .35
      ? transitionProgress(progress, .2, .35)
      : progress <= .55
        ? 1
        : progress < .7
          ? 1 + transitionProgress(progress, .55, .7)
          : 2;
  const emphasize = (text: string, fragment: string) => {
    const index = text.indexOf(fragment);
    if (index < 0) return text;
    return <>{text.slice(0,index)}<mark>{fragment}</mark>{text.slice(index+fragment.length)}</>;
  };
  return <section ref={sectionRef} className="section journey" id="recorrido" aria-labelledby="journey-title">
    <div className="about-story wrap">
      <header className="about-heading"><h2 id="journey-title">Antes de seguir,<br/>te cuento algo<span aria-hidden="true">.</span></h2><p aria-label={subtitle}><span className="about-subtitle-visual" aria-hidden="true"><span className="about-subtitle-reserve">{subtitle}</span><span className="about-subtitle-animated">{subtitleText}{subtitleStarted && !subtitleComplete && <i>_</i>}</span></span></p></header>
      <div className="about-fragments">
        {journey.moments.map((moment,index) => {
          const offset = index - narrativePosition;
          const opacity = Math.min(1, Math.max(0, 1 - Math.abs(offset) * .72));
          return <article key={moment.number} className="about-fragment" style={{transform:`translate3d(0, ${offset * 105}%, 0)`,opacity}}>
          <span>{moment.number} / {labels[index]}</span><h3>{emphasize(moment.title, emphasis[index])}</h3><p>{moment.body}</p>
          </article>;
        })}
      </div>
    </div>
  </section>;
}

