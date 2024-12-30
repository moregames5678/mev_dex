'use client';

import { dataTitleFromUrl } from '@/constants/sidebar-links';
import { usePathname } from 'next/navigation';

export const PageTitle = () => {
  const pathname = usePathname();
  return <h1 className="text-[32px] font-semibold">{dataTitleFromUrl[pathname]}</h1>;
};
