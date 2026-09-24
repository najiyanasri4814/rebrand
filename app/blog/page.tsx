import type { Metadata } from 'next';
import { BlogSection } from '@/components/Sections';
export const metadata: Metadata = { title: 'The Journal', description: 'Jewellery stories, festive edits and inspiration from Kalyan Jewellers.' };
export default function BlogPage() { return <><div className="page-hero"><span className="eyebrow">STYLE, STORIES & CELEBRATION</span><h1>The<br/><i>journal.</i></h1></div><BlogSection/></>; }
