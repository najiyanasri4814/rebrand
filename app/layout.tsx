import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header, TopBar } from '@/components/Header';
import { Footer } from '@/components/Sections';
import { Newsletter } from '@/components/Forms';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-dm-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kalyanjewellers.net'),
  title: { default: 'Kalyan Jewellers | Every Jewel Holds a Story', template: '%s | Kalyan Jewellers' },
  description: 'Discover exquisite gold, diamond and bridal jewellery from Kalyan Jewellers. A legacy of Indian craftsmanship, trust and timeless design.',
  verification: { google: 'VUqWfM-Y0fevhaItV_23slZnCcvXmWpkVqwXPXJUbSA' },
  openGraph: { title: 'Kalyan Jewellers', description: 'A legacy of beauty, crafted for the moments that matter.', type: 'website', images: ['/images/leadership/chairman-wide.webp'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top" className={`${dmSans.variable} ${playfair.variable}`}><TopBar/><Header/><main>{children}</main><Newsletter/><Footer/></body></html>;
}
