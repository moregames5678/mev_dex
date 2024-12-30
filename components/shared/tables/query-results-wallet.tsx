'use client';

import React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { BoxWrapper, ImageWrapper } from '../wrappers';
import { CustomButton } from '../custom-button';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { dataQueryResultsWallet, titleQueryResultsWallet } from '@/db/data';

import bgLogo from '../../../public/logo-box.png';

export const TableQueryResultsWallet: React.FC = () => {
  const [position, setPosition] = React.useState('5');

  return (
    <BoxWrapper as={'section'} classNameChild="!p-0 overflow-hidden" classNameWrapper="mt-[30px]">
      <div className="flex items-center justify-between p-5 pb-0 text-xs">
        <h2 className="text-base font-medium">Query Results Solana Wallet PNL Table</h2>

        {/*  USER PANEL  */}
        <div className="flex items-center gap-[30px]">
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
      <div className="relative mt-7 overflow-x-auto overflow-y-hidden">
        <ImageWrapper
          src={bgLogo}
          alt="logo"
          className="absolute left-1/2 top-[52px] -translate-x-1/2 opacity-[17%]"
          unoptimized
        />
        <table className="relative h-[340px] w-full">
          <thead>
            <tr>
              {titleQueryResultsWallet.map((label, i) => {
                return (
                  <th key={i}>
                    <div
                      className={cn(
                        'mb-4 flex h-10 cursor-pointer items-end pl-5 pr-1 text-sm font-normal',
                        {
                          'whitespace-nowrap': i < 7,
                        },
                      )}
                    >
                      {i === 8 ? (
                        <span className="text-left">
                          <div>Price</div>
                          <div className="whitespace-nowrap">Sold Last</div>
                        </span>
                      ) : i === 13 ? (
                        <span className="text-left">
                          <div className="whitespace-nowrap">
                            Buy First
                            <div>Time</div>
                          </div>
                        </span>
                      ) : (
                        <span className={cn('text-left')}>{label}</span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {dataQueryResultsWallet.map((item, i) => {
              return (
                <tr
                  key={i}
                  className={cn('text-xs text-secondary', { 'bg-[#00000026]': i % 2 === 0 })}
                >
                  <td className="whitespace-nowrap pl-5 pr-1">
                    <Link href="/network" className="text-[#dc1fff] underline">
                      {item.token}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap pl-5 pr-1">{item.isPump ? 'PumpFun' : '-'}</td>
                  <td className="whitespace-nowrap pl-5 pr-1 ">
                    <Link href="/network" className="text-[#7067ff] underline">
                      {item.gmgn}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap pl-5 pr-1">{item.usdBuys}</td>
                  <td className="whitespace-nowrap pl-5 pr-1">{item.usdSells}</td>
                  <td className="whitespace-nowrap pl-5 pr-1 text-green">{item.usdPnl}</td>
                  <td className="whitespace-nowrap pl-5 pr-1 text-green">{item.roiReal}</td>
                  <td className="whitespace-nowrap pl-5 pr-1">{item.tokenBalance}</td>
                  <td className="whitespace-nowrap pl-5 pr-1">{item.priceSoldLast}</td>
                  <td className="whitespace-nowrap pl-5 pr-1">{item.tokenUsd}</td>
                  <td className="whitespace-nowrap pl-5 pr-1 text-green">{item.totalPnl}</td>
                  <td className="whitespace-nowrap pl-5 pr-1">{item.txnsBuy}</td>
                  <td className="whitespace-nowrap pl-5 pr-1">{item.txnsSell}</td>
                  <td className="pl-5 pr-1">{item.buyFirstTime}</td>
                  <td className="pl-5 pr-1">{item.sellTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </BoxWrapper>
  );
};
