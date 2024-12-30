'use client';

import { cn } from '@/lib';
import { BoxWrapper } from '../wrappers';
import { useCountProgress } from '@/hooks';

type Props = {
  value: number;
};

export const LineProgress = ({ value }: Props) => {
  const progress = useCountProgress(value);

  const colorPath = (index: number) => index < progress / 10;

  return (
    <BoxWrapper
      variant="inside"
      classNameWrapper=" w-[347px] h-[22px] !rounded-[4px]"
      classNameMiddle="!rounded-[4px]"
      classNameChild="!rounded-[4px] flex items-center gap-0.5 p-px"
    >
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className={cn('h-[14px] w-9', {
            'bg-gradient-to-br from-[#FF00FF] to-[#930093] p-px': colorPath(index),
            'rounded-l-[2px]': index === 0,
            'rounded-r-[2px]': index === 8,
          })}
        >
          <div className={cn('h-full w-full', { 'bg-gd-magenta': colorPath(index) })} />
        </div>
      ))}
    </BoxWrapper>
  );
};
