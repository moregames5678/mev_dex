'use client';

import * as React from 'react';
import { paths } from './path';
import { useCountProgress } from '@/hooks';

interface Props {
  value: number;
  width?: number;
  height?: number;
  colorEmpty?: string;
  colorFill?: string;
}

export const DoughnutProgress = ({
  value,
  width = 85,
  height = 85,
  colorEmpty = '#232428',
  colorFill = '#14F195',
}: Props) => {
  const progress = useCountProgress(value);

  const colorPath = (index: number) => (index < progress / 4.3 ? colorFill : colorEmpty);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 85 85"
    >
      <path
        d="M42.4966 72.6543C25.869 72.6543 12.3387 59.1256 12.3387 42.493C12.3387 25.8604 25.869 12.3386 42.4966 12.3386C59.1242 12.3386 72.6613 25.8673 72.6613 42.4999C72.6613 59.1325 59.1311 72.6612 42.4966 72.6612V72.6543ZM42.4966 13.3963C26.4497 13.3963 13.3966 26.448 13.3966 42.493C13.3966 58.538 26.4497 71.5897 42.4966 71.5897C58.5434 71.5897 71.5966 58.538 71.5966 42.493C71.5966 26.448 58.5434 13.3963 42.4966 13.3963Z"
        fill={colorEmpty}
      />
      <g clipPath="url(#clip0_2091_2506)">
        {paths.map((path, index) => (
          <path
            key={index}
            fill={colorPath(index)}
            fillRule="evenodd"
            d={path}
            clipRule="evenodd"
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_2091_2506">
          <path fill="#fff" d="M0 0h85v85H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
