import type { Metadata } from 'next';
import { CategorySection } from '@/components/Sections';
export const metadata: Metadata = { title: 'Jewellery Collections', description: 'Explore gold, diamond, bridal jewellery, necklaces, earrings, bangles and more.' };
export default function JewelleryPage() { return <><div className="page-hero"><span className="eyebrow">KALYAN JEWELLERS · FINE CRAFT</span><h1>Find your<br/><i>forever piece.</i></h1><p>Jewellery for the everyday, and all the days you’ll remember.</p></div><CategorySection/></>; }
