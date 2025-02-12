'use client';

import React from 'react';
import { BoxWrapper, CustomButton, ImageWrapper, Line } from '@/components/shared';
import { lineData } from '@/db/data';

import { Automation, Info, Solana } from '@/components/shared/svgr';

import groupOne from '../../../public/crypto-icons/group-1.png';

export const UserProfit = () => {

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
        {/* TOTAL BOTS PNL (SOLANA) */}
        <div className="flex min-w-[162px] flex-col justify-between text-secondary">
          <h3 className="text-xs leading-relaxed">TOTAL BOTS PNL (SOLANA)</h3>
          <p className="leading-relaxed tracking-[-0.01em] text-magenta">
            <span className="text-2xl font-bold">4709.0</span> <span className="font-light tracking-[-0.03em]">USDT</span>
          </p>
          <p className="text-xs font-light leading-relaxed tracking-[-0.02em]">
            INVESTMENT <span className="text-green">$31.1</span> SOL{' '}
            <span className="text-magenta">5,012,20</span>
          </p>
          <p className="text-xs font-light leading-relaxed tracking-[-0.02em]">
            PENDING TOP UP <span className="text-green">$1121.78</span> / SOL{' '}
            <span className="text-magenta">7.30</span>
          </p>
          <div className="flex items-center gap-1">
            <p className="text-xs leading-relaxed tracking-[-0.02em]">ACTIVE EPOCH</p> <Info />
          </div>
          <p className="text-2xl font-bold tracking-[-0.01em] text-magenta">666-686</p>
        </div>

        {/* DIVIDER */}
        <div className="min-h-full w-px bg-gd-divider opacity-[32%]" />

        {/* CHART */}
        <div className="min-w-[410px]">
          <div className="flex gap-[55px]">
            <div>
              <h3 className="text-sm leading-relaxed text-secondary">GROSS REVENUE</h3>
              <p className="text-[32px] font-bold leading-relaxed tracking-[-0.01em] text-green">
                3.2 SOL{' '}
                <span className="font-light">[+210%]</span>
              </p>
            </div>
            <div>
              <h3 className="text-sm leading-relaxed text-secondary">Cost</h3>
              <p className="text-[32px] font-bold leading-relaxed tracking-[-0.01em]">1.1 SOL</p>
            </div>
          </div>
          <div className="min-h-[74px]">
            <Line data={lineData['Revenue']} type="area" height={74} />
          </div>
        </div>
      </BoxWrapper>

      <div className="mt-5 flex gap-5">
        {/* BLOCK 2 */}
        <BoxWrapper variant="inside" classNameWrapper="w-full" classNameChild="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm">MevDex RDC</h3>
            <div className="flex items-center gap-1">
              <span className="text-sm text-secondary">ROI:</span>
              <button className="flex font-semibold text-green">
                +210%
              </button>
            </div>
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
            <CustomButton classNameWrapper="w-full text-pink-500 text-sm">Deactivate</CustomButton>
            <CustomButton classNameWrapper="w-full text-green text-sm">View Trades</CustomButton>
          </div>
        </BoxWrapper>

        {/* BLOCK 3 */}
        <BoxWrapper variant="inside" classNameWrapper="w-full" classNameChild="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm">Custom RDC</h3>
            <div className="flex items-center gap-1">
              <span className="text-sm text-secondary">ROI:</span>
              <button className="flex font-semibold text-green">
                0%
              </button>
            </div>
          </div>
          <div className="mt-2 h-px bg-gd-divider opacity-[32%]" />

          <div className="mt-3 flex items-center">
            <Automation /> <p className="ml-2 text-sm text-secondary">Not Active</p>{' '}
          </div>

          <div className={`mt-3 rounded-sm bg-gd-border-main p-px`}>
            <div
              className={`flex h-full w-full items-center rounded-[7px] bg-dark px-4 py-3 text-xs`}
            >
              <div className="h-[13px] w-[13px] rounded-full bg-yellow-300" />
              <span className="ml-2.5">Needs Configuration</span>
              <span className="ml-auto text-secondary">Setup Strategy</span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-2.5 text-sm text-secondary">
            INVESTED <Solana className="ml-auto" /> <span className="text-white">0.00</span>($0.00)
          </div>

          <div className="mt-4 flex gap-4">
            <CustomButton classNameWrapper="w-full text-yellow-300 text-sm">Configurate</CustomButton>
            <CustomButton classNameWrapper="w-full text-green text-sm">Activate</CustomButton>
          </div>
        </BoxWrapper>
      </div>
    </BoxWrapper>
  );
};
