export const navItems = [
  { label: 'OUR BRANDS', href: '/brands', menu: 'brands' },
  { label: 'MUHURAT', href: '/muhurat', menu: 'muhurat' },
  { label: 'SHOP ONLINE', href: '/jewellery' },
  { label: 'JEWELLERY', href: '/jewellery', menu: 'jewellery' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'GIFT CARD', href: '/#gift-card' },
  { label: 'AMBASSADORS', href: '/about#leadership' },
  { label: 'INVESTORS', href: '/news' },
];

export const jewelleryCategories = [
  { title: 'Necklaces', image: 'photo-1599643478518-a784e5dc4c8f', shape: 'wide' },
  { title: 'Earrings', image: 'photo-1535632066927-ab7c9ab60908', shape: 'tall' },
  { title: 'Rings', image: 'photo-1605100804763-247f67b3557e', shape: 'tall' },
  { title: 'Bangles', image: 'photo-1611652022419-a9419f74343d', shape: 'wide' },
  { title: 'Pendants', image: 'photo-1617038220319-276d3cfab638', shape: 'wide' },
  { title: 'Bridal Jewellery', image: 'photo-1617038260897-41a1f14a8ca0', shape: 'tall' },
];

export const brands = [
  { name: 'MUDHRA', detail: 'Handcrafted heritage, in every detail.', image: 'photo-1611652022419-a9419f74343d' },
  { name: 'NIMAH', detail: 'A celebration of timeless femininity.', image: 'photo-1535632066927-ab7c9ab60908' },
  { name: 'ANOKHI', detail: 'Contemporary design with a classic soul.', image: 'photo-1605100804763-247f67b3557e' },
  { name: 'RANG', detail: 'Colourful stories, beautifully told.', image: 'photo-1599643478518-a784e5dc4c8f' },
  { name: 'ZIAH', detail: 'Modern brilliance for every day.', image: 'photo-1617038220319-276d3cfab638' },
];

export const news = [
  { date: 'AUGUST 2023', title: 'Kalyan Jewellers launches its 200th showroom globally', excerpt: 'A landmark moment in our journey, with a new flagship showroom in Jammu.', image: 'photo-1605100804763-247f67b3557e', href: '/news' },
  { date: 'AUGUST 2023', title: 'Kalyan Jewellers announces plans to launch 11 new showrooms', excerpt: 'Our retail family continues to grow across India and international markets.', image: 'photo-1611652022419-a9419f74343d', href: '/news' },
];

export const blogs = [
  { category: 'FESTIVE EDIT', date: 'SEPTEMBER 2023', title: 'A little sparkle for Ganesh Chaturthi', excerpt: 'Welcome the season with jewellery that brings a touch of radiance to every gathering.', image: 'photo-1599643478518-a784e5dc4c8f' },
  { category: 'STYLE NOTES', date: 'AUGUST 2023', title: 'Raksha Bandhan, wrapped in gold', excerpt: 'Thoughtful keepsakes and pieces to celebrate the bonds closest to your heart.', image: 'photo-1617038220319-276d3cfab638' },
  { category: 'THE ONAM EDIT', date: 'AUGUST 2023', title: 'Onam style: a tradition of gold', excerpt: 'A graceful guide to pairing heirloom-inspired pieces with your festive look.', image: 'photo-1535632066927-ab7c9ab60908' },
];

export const footerGroups = [
  { title: 'COMPANY', links: [['About Us', '/about'], ['Kalyan News', '/news'], ['Contact Us', '/contact'], ['Store Locator', '/store-locator'], ['Media', '/media'], ['The Kalyan Promise', '/about'], ['Investors', '/news']] },
  { title: 'SERVICES', links: [['Careers', '/contact'], ['Be Informed', '/about'], ['Easy Instalment Plan', '/contact'], ['Partnering With Trust', '/about'], ['Gold Rate Today', '/gold-rates'], ['Online Purchase', '/jewellery'], ['Blog', '/blog']] },
  { title: 'SUPPORT', links: [['Why Buy From Us', '/about'], ['Privacy Policy', '/contact'], ['Terms & Conditions', '/contact'], ['Sitemap', '/'], ['FAQ', '/contact'], ['Scam Alert', '/contact']] },
  { title: 'OTHER', links: [['Franchise Opportunities', '/contact'], ['Feedback', '/contact'], ['Find a Store', '/store-locator'], ['Gift Cards', '/#gift-card']] },
];

export const jewelleryImage = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=75`;
