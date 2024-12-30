'use client';

import { cn } from '@/lib';
import { useCountProgress } from '@/hooks';

type Props = {
  value: number;
  variant?: 'default' | 'small';
  className?: string;
};

export const LineBarProgress = ({ value, variant, className }: Props) => {
  const progress = useCountProgress(value);

  const colorPath = (index: number) => index < progress / 20;

  const variantClass = variant === 'small';

  const hights = variantClass ? [11, 12, 13, 14, 15] : [49, 53, 60, 66, 73];
  const width = variantClass ? '8px' : '15px';
  const borderRadiusChild = variantClass ? '1.5px' : '2px';
  const gap = variantClass ? 'flex items-end gap-0.5' : 'flex items-end gap-2.5';

  return (
    <div className={cn(className, gap)}>
      {hights.map((hight, index) => {
        return (
          <div
            key={index}
            className={'rounded-[2px] p-[1.5px]'}
            style={{
              height: `${hight}px`,
              background: `linear-gradient(110deg, rgba(0, 0, 0, 0.3) 60%, rgba(255, 255, 255, 0.13) 100%)`,
              width,
            }}
          >
            <div
              className={cn('h-full w-full bg-dark', {
                '!bg-green': colorPath(index),
              })}
              style={{
                borderRadius: `${borderRadiusChild}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
