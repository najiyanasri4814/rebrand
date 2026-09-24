import type { Metadata } from 'next';
import { BrandSection } from '@/components/Sections';
export const metadata: Metadata = { title: 'Our Brands', description: 'Meet the Kalyan Jewellers family of jewellery brands, each with its own distinctive expression.' };
export default function BrandsPage() { return <><div className="page-hero"><span className="eyebrow">ONE FAMILY, MANY EXPRESSIONS</span><h1>Craft has<br/><i>many voices.</i></h1><p>Distinctive collections, connected by our promise of trust.</p></div><BrandSection/></>; }
