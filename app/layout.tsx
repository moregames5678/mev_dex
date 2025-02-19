'use client';

import '../styles/globals.css';

import { AppWrapper } from './app-wrapper';
import { usePathname, useRouter  } from 'next/navigation';
import { useEffect } from 'react';
import { Poppins } from 'next/font/google';

const urbanist = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

function parseCookies(cookie: string) {
  return cookie.split(';').reduce<Record<string, string>>((acc, c) => {
    const [key, v] = c.trim().split('=');
    acc[key] = decodeURIComponent(v);
    return acc;
  }, {});
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = ['/signin', '/signup'].includes(pathname);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies(document.cookie);
    if (!cookies.auth_token && !isAuthPage) router.push('/signin')
  }, [pathname, isAuthPage, router]);

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
