'use client';

import React, { useState } from 'react';
import { BoxWrapper, CustomButton, LineAndColumn } from '@/components/shared';
import { BackRunning, FrontRunning, Sandwich } from '@/components/shared/svgr';
import { cn } from '@/lib';
import { lineAndColumnData } from '@/db/data';

interface Props {
  className?: string;
}

export const PerformanceOfTypes = ({ className }: Props) => {
  const [tabValues, setTabValues] = useState<'profit' | 'volume'>('profit');

  return (
    <BoxWrapper as="section" classNameWrapper={cn(className, 'w-full')}>
      <h2 className="font-semibold">Performance of MEV Types</h2>
      <div className="mt-3 h-px bg-gd-divider opacity-[32%]" />

      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-5 w-fit"
        classNameChild="flex gap-2 p-1 justify-between"
      >
        {['profit', 'volume'].map((item) => (
          <CustomButton
            key={item}
            classNameChild={cn('px-3 text-sm')}
            variant={tabValues === item ? 'magenta' : 'ghost'}
            onClick={() => setTabValues(item as 'profit' | 'volume')}
          >
            By {item}
          </CustomButton>
        ))}
      </BoxWrapper>

      {/* Chart */}
      <div className="mt-3 min-h-[310px]">
        <LineAndColumn height={310} data={lineAndColumnData[tabValues]} />
      </div>

      <div className="mt-8 flex gap-5">
        <BoxWrapper variant="inside" classNameChild="p-2.5" classNameWrapper="w-full">
          <p className="text-[10px] text-secondary">FrontRunning (7d)</p>
          <div className="flex items-center gap-1 text-lg font-bold text-[#58b9ed]">
            <FrontRunning />
            $912.96k
          </div>
        </BoxWrapper>
        <BoxWrapper variant="inside" classNameChild="p-2.5" classNameWrapper="w-full">
          <p className="text-[10px] text-secondary">BackRunning (7d)</p>
          <div className="flex items-center gap-1 text-lg font-bold text-green">
            <BackRunning />
            $321.18k
          </div>
        </BoxWrapper>
        <BoxWrapper variant="inside" classNameChild="p-2.5" classNameWrapper="w-full">
          <p className="text-[10px] text-secondary">Sandwich (7d)</p>
          <div className="flex items-center gap-1 text-lg font-bold text-[#B056FF]">
            <Sandwich />
            $2.11m
          </div>
        </BoxWrapper>
      </div>
    </BoxWrapper>
  );
};
