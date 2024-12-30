import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  classNameWrapper?: string;
  classNameChild?: string;
  classNameMiddle?: string;
  variant?: 'default' | 'inside' | 'outline';
  as?: React.ElementType;
};

const typeOptions = {
  default: {
    wrapper: 'rounded-[18px] p-[1px] shadow-main bg-gd-border-main',
    child: 'h-full w-full rounded-[17px] bg-gd-main p-5',
  },
  inside: {
    wrapper: 'neumorphism-border-1 rounded-md p-px',
    child: 'h-full w-full rounded-[8px] bg-dark',
    middle: 'neumorphism-border-2 h-full w-full rounded-[9px] p-px',
  },
  outline: {
    wrapper: 'rounded-sm p-[1px] bg-gd-border-main',
    child: 'h-full w-full rounded-[7px] bg-dark',
  },
};

export const BoxWrapper = ({
  children,
  classNameWrapper,
  classNameChild,
  classNameMiddle,
  variant = 'default',
  as: Component = 'div',
}: Props) => {
  return (
    <Component className={cn(classNameWrapper, typeOptions[variant].wrapper, 'overflow-hidden')}>
      {variant === 'inside' ? (
        <div className={cn(classNameMiddle, typeOptions[variant].middle)}>
          <div className={cn(classNameChild, typeOptions[variant].child)}>{children}</div>
        </div>
      ) : (
        <div className={cn(classNameChild, typeOptions[variant].child)}>{children}</div>
      )}
    </Component>
  );
};
