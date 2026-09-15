'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Photo } from '@/data/portfolio';
export function QuietVideo({src,poster,className=''}:{src:string;poster:Photo;className?:string}) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled,setEnabled]=useState(false);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>{if(media.matches) setEnabled(false)};
    update();media.addEventListener('change',update);
    const observer=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting && !media.matches) setEnabled(true)},{rootMargin:'200px'});
    if(ref.current) observer.observe(ref.current);
    return ()=>{media.removeEventListener('change',update);observer.disconnect()};
  },[]);
  return <div className={`quiet-video ${className}`} ref={ref} aria-hidden="true"><Image src={poster.src} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />{enabled && <video src={src} autoPlay muted loop playsInline preload="none" tabIndex={-1} />}</div>;
}
