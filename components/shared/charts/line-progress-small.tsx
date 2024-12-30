'use client';

import { cn } from '@/lib';
import { BoxWrapper } from '../wrappers';
import { useCountProgress } from '@/hooks';

type Props = {
  value: number;
};

export const LineProgressSmall = ({ value }: Props) => {
  const progress = useCountProgress(value);

  const colorPath = (index: number) => index < progress / 5.5;

  return (
    <BoxWrapper
      variant="inside"
      classNameWrapper=" w-[79px] h-[22px] !rounded-all"
      classNameMiddle="!rounded-all"
      classNameChild="!rounded-all flex items-center gap-px  overflow-hidden"
    >
      {[...Array(19)].map((_, index) => (
        <div
          key={index}
          className={cn('h-full w-[3px]', { 'rounded-sm bg-magenta': colorPath(index) })}
        />
      ))}
    </BoxWrapper>
  );
};
