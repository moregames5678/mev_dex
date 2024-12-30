'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BoxWrapper,
  CustomButton,
  Line,
  Tabs,
  DoughnutProgress,
  ImageWrapper,
} from '@/components/shared';
import {
  Automation,
  BackRunning,
  CheckedDesign,
  FrontRunning,
  Info,
  Sandwich,
  Solana,
  Update,
} from '@/components/shared/svgr';
import { IValueTab } from '@/components/shared/tabs';
import { EllipsisVertical } from 'lucide-react';
import { cn } from '@/lib';
import { lineData } from '@/db/data';

import groupOne from '../../../public/crypto-icons/group-1.png';

type props = {
  blockUser?: boolean;
};

const commonTitle =
  'text-xs font-light uppercase leading-relaxed tracking-[-0.02em] text-secondary';

export const RDC = ({ blockUser = false }: props) => {
  const [tabValue, setTabValue] = useState({ label: 'MevDex RDC' });

  const handleTabChange = (value: IValueTab) => {
    setTabValue(value);
  };

  return (
    <BoxWrapper classNameWrapper="mt-3">
      <div className="flex items-center ">
        <Tabs
          typeButton="outline-green"
          dataValues={[{ label: 'MevDex RDC' }, { label: 'Custom RDC Node' }]}
          value={tabValue}
          classNameBtnChild="!py-1"
          onClick={handleTabChange}
        />

        <BoxWrapper
          variant="inside"
          classNameWrapper="w-fit ml-auto !rounded-md"
          classNameChild="p-1 !rounded-md"
        >
          <Link href={'/mev-bots/deploy'}>
            <CustomButton
              variant="outline-green"
              classNameChild="!py-[4.5px] px-3 text-sm !rounded-[7px]"
              classNameWrapper="!rounded-[8px]"
            >
              Deploy Bot
            </CustomButton>
          </Link>
        </BoxWrapper>

        <BoxWrapper
          variant="inside"
          classNameWrapper="w-fit ml-1.5 !rounded-md"
          classNameChild="p-1 !rounded-md"
        >
          <CustomButton
            variant="outline-green"
            classNameChild="!py-[7.5px] px-[7.5px] text-sm !rounded-[7px]"
            classNameWrapper="!rounded-[8px]"
          >
            <Update />
          </CustomButton>
        </BoxWrapper>
      </div>

      <div className={cn('mt-[30px] flex gap-5', { hidden: blockUser })}>
        <BoxWrapper
          variant="inside"
          classNameWrapper="w-[460px] relative"
          classNameChild="p-5 pt-2.5"
        >
          <div className="flex w-full items-center justify-between">
            <h2 className="font-semibold">{tabValue.label}</h2>
            <button>
              <EllipsisVertical color="#9E9E9E" className="ml-1.5 mr-[-10px]" strokeWidth="2.5" />
            </button>
          </div>

          <div className="mt-2 h-px bg-gd-divider opacity-[32%]" />

          {tabValue.label === 'MevDex RDC' && (
            <>
              <div className="mt-2.5 flex gap-5">
                <div className="w-full">
                  <h3 className="text-sm text-secondary">All- time Profit</h3>
                  <BoxWrapper
                    variant="outline"
                    classNameWrapper="mt-2"
                    classNameChild="text-2xl leading-[2.25] pl-4 text-magenta font-bold tracking-[-0.01em]"
                  >
                    322.18 <span className="font-light tracking-[-0.03em]">USDT</span>
                  </BoxWrapper>
                </div>
                <div className="w-full">
                  <h3 className="text-sm text-secondary">Today’s Profit</h3>
                  <BoxWrapper
                    variant="outline"
                    classNameWrapper="mt-2"
                    classNameChild="text-2xl leading-[2.25] pl-4 text-magenta font-bold tracking-[-0.01em]"
                  >
                    0.03 <span className="font-light tracking-[-0.03em]">USDT</span>
                  </BoxWrapper>
                </div>
              </div>
              <div className="mt-2.5 w-full">
                <h3 className="text-sm text-secondary">Today’s Profit</h3>
                <BoxWrapper
                  variant="outline"
                  classNameWrapper="mt-2"
                  classNameChild="flex text-2xl leading-[2.25] px-4 text-magenta font-bold tracking-[-0.01em]"
                >
                  0.03 &nbsp;<span className="font-light tracking-[-0.03em]">USDT</span>
                  <span className="ml-auto font-light tracking-[-0.03em]">20,55109 SOL</span>
                </BoxWrapper>
              </div>
            </>
          )}

          {tabValue.label === 'Custom RDC Node' && (
            <>
              <div className="mt-6 flex items-center">
                <Automation className="h-[20.5px] w-[29px]" />{' '}
                <p className="ml-2 text-sm text-secondary">Not Configure</p>{' '}
                <ImageWrapper
                  src={groupOne}
                  alt="Automated Attacks"
                  className="ml-auto max-h-[20px] max-w-[172.5px]"
                />
              </div>

              <div className={`mt-7 h-[61px] rounded-sm bg-gd-border-main p-px`}>
                <div
                  className={`flex h-full w-full items-center rounded-[7px] bg-dark px-4 text-xs`}
                >
                  <div className="h-[13px] w-[13px] rounded-full bg-[#FFFF09]" />
                  <span className="ml-2.5">Need Configuration</span>
                  <span className="ml-auto text-secondary">View Current Strategy</span>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-2.5 text-sm text-secondary">
                INVESTED <Solana className="ml-auto h-4 w-4" />{' '}
                <span className="text-white">1.1</span>
                ($170)
              </div>
            </>
          )}

          <div className="absolute bottom-5 right-5 grid w-[calc(100%-40px)] grid-cols-2 gap-5 text-sm">
            <CustomButton classNameChild="!py-4">Add Balance</CustomButton>
            <CustomButton classNameChild="!py-4">Withdraw</CustomButton>
            <CustomButton classNameChild="!py-4 text-[#FFFF09]">Configuration</CustomButton>
            <CustomButton classNameChild="!py-4 text-green">Activate</CustomButton>
          </div>
        </BoxWrapper>

        <div>
          {/* CHARTS BOX 1 */}
          <BoxWrapper
            variant="inside"
            classNameWrapper="w-full h-[202px]"
            classNameChild="p-5 pt-4 flex gap-5"
          >
            <div>
              <div className="w-[153px]">
                <h3 className={commonTitle}>All time revenue (Solana)</h3>
                <p className="text-2xl font-bold leading-relaxed tracking-[-0.01em] text-magenta">
                  4709.0 <span className="font-light tracking-[-0.03em]">USDT</span>
                </p>
                <p className="text-xs font-bold uppercase leading-relaxed tracking-[-0.02em] text-green">
                  31.2 SOL <span className="font-light">[+612%]</span>
                </p>

                <div className="min-h-[74px]">
                  <Line
                    data={[
                      10, 12, 10, 8, 10, 12, 14, 16, 18, 16, 14, 12, 8, 8, 8, 12, 13, 10, 8, 5, 4,
                      3,
                    ]}
                    type="area"
                    height={74}
                  />
                </div>
              </div>
            </div>

            <div className="min-h-full w-px bg-gd-divider opacity-[32%]" />

            <div className="min-w-[489px]">
              <div className="flex justify-between">
                <div>
                  <h3 className={commonTitle}>Current Epoch Revenue </h3>
                  <p className="text-2xl font-bold leading-relaxed tracking-[-0.01em] text-green">
                    709.10
                  </p>
                  <p className="text-xs font-bold uppercase leading-relaxed tracking-[-0.02em] text-magenta">
                    31.2 SOL <span className="font-light text-green">[+210%]</span>
                  </p>
                </div>
                <div>
                  <h3 className={cn(commonTitle, 'flex items-center gap-[5px]')}>
                    ACTIVE EPOCH{' '}
                    <button>
                      <Info />
                    </button>
                  </h3>
                  <p className="text-right text-2xl font-bold leading-relaxed tracking-[-0.01em] text-magenta">
                    686
                  </p>
                </div>
              </div>

              <div className="min-h-[74px]">
                <Line data={lineData['Revenue']} type="area" height={74} />
              </div>
            </div>
          </BoxWrapper>

          {/* CHARTS BOX 2 */}
          <BoxWrapper
            variant="inside"
            classNameWrapper="w-full mt-5"
            classNameChild="p-5 pt-4 flex gap-5"
          >
            <div className="relative flex w-[153px] items-center justify-center !p-0">
              <DoughnutProgress width={141} height={141} value={88} colorFill="#F408AB" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs ">
                <div>RDC STATUS</div>
                <div className="font-light text-[#FF1313]">NOT ACTIVE</div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="min-h-full w-px bg-gd-divider opacity-[32%]" />

            <div className="">
              <div className="min-w-[489px]">
                <h3 className={'text-sm font-light text-secondary'}>
                  Bot Entry epoch: <span className="font-normal text-white">686</span>
                </h3>

                <div className="mt-4 flex">
                  <div className="grid w-[52px] grid-cols-2 items-center gap-3 text-sm">
                    <FrontRunning className="h-5 w-[22px]" /> 231
                    <BackRunning className="h-5 w-[22px]" /> 231
                    <Sandwich className="h-5 w-[22px]" /> 231
                  </div>

                  <BoxWrapper
                    classNameWrapper="ml-5 min-w-[105px] min-h-[105px] relative !rounded-sm"
                    classNameChild="!p-0 flex items-center justify-center !rounded-[7px]"
                  >
                    <DoughnutProgress width={85} height={85} value={88} colorEmpty="#48484A" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs text-blue">
                      <div>45.6</div>
                      <div>MS</div>
                    </div>
                  </BoxWrapper>

                  <BoxWrapper
                    classNameWrapper="ml-4 min-w-[105px] min-h-[105px] !rounded-sm"
                    classNameChild="flex flex-col items-center justify-center !p-0 !rounded-[7px]"
                  >
                    <BoxWrapper
                      variant="inside"
                      classNameWrapper="w-[57.5px] h-[57.5px]"
                      classNameChild="flex items-center justify-center"
                    >
                      <CustomButton
                        classNameWrapper="w-[45px] h-[45px] !rounded-sm !p-px"
                        classNameChild="flex items-center justify-center !rounded-[7px]"
                      >
                        <CheckedDesign className="h-[30px] w-8" />
                      </CustomButton>
                    </BoxWrapper>
                    <span className="mt-2 text-center text-xs leading-none text-blue">Healthy</span>
                  </BoxWrapper>

                  <ul className="ml-5 flex flex-col justify-between">
                    {['302758754', '2.0.16', '23 Nov 2024'].map((item) => (
                      <li key={item}>
                        <BoxWrapper
                          classNameWrapper="!rounded-sm"
                          classNameChild="text-sm font-semibold leaning-none !p-1 !px-10 text-center !rounded-[7px]"
                        >
                          {item}
                        </BoxWrapper>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </BoxWrapper>
        </div>
      </div>
    </BoxWrapper>
  );
};
