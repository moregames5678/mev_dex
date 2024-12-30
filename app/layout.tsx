import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';

import { AppWrapper } from './app-wrapper';

import { Poppins } from 'next/font/google';

const urbanist = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MD Dashboard',
  description: 'MD Dashboard description',
};

export const viewport: Viewport = {
  width: '1440',
  initialScale: 0.2,
  maximumScale: 3,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/favicon-logo.svg" />
      </head>
      <body className={`${urbanist.className} antialiased`} suppressHydrationWarning={true}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
