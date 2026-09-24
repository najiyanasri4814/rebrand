import type { Metadata } from 'next';
import { MuhuratSection } from '@/components/Sections';
export const metadata: Metadata = { title: 'Muhurat Wedding Collection', description: 'Wedding jewellery inspired by the many customs and traditions of India.' };
export default function MuhuratPage() { return <><div className="page-hero"><span className="eyebrow">THE WEDDING COLLECTION</span><h1>For the beginning<br/><i>of forever.</i></h1><p>A collection inspired by the beautiful traditions of India.</p></div><MuhuratSection/></>; }
