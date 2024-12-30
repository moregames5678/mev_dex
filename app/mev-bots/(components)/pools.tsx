'use client';

import { useState } from 'react';
import { BoxWrapper, Checkbox, ImageWrapper, TitleSection } from '@/components/shared';
import { dataPools } from '@/db/data';
import { cn } from '@/lib';

export const Pools = () => {
  const [data, setData] = useState(dataPools);

  const handleChecked = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              checked: !item.checked,
            }
          : item,
      ),
    );
  };

  return (
    <BoxWrapper>
      <TitleSection title="Pools" logo=" " />

      <div className="mt-3 flex justify-between text-sm">
        <span>Pools</span>
        <span>Volume (24h)</span>
      </div>
      <ul className="-ml-5 mt-2.5 w-[calc(100%+40px)]">
        {data.map(({ title, icon, volume, checked }, index) => (
          <li
            key={index}
            className={cn('flex h-10 items-center px-5 text-sm', {
              'bg-[#00000026]': index % 2 === 0,
            })}
          >
            <Checkbox checked={checked} onChange={() => handleChecked(index)} />
            <ImageWrapper src={icon} alt={title} width={24} height={24} className="ml-4" />
            <span className="ml-1.5">{title}</span>
            <span className="ml-auto">{volume}</span>
          </li>
        ))}
      </ul>

      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-5 h-[50px]"
        classNameChild="flex items-center justify-between p-[15px] text-xs"
      >
        <span className="text-magenta">Chosen Pools 24h Volume:</span>
        <span>29.3M</span>
      </BoxWrapper>
    </BoxWrapper>
  );
};
