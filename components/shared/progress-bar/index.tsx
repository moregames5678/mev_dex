'use client';

import React, { useState } from 'react';

type Props = {
  value?: number;
  max?: number;
  addLabel?: string;
  className?: string;
};

const transition = 'transition-all duration-1000 ease-in-out';

export const ProgressBar = ({ value = 66, max = 100, addLabel = '' }: Props) => {
  const [progress, setProgress] = useState(0);

  const percentage = Math.min((progress / max) * 100, 100);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-[500px]">
      <div className="relative">
        <p className={`absolute -top-[42px] right-1 text-sm text-secondary`}>{addLabel}</p>
        <div
          className={`absolute -top-[42px] text-sm text-secondary ${transition}`}
          style={{ left: `calc(${progress}% - ${progress < 10 ? 0 : 10}px)` }}
        >
          {Math.round(progress)}%
        </div>

        <div className="mt-[42px] rounded-md bg-gradient-to-br from-[#000000b0] to-[#ffffff15] p-[1.5px]">
          <div className="h-4 w-full rounded-md bg-dark">
            <div
              className={`h-full rounded-md bg-magenta ${transition}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
