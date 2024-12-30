import { ImageWrapper } from '@/components/shared';
import React from 'react';

import logo from '../../../public/logo-box.png';

type Props = {
  className?: string;
};

export const DeployWithMd = ({ className }: Props) => {
  return (
    <section className={className}>
      <ImageWrapper src={logo} alt="logo" className="mx-auto" width={198} height={164} />
      <h1 className="text-center text-[26px] font-semibold leading-10 text-magenta">
        DEPLOY YOUR BOT WITH MEVDEX
      </h1>
      <div className="mt-1 h-1.5 w-full rounded-[20px] bg-magenta" />
    </section>
  );
};
