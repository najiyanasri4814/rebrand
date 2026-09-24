'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { jewelleryImage } from '@/lib/data';

const slides = [
  { image: 'photo-1617038220319-276d3cfab638', eyebrow: 'A LEGACY OF BEAUTY', title: <>Every jewel<br/>holds a <i>story.</i></>, line: 'For the moments that become part of you.' },
  { image: 'photo-1617038260897-41a1f14a8ca0', eyebrow: 'THE MUHURAT COLLECTION', title: <>Made for<br/><i>your forever.</i></>, line: 'Traditions that make every beginning beautiful.' },
  { image: 'photo-1599643478518-a784e5dc4c8f', eyebrow: 'CRAFTED WITH CARE', title: <>A little gold,<br/><i>a lot of you.</i></>, line: 'Discover pieces to make your own.' },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const move = (direction: number) => setActive((active + direction + slides.length) % slides.length);
  return <section className="hero" aria-roledescription="carousel" aria-label="Kalyan Jewellers featured collections"><Image key={slide.image} src={jewelleryImage(slide.image)} alt="Fine Indian jewellery" fill priority sizes="100vw" className="hero-image"/><div className="hero-shade"/><div className="hero-content" aria-live="polite"><span className="eyebrow">{slide.eyebrow}</span><h1>{slide.title}</h1><p>{slide.line}</p><Link href="/jewellery" className="button button-gold">DISCOVER THE COLLECTION <ArrowUpRight size={15}/></Link></div><div className="hero-caption"><span>0{active + 1} — 0{slides.length}</span><span>CRAFTED WITH CARE, WORN WITH LOVE</span><div className="hero-controls"><button onClick={() => move(-1)} aria-label="Previous featured collection"><ChevronLeft size={16}/></button><button onClick={() => move(1)} aria-label="Next featured collection"><ChevronRight size={16}/></button></div></div><a href="#collections" className="hero-scroll">SCROLL TO DISCOVER <span>↓</span></a></section>;
}
