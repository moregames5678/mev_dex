'use client';

import React, { FC, SVGProps } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { CustomButton } from '@/components/shared';

type Props = {
  href: string;
  icon: FC<SVGProps<SVGElement>>;
  label: string;
};

export const SidebarLink = ({ href, icon: Icon, label }: Props) => {
  const pathname = usePathname();
  const mainPath = '/' + pathname.split('/').slice(1, 2).join('');
  const isActive = mainPath === href || (pathname === '/' && href === '/dashboard');

  const isActiveVariant = isActive ? 'magenta' : 'sidebar';
  const filter = isActive ? 'drop-shadow(0px 0px 7px rgba(255, 255, 255, 1))' : '';

  return (
    <Link href={href} key={label} className={cn('flex flex-col items-center gap-4')}>
      <CustomButton variant={isActiveVariant} classNameWrapper="w-[50px] h-[50px]">
        <Icon
          className={cn('min-h-6 min-w-6 opacity-55', {
            'opacity-100': isActive,
          })}
          style={{ filter }}
        />
      </CustomButton>

      <p
        className={cn('text-center text-[11px] leading-none tracking-wider', {
          'text-[#ffffff51]': !isActive,
        })}
      >
        {label}
      </p>
    </Link>
  );
};
