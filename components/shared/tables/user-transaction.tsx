'use client';

import React from 'react';
import { dataUserTransaction } from '@/db/data';
import { sortData } from '@/lib';
import { BackRunning, FrontRunning, Sandwich, Solana, TableArrows, TimeRefresh } from '../svgr';
import { ImageWrapper } from '../wrappers';
import { CustomButton } from '../custom-button';
import { cn } from '@/lib/utils';

const sortValues = [
  { key: 'id', label: '#' },
  { key: 'time', label: 'Time' },
  { key: 'tokenIcon', label: 'Token' },
  { key: 'cost', label: 'Cost' },
  { key: 'revenue', label: 'Revenue' },
  { key: 'profit', label: 'Profit' },
  { key: 'block', label: 'Block' },
  { key: 'delay', label: 'Delay' },
  { key: 'dex', label: 'Dex' },
  { key: 'type', label: 'Type' },
];

type SortKey = (typeof sortValues)[number]['key'];

export const TableUserTransaction: React.FC = () => {
  const [sort, setSort] = React.useState<'asc' | 'desc'>('asc');
  const [isSortData, setSortData] = React.useState(dataUserTransaction);

  const handleButtonSort = (index: number) => {
    const fieldToSortBy = sortValues[index]['key'] as SortKey;
    // @ts-expect-error types are not matching
    const sortedDate = sortData(dataUserTransaction, fieldToSortBy, sort);
    setSortData(sortedDate);

    if (sort === 'asc') {
      setSort('desc');
    } else {
      setSort('asc');
    }
  };

  return (
    <div className="relative mt-7 overflow-x-auto">
      <table className="h-[340px] w-full">
        <thead>
          <tr>
            {sortValues.map(({ label, key }, i) => {
              return (
                <th key={key}>
                  <div
                    className={cn(
                      'mb-4 flex cursor-pointer items-center px-6 text-sm font-normal',
                      {
                        'pl-5 pr-0': i === 0,
                      },
                    )}
                    onClick={() => handleButtonSort(i)}
                  >
                    {label}
                    <div>
                      <TableArrows />
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {isSortData.map((item, i) => {
            return (
              <tr
                key={i}
                className={cn('text-xs text-secondary', { 'bg-[#00000026]': i % 2 === 0 })}
              >
                <td className="px-6">#{item.id}</td>

                <td className="whitespace-nowrap px-6">
                  <div className="flex items-center gap-2.5">
                    <TimeRefresh />
                    {item.time}
                  </div>
                </td>

                <td className="px-6">
                  <div className="flex items-center gap-px">
                    {i % 2 === 0 ? (
                      <Solana width={16} height={16} />
                    ) : (
                      <>
                        <Solana width={16} height={16} />
                        <Solana width={16} height={16} />
                      </>
                    )}
                    <ImageWrapper
                      src={item.tokenIcon}
                      alt={`token ${item.id}`}
                      width={16}
                      height={16}
                    />
                  </div>
                </td>

                <td className="px-6 text-[#b056ff]">${item.cost}</td>

                <td className="px-6 text-blue">${item.revenue}</td>

                <td className="px-6 text-green">${item.profit}</td>

                <td className="px-6">
                  <div className="flex items-center gap-2.5">
                    {item.block}{' '}
                    <span className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-[#14f1951a]">
                      <span className="text-green"> {item.delay}</span>
                    </span>
                  </div>
                </td>

                <td className="whitespace-nowrap px-6">
                  Time spent: <span className="text-green">{item.metadata.timeSpent}</span> <br />
                  Jupiter Quote time:{' '}
                  <span className="text-green">{item.metadata.jupiterQuoteTime}</span>
                </td>

                <td className="px-6">
                  <div className="flex items-center gap-2.5">
                    <ImageWrapper src={item.dex[1]} alt={item.dex[1]} width={24} height={24} />
                    {item.dex[0]}
                  </div>
                </td>

                <td className="px-6">
                  <CustomButton
                    variant="secondary"
                    onClick={() => {}}
                    classNameWrapper="!rounded-[4px] shadow-none"
                    classNameChild="pl-2 pr-5 !rounded-[3px]"
                  >
                    <ButtonType type={item.type} />
                  </CustomButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const ButtonType = ({ type }: { type: string }) => {
  switch (type) {
    case 'FrontRunning':
      return (
        <>
          <FrontRunning /> <span className="text-blue">{type}</span>
        </>
      );
    case 'BackRunning':
      return (
        <>
          <BackRunning /> <span className="text-green">{type}</span>
        </>
      );
    case 'Sandwich':
      return (
        <>
          <Sandwich /> <span className="text-[#b056ff]">{type}</span>
        </>
      );
    default:
      return <span>{type}</span>;
  }
};
