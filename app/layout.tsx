'use client';


import '../styles/globals.css';

import { AppWrapper } from './app-wrapper';
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';

const urbanist = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = ['/signin', '/signup'].includes(pathname);

  return (
    <html lang="en">
    <head>
      <link data-rh="true" rel="icon" href="/favicon-logo.svg" />
      <title>MD Dashboard</title>
      <meta name="description" content="MD Dashboard description" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body className={`${urbanist.className} antialiased`} suppressHydrationWarning={true}>
      {isAuthPage ? children : <AppWrapper>{children}</AppWrapper>}
      </body>
    </html>
  );
}
