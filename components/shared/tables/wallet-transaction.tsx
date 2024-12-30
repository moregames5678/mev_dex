'use client';

import React from 'react';

import { Clock, CopyTransparent, QuestionMarkWhite, SolanaWithoutBG, View } from '../svgr';
import { BoxWrapper, CopyWrapper, ImageWrapper } from '../wrappers';
import { cn } from '@/lib/utils';
import { CustomButton } from '../custom-button';
import { ChevronDown, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Switch } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { dataWalletTransitions } from '@/db/data';

const titlesTransitions = [
  '',
  'Signature',
  'Block',
  'Time',
  'Instructions',
  'By',
  'Value (SOL)',
  'Fee (SOL)',
  'Programs',
];

export const TableWalletTransaction: React.FC = () => {
  const [position, setPosition] = React.useState('10');

  return (
    <BoxWrapper as={'section'} classNameChild="!p-0 overflow-hidden" classNameWrapper="mt-[30px]">
      <div className="flex items-center justify-between p-5 pb-0 text-xs">
        <h2 className="text-base font-medium">Transactions</h2>

        {/*  USER PANEL  */}
        <div className="flex items-center gap-[30px]">
          <BoxWrapper
            variant="inside"
            classNameWrapper="!rounded-[6px] h-[22px]"
            classNameChild="!rounded-[5px] !pl-2.5 flex items-center !py-0"
          >
            <Info size={14} color="#00ffa3" />
            <span className="ml-1.5 text-secondary">Hide failed</span>
            <Switch className="-mr-1 ml-2.5 scale-[0.6]" />
          </BoxWrapper>

          <div className="flex items-center gap-2 text-secondary">
            Show
            <DropdownMenu>
              <DropdownMenuTrigger>
                <BoxWrapper
                  variant="inside"
                  classNameWrapper="!rounded-[6px] h-[22px]"
                  classNameChild="!rounded-[5px] !px-2.5 flex items-center !py-0 text-white"
                >
                  <span className="w-6 text-left text-sm">{position}</span>
                  <ChevronDown size={16} className="-mr-1" />
                </BoxWrapper>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-0">
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="5">5</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="10">10</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            per page
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <CustomButton
                variant="dark"
                classNameWrapper="!rounded-[4px] h-5"
                classNameChild="!rounded-[3px] px-[5px]"
              >
                <ChevronLeft size={16} />
              </CustomButton>
              <p>
                Item <span className="text-green">1 - 5</span>{' '}
                <span className="text-secondary">of 256</span>
              </p>
              <CustomButton
                variant="dark"
                classNameWrapper="!rounded-[4px] h-5"
                classNameChild="!rounded-[3px] px-[5px]"
              >
                <ChevronRight size={16} />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 h-px bg-gd-divider opacity-[32%]" />

      {/*  TABLE  */}
      <div className="relative mt-7 overflow-x-auto">
        <table className="h-[340px] w-full">
          <thead>
            <tr>
              {titlesTransitions.map((label, i) => {
                return (
                  <th key={i}>
                    <div
                      className={cn(
                        'mb-4 flex cursor-pointer items-center px-5 text-sm font-normal',
                        {
                          'pl-5 pr-0': i === 0,
                        },
                      )}
                    >
                      {i === 0 ? (
                        <QuestionMarkWhite className="h-4 min-w-4" />
                      ) : i === 3 ? (
                        <>
                          {label}
                          <Clock className="clock-blue ml-1.5 h-3 min-w-3" />
                        </>
                      ) : (
                        label
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {dataWalletTransitions.map((item, i) => {
              return (
                <tr
                  key={i}
                  className={cn('text-xs text-secondary', { 'bg-[#00000026]': i % 2 === 0 })}
                >
                  <td className="px-5">
                    <CustomButton
                      variant="default"
                      onClick={() => {}}
                      classNameWrapper="!rounded-[4px] shadow-none !min-w-[26px] h-[26px]"
                      classNameChild=" !rounded-[3px]"
                    >
                      <View className="h-[14px] min-w-4" />
                    </CustomButton>
                  </td>

                  <td className="whitespace-nowrap px-5">
                    <CopyWrapper
                      copyValue={item.signature}
                      className="!flex items-center gap-3 text-blue"
                    >
                      {item.signature} <CopyTransparent className="h-[15px] min-w-[15px]" />
                    </CopyWrapper>
                  </td>

                  <td className="px-5 text-blue"> {item.block}</td>

                  <td className="whitespace-nowrap px-5">{item.time}</td>

                  <td className="px-5">
                    <div className="flex gap-2.5">
                      {item.instructions.map((i) => (
                        <CustomButton
                          key={i}
                          variant="inside-dark"
                          classNameWrapper="!rounded-[4px] h-[30px]"
                          classNameChild="!rounded-[3px] px-1.5"
                        >
                          {i}
                        </CustomButton>
                      ))}
                    </div>
                  </td>

                  <td className="px-5 text-green">
                    <CopyWrapper copyValue={item.by} className="!flex items-center gap-3 text-blue">
                      {item.by} <CopyTransparent className="h-[15px] min-w-[15px]" />
                    </CopyWrapper>
                  </td>

                  <td className="px-5">
                    <div className="flex items-center gap-2.5">
                      <SolanaWithoutBG className="h-[14px] w-[11px]" /> {item.value}
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-5">
                    <div className="flex items-center gap-2.5">
                      <SolanaWithoutBG className="h-[14px] w-[11px]" /> {item.fee}
                    </div>
                  </td>

                  <td className="px-5">
                    <div className="flex items-center gap-1">
                      <ImageWrapper
                        src={'/crypto-icons/pill.png'}
                        width={20}
                        height={20}
                        alt={'program'}
                      />{' '}
                      <SolanaWithoutBG className="h-5 min-w-4" />
                      <SolanaWithoutBG className="h-5 min-w-4" />
                      <CustomButton
                        key={i}
                        variant="inside-dark"
                        classNameWrapper="!rounded-[4px] h-5"
                        classNameChild="!rounded-[3px] px-2"
                      >
                        1+
                      </CustomButton>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </BoxWrapper>
  );
};
