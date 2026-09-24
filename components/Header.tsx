'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { navItems, jewelleryImage } from '@/lib/data';

const megaLinks: Record<string, { title: string; href: string }[]> = {
  brands: ['Mudhra', 'Nimah', 'Anokhi', 'Rang', 'Vedha', 'Tejasvi', 'Apoorva', 'Ziah', 'Laya', 'Hera', 'Candere'].map((title) => ({ title, href: '/brands' })),
  muhurat: ['The Muhurat Story', 'Bridal Jewellery', 'Regional Traditions', 'Plan Your Wedding'].map((title) => ({ title, href: '/muhurat' })),
  jewellery: ['Gold', 'Diamond', 'Bridal', 'Earrings', 'Necklaces', 'Bangles', 'Rings', 'Pendants', 'Chains'].map((title) => ({ title, href: '/jewellery' })),
};

export function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return <header className="site-header" onMouseLeave={() => setActive(null)}>
    <div className="header-inner">
      <button className="icon-button mobile-only" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
      <Link href="/" className="brand-logo" aria-label="Kalyan Jewellers home"><Image src="/images/kalyan-logo.svg" alt="Kalyan Jewellers" width={76} height={63} priority/></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map((item) => <div className="nav-item" key={item.label} onMouseEnter={() => setActive(item.menu ?? null)}>
        <Link href={item.href} onFocus={() => setActive(item.menu ?? null)}>{item.label}{item.menu && <ChevronDown size={12} />}</Link>
      </div>)}</nav>
      <div className="header-tools"><button className="icon-button" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}><Search /></button><Link className="tool-link locator-link" href="/store-locator"><MapPin size={15} /> <span>STORE LOCATOR</span></Link><Link className="tool-link rates-link" href="/gold-rates">GOLD RATE</Link></div>
    </div>
    {searchOpen && <form className="search-panel" action="/jewellery"><label htmlFor="site-search">Search Kalyan Jewellers</label><input id="site-search" name="q" placeholder="Search jewellery, collections, and more" autoFocus /><button className="button button-wine" type="submit">SEARCH</button><button className="icon-button" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={18}/></button></form>}
    {active && <div className="mega-menu" onMouseEnter={() => setActive(active)}><div className="mega-copy"><span className="eyebrow">DISCOVER KALYAN</span><h3>{active === 'brands' ? 'A world of artistry' : active === 'muhurat' ? 'Made for your moment' : 'Find your forever piece'}</h3><p>{active === 'brands' ? 'Distinct expressions of Indian craftsmanship, brought together under one roof.' : active === 'muhurat' ? 'A wedding collection inspired by the many customs and traditions of India.' : 'Explore fine jewellery shaped for every occasion and every story.'}</p><Link className="text-link" href={active === 'brands' ? '/brands' : active === 'muhurat' ? '/muhurat' : '/jewellery'}>EXPLORE ALL <span>↗</span></Link></div><div className="mega-links">{megaLinks[active].map((link) => <Link key={link.title} href={link.href}>{link.title}<span>↗</span></Link>)}</div><div className="mega-feature"><Image src={jewelleryImage(active === 'muhurat' ? 'photo-1617038260897-41a1f14a8ca0' : 'photo-1599643478518-a784e5dc4c8f')} alt="Fine Indian jewellery" fill sizes="320px" /></div></div>}
    {mobileOpen && <div className="mobile-drawer"><div className="mobile-drawer-head"><span>Explore Kalyan</span><button className="icon-button" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X /></button></div>{navItems.map((item) => <Link href={item.href} key={item.label} onClick={() => setMobileOpen(false)}>{item.label}<span>↗</span></Link>)}<div className="mobile-utilities"><Link href="/store-locator"><MapPin size={16}/> Store Locator</Link><Link href="/gold-rates">Gold Rate Today</Link></div></div>}
  </header>;
}

export function TopBar() { const [index, setIndex] = useState(0); const messages = ['Don’t miss these dazzling limited deals', 'Sign up and play for exciting rewards', 'Essentials for your everyday — get now']; useEffect(() => { const timer = window.setInterval(() => setIndex((current) => (current + 1) % messages.length), 5000); return () => window.clearInterval(timer); }, [messages.length]); return <div className="topbar"><span className="topbar-label">A LITTLE SOMETHING FOR YOU</span><button onClick={() => setIndex((index + 1) % messages.length)} aria-label="Next offer">{messages[index]} <span>→</span></button><span className="topbar-count">0{index + 1} / 03</span></div>; }
