import React, { Fragment } from 'react';
import Link from 'next/link';

import { ImageWrapper } from '../wrappers/image-wrapper';
import { LogOut } from '@/components/shared/svgr';
import { sidebarLinks } from '@/constants';

import logo from '../../../public/logo.png';
import { SidebarLink } from './sidebar-link';
import { CustomButton } from '@/components/shared';

export const Sidebar = () => {
  return (
    <aside className="min-w-[140px] bg-gd-main shadow-main">
      <Link href="/">
        <ImageWrapper src={logo} alt="logo" className="mx-auto mt-4 w-[98px]" />
      </Link>
      <div className="mt-4 h-px bg-gd-divider opacity-[32%]" />
      <p className="ml-4 mt-5 text-[11px] leading-none tracking-wider text-[#ffffff51]">MAIN</p>
      <nav className="item-center mt-6 flex flex-col items-center justify-center gap-7">
        {sidebarLinks.slice(0, 5).map((btn, i) => (
          <Fragment key={btn.href}>
            <SidebarLink {...btn} />
            {i === 3 && <div className="mb-3 mt-5 h-px w-full bg-gd-divider opacity-[32%]" />}
          </Fragment>
        ))}
        <Link href="/signin" key={'Log Out'} className={'mt-[120px] flex flex-col items-center gap-4'}>
          <CustomButton variant={'inside-red'} classNameWrapper="w-[50px] h-[50px]">
            <LogOut className={'min-h-6 min-w-6 opacity-100'} />
          </CustomButton>

          <p className={'text-center text-[11px] leading-none tracking-wider opacity-55'}>
            Log Out
          </p>
        </Link>
      </nav>
    </aside>
  );
};
