'use client';

import React, { useState } from 'react';
import { cn } from '@/lib';
import { BoxWrapper, CustomButton, ImageWrapper, Line } from '@/components/shared';
import { lineData } from '@/db/data';

import { Automation, Info, Solana } from '@/components/shared/svgr';
import { EllipsisVertical } from 'lucide-react';

import groupOne from '../../../public/crypto-icons/group-1.png';

export const UserProfit = () => {
  const [valueChart, setValueChart] = useState<'Revenue' | 'Volume'>('Revenue');

  return (
    <BoxWrapper as="section" classNameWrapper="min-w-[710px] max-w-[710px]">
      <h2 className="font-semibold">User Profit Live Stream</h2>
      <div className="mt-3 h-px bg-gd-divider opacity-[32%]" />

      {/* BLOCK 1 */}
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-5"
        classNameChild="flex h-[212px] gap-[15px] p-4"
      >
        {/* ALL TIME REVENUE (SOLANA) */}
        <div className="flex min-w-[162px] flex-col justify-between text-secondary">
          <h3 className="text-xs leading-relaxed">ALL TIME REVENUE (SOLANA)</h3>
          <p className="text-2xl font-bold leading-relaxed tracking-[-0.01em] text-magenta">
            4709.0 <span className="font-light tracking-[-0.03em]">USDT</span>
          </p>
          <p className="text-xs font-light leading-relaxed tracking-[-0.02em]">
            OR <span className="text-green">31.1</span> SOL{' '}
            <span className="text-magenta">512.2%</span>
          </p>
          <div className="flex items-center gap-1">
            <p className="text-xs leading-relaxed tracking-[-0.02em]">ACTIVE EPOCH</p> <Info />
          </div>
          <p className="text-2xl font-bold tracking-[-0.01em] text-magenta">666-686</p>
          <p className="text-[13px] font-light leading-normal tracking-[-0.02em]">
            OF <span className="text-green">587.7M</span>:
            <span className="ml-2.5 text-magenta">67.2%</span>
          </p>
        </div>

        {/* DIVIDER */}
        <div className="min-h-full w-px bg-gd-divider opacity-[32%]" />

        {/* CHART */}
        <div className="min-w-[439px]">
          <div className="flex gap-[55px]">
            <div>
              <h3 className="text-sm leading-relaxed text-secondary">Cost</h3>
              <p className="text-[32px] font-bold leading-relaxed tracking-[-0.01em]">1.1 SOL</p>
            </div>
            <div>
              <h3 className="text-sm leading-relaxed text-secondary">{valueChart}</h3>
              <p className="text-[32px] font-bold leading-relaxed tracking-[-0.01em] text-green">
                {'Revenue' === valueChart ? 2.9 : 25} SOL{' '}
                <span className="font-light">[+210%]</span>
              </p>
            </div>
          </div>

          <div className="mb-1 flex gap-5 text-xs leading-loose text-secondary">
            {['Revenue', 'Volume'].map((item) => (
              <button
                key={item}
                onClick={() => setValueChart(item as 'Revenue' | 'Volume')}
                className={cn({ 'text-magenta underline underline-offset-8': valueChart === item })}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="min-h-[74px]">
            <Line data={lineData[valueChart]} type="area" height={74} />
          </div>
        </div>
      </BoxWrapper>

      <div className="mt-5 flex gap-5">
        {/* BLOCK 2 */}
        <BoxWrapper variant="inside" classNameWrapper="min-w-[350px]" classNameChild="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm">Bot Status</h3>
            <button className="flex font-semibold text-green">
              +210%{' '}
              <EllipsisVertical color="#9E9E9E" className="ml-1.5 mr-[-10px]" strokeWidth="2.5" />
            </button>
          </div>
          <div className="mt-2 h-px bg-gd-divider opacity-[32%]" />

          <div className="mt-3 flex items-center">
            <Automation /> <p className="ml-2 text-sm text-secondary">Automated Attacks</p>{' '}
            <ImageWrapper
              src={groupOne}
              alt="Automated Attacks"
              className="ml-auto max-h-[15px] max-w-[120px]"
            />
          </div>

          <div className={`mt-3 rounded-sm bg-gd-border-main p-px`}>
            <div
              className={`flex h-full w-full items-center rounded-[7px] bg-dark px-4 py-3 text-xs`}
            >
              <div className="h-[13px] w-[13px] rounded-full bg-green" />
              <span className="ml-2.5">Activated</span>
              <span className="ml-auto text-secondary">View Current Strategy</span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-2.5 text-sm text-secondary">
            INVESTED <Solana className="ml-auto" /> <span className="text-white">1.1</span>($170)
          </div>

          <div className="mt-4 flex gap-4">
            <CustomButton classNameWrapper="w-full text-sm">Deactivate</CustomButton>
            <CustomButton classNameWrapper="w-full text-green text-sm">View Trades</CustomButton>
          </div>
        </BoxWrapper>

        {/* BLOCK 3 */}
        <BoxWrapper variant="inside" classNameWrapper="w-full text-sm" classNameChild="p-4">
          <ul className="flex h-full flex-col justify-between">
            <li className="flex font-light text-secondary">
              Entry epoch: <span className="ml-auto font-normal text-white">686</span>
            </li>
            <div className="h-px bg-gd-divider opacity-[32%]" />
            <li className="flex font-light text-secondary">
              Current epoch: <span className="ml-auto font-normal text-white">702</span>
            </li>
            <div className="h-px bg-gd-divider opacity-[32%]" />
            <li className="flex font-light text-secondary">
              Epoch progress: <span className="ml-auto font-normal text-white">85.48%</span>
            </li>
            <div className="h-px bg-gd-divider opacity-[32%]" />
            <li className="flex font-light text-secondary">
              Epoch time remaining:
              <span className="ml-auto font-normal text-white">-5h 41m 24s</span>
            </li>
          </ul>
        </BoxWrapper>
      </div>
    </BoxWrapper>
  );
};
