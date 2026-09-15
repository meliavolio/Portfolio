'use client';

import { useEffect, useRef, useState } from 'react';

type ContactTitleProps = {
  text: string;
};

export function ContactTitle({ text }: ContactTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const phrase = text.endsWith('.') ? text.slice(0, -1) : text;
  const [displayText, setDisplayText] = useState('');
  const [showPeriod, setShowPeriod] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let observer: IntersectionObserver | undefined;
    let cancelled = false;

    const showCompleteTitle = () => {
      setDisplayText(phrase);
      setShowPeriod(true);
    };

    const typeTitle = (index = 1) => {
      if (cancelled) return;
      setDisplayText(phrase.slice(0, index));

      if (index < phrase.length) {
        timeout = setTimeout(() => typeTitle(index + 1), 46);
      } else {
        timeout = setTimeout(() => setShowPeriod(true), 110);
      }
    };

    if (reducedMotion.matches) {
      showCompleteTitle();
    } else if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer?.disconnect();
          typeTitle();
        },
        { threshold: 0.3 },
      );

      if (titleRef.current) observer.observe(titleRef.current);
    } else {
      typeTitle();
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [phrase]);

  return (
    <h2 ref={titleRef} id="contact-title" aria-label={text}>
      <span className="contact-title-visual" aria-hidden="true">
        <span className="contact-title-reserve">
          {phrase}<span className="contact-title-period">.</span>
        </span>
        <span className="contact-title-animated">
          {displayText}{showPeriod && <span className="contact-title-period">.</span>}
        </span>
      </span>
    </h2>
  );
}
