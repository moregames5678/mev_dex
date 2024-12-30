'use client';

import { useState } from 'react';
import { cn } from '@/lib';
import { ImageWrapper } from '../wrappers';
import { Update } from '../svgr';
import { LineBarProgress, LineProgressSmall } from '../charts';
import { IDataSetting } from '@/types';
import { Checkbox } from '../checkbox';

type Props = {
  data: IDataSetting[];
};

export const TableSettings = ({ data: initialData }: Props) => {
  const [data, setData] = useState(initialData);

  const handleChecked = (id: number) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : { ...item, checked: false },
      ),
    );
    alert('You can only choose one server');
  };

  return (
    <div className="relative mt-7 overflow-x-auto">
      <table className="h-[230px] w-full">
        <thead>
          <tr>
            {['Pool', 'Ping', 'Server Load', 'logo'].map((label, i) => {
              return (
                <th key={label}>
                  <div
                    className={cn(
                      'mb-2 flex cursor-pointer items-center px-3 text-sm font-normal',
                      { 'pl-5 pr-0': i === 0 },
                      { 'pr-0': i === 2 },
                    )}
                  >
                    {i === 3 ? <Update className="rotate-90" /> : label}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((item: IDataSetting, i: number) => {
            return (
              <tr key={i} className={cn('text-sm', { 'bg-[#00000026]': i % 2 === 0 })}>
                <td className={cn('whitespace-nowrap px-3 pl-5')}>
                  <div className="flex items-center gap-2.5">
                    <ImageWrapper
                      src={item.flag}
                      alt={`flag - ${item.pool}`}
                      width={18}
                      height={10}
                      style={{ width: '18px', height: '10px' }}
                      unoptimized
                    />
                    {item.pool}
                  </div>
                </td>

                <td className="whitespace-nowrap px-3">
                  <LineBarProgress value={item.ping} variant="small" />
                  <div className="ml-px mt-1 text-xs leading-none text-blue">{item.ping} MS</div>
                </td>

                <td className="px-3">
                  <LineProgressSmall value={item.ping} />
                </td>

                <td className="px-3 pr-5">
                  <Checkbox checked={item.checked} onChange={() => handleChecked(item.id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
