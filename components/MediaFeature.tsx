'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { jewelleryImage } from '@/lib/data';

export function MediaFeature() {
  const [open, setOpen] = useState(false);
  return <><button className="media-feature" onClick={() => setOpen(true)} aria-label="Open the Muhurat campaign feature"><Image src={jewelleryImage('photo-1617038260897-41a1f14a8ca0')} alt="The Muhurat wedding jewellery campaign" fill sizes="100vw"/><span className="media-overlay"><span className="eyebrow">THE MUHURAT CAMPAIGN</span><span className="media-title">For the beginning<br/>of forever.</span><span className="play-button" aria-hidden="true"><Play fill="currentColor" size={17}/></span></span></button>{open && <div className="media-modal" role="dialog" aria-modal="true" aria-labelledby="media-modal-title" onClick={() => setOpen(false)}><div className="media-modal-card" onClick={(event) => event.stopPropagation()}><button className="media-modal-close" aria-label="Close campaign details" onClick={() => setOpen(false)}><X/></button><div className="media-modal-image"><Image src={jewelleryImage('photo-1617038260897-41a1f14a8ca0')} alt="Bridal jewellery from the Muhurat collection" fill sizes="(max-width: 760px) 90vw, 700px"/></div><span className="eyebrow">THE MUHURAT CAMPAIGN</span><h2 id="media-modal-title">For the beginning of forever.</h2><p>Inspired by the many customs and traditions of India, the Muhurat collection celebrates the moments that make a wedding uniquely yours.</p></div></div>}</>;
}
