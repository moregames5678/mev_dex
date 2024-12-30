import { cn } from '@/lib/utils';
import React from 'react';

export type ButtonVariant =
  | 'default'
  | 'dark'
  | 'sidebar'
  | 'magenta'
  | 'red'
  | 'pink'
  | 'ghost'
  | 'outline-green'
  | 'outline-pink'
  | 'outline-red'
  | 'outline-sol'
  | 'inside-red'
  | 'inside-dark'
  | 'purple'
  | 'secondary'
  | 'outline';

type Props = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  classNameWrapper?: string;
  classNameMiddle?: string;
  classNameChild?: string;
  as?: React.ElementType;
  props?: React.ComponentPropsWithoutRef<'button'>;
};

const types = {
  default: {
    buttonClass: 'bg-gd-border-main p-px rounded-sm shadow-main',
    divClass: 'inline',
    spanClass: 'bg-gd-main rounded-[7px]',
  },
  dark: {
    buttonClass: 'bg-gd-border-main p-px rounded-sm shadow-main',
    divClass: 'inline',
    spanClass: 'bg-dark rounded-[7px]',
  },
  secondary: {
    buttonClass: 'bg-gd-border-main p-px rounded-sm shadow-main',
    divClass: 'inline',
    spanClass: 'bg-gd-secondary rounded-[7px]',
  },
  'outline-green': {
    buttonClass:
      'bg-gradient-to-br from-[#14F195] to-[#005330ca] text-green p-px rounded-sm shadow-main',
    divClass: 'inline',
    spanClass: 'bg-gd-main rounded-sm',
  },
  'outline-pink': {
    buttonClass:
      'bg-gradient-to-br from-[#FF00FF] to-[#930093] text-magenta p-px rounded-sm shadow-main',
    divClass: 'inline',
    spanClass: 'bg-gd-main rounded-sm',
  },
  'outline-red': {
    buttonClass:
      'bg-gradient-to-br from-[#FF0040] to-[#6C001B] text-[#ff0040] p-px rounded-sm shadow-main',
    divClass: 'inline',
    spanClass: 'bg-gd-main rounded-sm',
  },
  'outline-sol': {
    buttonClass: 'bg-gradient-to-bl from-[#00FFA3] to-[#DC1FFF] p-px rounded-sm shadow-main',
    divClass: 'h-full rounded-[6px] bg-gd-main',
    spanClass: 'bg-gd-text-sol bg-clip-text text-transparent',
  },
  outline: {
    buttonClass: '!rounded-[6px] overflow-hidden',
    divClass: 'inline',
    spanClass: 'btn-outline-gd',
  },
  'inside-red': {
    buttonClass: 'bg-gradient-to-br from-[#000000b0] to-[#ffffff15] p-[1.5px]',
    divClass: 'inline',
    spanClass: 'bg-gd-inside-red',
  },
  'inside-dark': {
    buttonClass: 'bg-gradient-to-br from-[#000000b0] to-[#ffffff15] p-[1.5px]',
    divClass: 'inline',
    spanClass: 'bg-dark',
  },
  sidebar: {
    buttonClass: 'bg-gradient-to-br from-[#000000b0] to-[#ffffff15] p-0.5',
    divClass: 'inline',
    spanClass: 'bg-gd-sidebar-btn-off',
  },
  magenta: {
    buttonClass: 'bg-gradient-to-br from-[#FF00FF] to-[#930093] p-px shadow-magenta-btn',
    divClass: 'inline',
    spanClass: 'bg-gd-magenta',
  },
  purple: {
    buttonClass: 'bg-gradient-to-br from-[#7B0093] to-[#AE00FF] p-px shadow-magenta-btn',
    divClass: 'inline',
    spanClass: 'bg-gd-purple',
  },
  pink: {
    buttonClass: 'bg-gradient-to-br from-[#000000b0] to-[#ffffff15] p-[1.5px]',
    divClass: 'inline',
    spanClass: 'bg-gd-magenta-2',
  },
  red: {
    buttonClass: 'bg-gradient-to-br from-[#FF0040] to-[#6C001B] p-px shadow-main',
    divClass: 'inline',
    spanClass: 'bg-gd-red',
  },
  ghost: {
    buttonClass: 'bg-transparent p-0.5',
    divClass: 'inline',
    spanClass: 'bg-transparent text-secondary',
  },
};

export const CustomButton = ({
  children,
  variant = 'default',
  classNameChild,
  classNameMiddle,
  classNameWrapper,
  onClick,
  as: Component = 'button',
  props,
}: Props) => {
  const wrapper = cn(
    types[variant].buttonClass,
    classNameWrapper,
    `relative cursor-pointer rounded-[10px] opacity-90 transition-opacity hover:opacity-100 active:scale-[97%]`,
  );

  const div = cn(types[variant].divClass, classNameMiddle, ``);

  const child = cn(
    types[variant].spanClass,
    classNameChild,
    `flex h-full w-full items-center justify-center gap-2 rounded-[9px] py-2`,
  );

  return (
    <Component className={wrapper} onClick={onClick} {...props}>
      <div className={div}>
        <span className={child}>{children}</span>
      </div>
    </Component>
  );
};
