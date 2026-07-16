import type { Metadata } from 'next';
import { Outfit, Inter, Great_Vibes } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../hooks/useTheme';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: 'Udayagiri Rupesh | Aspiring Software Developer Portfolio',
  description:
    'Professional software development portfolio of Udayagiri Rupesh, B.Tech CSE Student, Python Developer, Full Stack Developer, and AI Enthusiast.',
  keywords: [
    'Udayagiri Rupesh',
    'Rupesh Portfolio',
    'Software Developer Portfolio',
    'Python Developer',
    'Full Stack Developer',
    'B.Tech CSE Student',
    'AI Engineer',
  ],
  authors: [{ name: 'Udayagiri Rupesh' }],
  creator: 'Udayagiri Rupesh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://udayagiri-rupesh.vercel.app',
    title: 'Udayagiri Rupesh | Software Developer Portfolio',
    description:
      'Explore projects, credentials, coding achievements, and skills of Udayagiri Rupesh, B.Tech CSE Student.',
    siteName: 'Udayagiri Rupesh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Udayagiri Rupesh | Software Developer Portfolio',
    description:
      'Explore projects, credentials, coding achievements, and skills of Udayagiri Rupesh, B.Tech CSE Student.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${greatVibes.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col transition-all duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
