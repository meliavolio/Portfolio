'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  restartDelay?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string | ReactNode;
  cursorAnimationVariants?: {
    initial: Variants['initial'];
    animate: Variants['animate'];
  };
  cursorClassName?: string;
}

const defaultCursorVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.01, repeat: Infinity, repeatDelay: 0.4, repeatType: 'reverse' as const },
  },
};

export function Typewriter({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  restartDelay,
  deleteSpeed = 30,
  loop = false,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = '|',
  cursorAnimationVariants = defaultCursorVariants,
  cursorClassName = 'typewriter-cursor',
}: TypewriterProps) {
  const texts = useMemo(() => Array.isArray(text) ? text : [text], [text]);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const currentText = texts[currentTextIndex] ?? '';
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(value => value.slice(0, -1)), deleteSpeed);
      } else {
        const next = currentTextIndex + 1;
        if (next < texts.length || loop) {
          timeout = setTimeout(() => {
            setIsDeleting(false);
            setCurrentTextIndex(next % texts.length);
            setCurrentIndex(0);
          }, restartDelay ?? waitTime);
        }
      }
    } else if (currentIndex < currentText.length) {
      const punctuationPause = /[,.]/.test(currentText[currentIndex - 1] ?? '') ? 190 : 0;
      timeout = setTimeout(() => {
        setDisplayText(value => value + currentText[currentIndex]);
        setCurrentIndex(index => index + 1);
      }, (currentIndex === 0 ? initialDelay : speed) + punctuationPause);
    } else if ((texts.length > 1 || loop) && (currentTextIndex < texts.length - 1 || loop)) {
      timeout = setTimeout(() => setIsDeleting(true), waitTime);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, deleteSpeed, displayText, initialDelay, isDeleting, loop, reducedMotion, restartDelay, speed, texts, waitTime]);

  const fullText = texts.join(' ');
  const reserveText = texts.reduce((longest, item) => item.length > longest.length ? item : longest, '');
  const visibleText = reducedMotion ? fullText : displayText;
  const cursorHidden = hideCursorOnType && (currentIndex < (texts[currentTextIndex]?.length ?? 0) || isDeleting);

  return <>
    <span className="sr-only">{fullText}</span>
    <span aria-hidden="true" className={cn('typewriter-visual', className)}>
      <span className="typewriter-reserve">{reserveText}</span>
      <span className="typewriter-animated">{visibleText}{showCursor && <motion.span variants={cursorAnimationVariants} initial="initial" animate={reducedMotion ? undefined : 'animate'} className={cn(cursorClassName, cursorHidden && 'hidden')}>{cursorChar}</motion.span>}</span>
    </span>
  </>;
}
