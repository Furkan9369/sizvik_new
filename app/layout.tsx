import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { CustomCursor } from '@/components/motion/Cursor';
import { LoadingScreen } from '@/components/motion/LoadingScreen';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sizvik.com'),
  title: 'Sizvik — Premium Digital Marketing Agency',
  description:
    'Grow your brand with powerful digital marketing — Social Media, Facebook & Google Ads, Web Development, Branding, SEO and AI Automation.',
  keywords: [
    'digital marketing',
    'social media marketing',
    'facebook ads',
    'google ads',
    'web development',
    'SEO',
    'branding',
    'AI automation',
  ],
  openGraph: {
    title: 'Sizvik — Premium Digital Marketing Agency',
    description:
      'We help businesses dominate online with Social Media Marketing, Ads, Web Development, Branding, SEO and AI Automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sizvik',
    description:
      'Premium digital marketing agency — grow your brand with powerful, ROI-focused campaigns.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={`${jakarta.className} bg-brand-bg text-brand-ink`}>
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
