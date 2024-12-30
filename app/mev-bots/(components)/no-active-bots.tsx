import { ImageWrapper } from '@/components/shared';
import React from 'react';

type Props = {
  className?: string;
};

export const NoActiveBots = ({ className }: Props) => {
  return (
    <section className={`${className} relative flex h-[709px] items-center justify-center`}>
      <ImageWrapper src="/bg-image/bg-no-active-bots.jpg" alt="no active bots" fill />
      <h2 className="relative mt-[-26px] text-7xl">No active bots</h2>
    </section>
  );
};
