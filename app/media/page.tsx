import type { Metadata } from 'next';
import { MediaSection } from '@/components/Sections';
export const metadata: Metadata = { title: 'Media', description: 'Explore campaign films and stories from Kalyan Jewellers.' };
export default function MediaPage() { return <><div className="page-hero"><span className="eyebrow">CAMPAIGNS & STORIES</span><h1>Moments in<br/><i>the making.</i></h1></div><MediaSection/></>; }
