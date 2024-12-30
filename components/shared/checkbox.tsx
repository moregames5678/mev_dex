'use client';

import { cn } from '@/lib';
import { CheckedDesign } from './svgr';
import { BoxWrapper } from './wrappers';

type Props = {
  label?: React.ReactNode;
  checked?: boolean;
  variant?: 'default' | 'second';
  className?: string;
  classNameLabel?: string;
  onChange?: () => void;
};

export const Checkbox = ({
  label,
  checked = false,
  onChange,
  variant = 'default',
  className,
  classNameLabel,
}: Props) => {
  return (
    <label className={cn(className, 'flex items-center')} onClick={onChange}>
      {variant === 'second' ? (
        <CheckedSecond checked={checked} />
      ) : (
        <CheckedDefault checked={checked} />
      )}

      {label && <span className={cn(classNameLabel, 'ml-2')}>{label}</span>}
    </label>
  );
};

const CheckedDefault = ({ checked }: { checked: boolean }) => {
  return (
    <BoxWrapper
      variant="inside"
      classNameWrapper="w-[16.5px] h-[16.5px] !rounded-[3px] !p-px cursor-pointer"
      classNameMiddle="!rounded-[3px]"
      classNameChild="flex items-center justify-center !rounded-[3px]"
    >
      {checked && <CheckedDesign className="mt-[-1px] h-[9px] w-[10px]" />}
    </BoxWrapper>
  );
};

const CheckedSecond = ({ checked }: { checked: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
    <rect width="19" height="19" x="1" y="1" fill="#191A1C" rx="4"></rect>
    <rect
      width="19"
      height="19"
      x="1"
      y="1"
      stroke="url(#paint0_linear_2123_323)"
      strokeWidth="1.5"
      rx="4"
      style={{ mixBlendMode: 'overlay' }}
    ></rect>
    <rect
      width="14"
      height="14"
      x="3.5"
      y="3.5"
      fill="url(#paint1_linear_2123_323)"
      stroke="url(#paint2_linear_2123_323)"
      rx="3.5"
    ></rect>
    <path
      className={cn({ hidden: !checked })}
      fill="#14F195"
      d="M9.79 14h-.005a.2.2 0 0 1-.136-.061L6.05 10.055a.19.19 0 0 1-.013-.24.19.19 0 0 1 .235-.06l3.293 1.53c.028.014.06.008.082-.014l5.024-5.212a.19.19 0 0 1 .257-.018c.077.06.095.17.04.252l-4.997 7.6-.025.03-.022.022A.2.2 0 0 1 9.79 14"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_2123_323"
        x1="2.9"
        x2="17.34"
        y1="4.04"
        y2="25.32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.45"></stop>
        <stop offset="1" stopColor="#fff"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_2123_323"
        x1="3.571"
        x2="17.25"
        y1="3.929"
        y2="17.214"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F2023"></stop>
        <stop offset="1" stopColor="#27282C"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_2123_323"
        x1="6.409"
        x2="17.393"
        y1="6.266"
        y2="17.571"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#343538"></stop>
        <stop offset="0.852" stopColor="#1F2023"></stop>
      </linearGradient>
    </defs>
  </svg>
);
