import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ivankarabeinikau.com'),
  title: {
    default: 'Ivan Karabeinikau — Lead Frontend Developer',
    template: '%s | Ivan Karabeinikau',
  },
  description:
    'Lead Frontend Developer / Frontend Architect specializing in frontend architecture, refactoring & stabilization, internal tools & automation, and AI-assisted workflows.',
  keywords: [
    'Frontend Developer',
    'Frontend Architect',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
  ],
  authors: [{ name: 'Ivan Karabeinikau' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ivankarabeinikau.com',
    siteName: 'Ivan Karabeinikau',
    title: 'Ivan Karabeinikau — Lead Frontend Developer',
    description:
      'Lead Frontend Developer / Frontend Architect specializing in frontend architecture, refactoring & stabilization, internal tools & automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ivan Karabeinikau — Lead Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Karabeinikau — Lead Frontend Developer',
    description:
      'Lead Frontend Developer / Frontend Architect specializing in frontend architecture, refactoring & stabilization, internal tools & automation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
