import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import nextJSIcon from '../public/next.svg';
import styles from './page.module.css';
import { Nav } from '@/lib/nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Basic weather app to test NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.container}>
          <div className={styles.pageHeading}>
            <Image src={nextJSIcon} alt="NextJS Icon" />
            <h1>Weather</h1>
          </div>
          <Nav />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
