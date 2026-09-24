import type { Metadata } from 'next';
import { NewsSection } from '@/components/Sections';
export const metadata: Metadata = { title: 'Kalyan News', description: 'The latest news and announcements from Kalyan Jewellers.' };
export default function NewsPage() { return <><div className="page-hero"><span className="eyebrow">WHAT’S HAPPENING AT KALYAN</span><h1>News &<br/><i>milestones.</i></h1></div><NewsSection/></>; }
