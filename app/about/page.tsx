import type { Metadata } from 'next';
import Link from 'next/link';
import { AboutSection, LeadershipSection } from '@/components/Sections';
export const metadata: Metadata = { title: 'About Us', description: 'Discover the Kalyan Jewellers story, our values and the people behind the promise.' };
export default function AboutPage() { return <><div className="page-hero"><span className="eyebrow">A LEGACY OF BEAUTY</span><h1>Our story, in<br/><i>every detail.</i></h1><Link className="text-link" href="/#about">DISCOVER OUR STORY <span>↓</span></Link></div><AboutSection/><LeadershipSection/></>; }
