'use client';

import { useState } from 'react';
import {
  BoxWrapper,
  Checkbox,
  ImageWrapper,
  TitleSection,
  TooltipQuestion,
} from '@/components/shared';
import { Switch } from '@/components/ui';
import { cn } from '@/lib';

import { default as BorderJito } from '../../../public/border-gradient/jito.svg?url';
import jitoLogo from '../../../public/crypto-icons/jito.png';
import { dataJito } from '@/db/data';

export const Jito = () => {
  const [data, setData] = useState(dataJito);

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
      <TitleSection
        title="Jito"
        logo={<ImageWrapper src={jitoLogo.src} alt="jito" unoptimized width={24} height={24} />}
      />

      <div className="mt-4 grid grid-cols-3">
        <TooltipQuestion title="Enable Jito" className="col-span-2" />
        <Switch className="justify-self-end" defaultChecked />
        <span className={cn('yellow-label-common col-span-3 mb-2.5')}>Default: true</span>
        <TooltipQuestion title="Block Engines" className="col-span-2" />
        <Switch className="justify-self-end" defaultChecked />
      </div>

      <div className="relative mt-3 h-[175px] min-w-[459px]">
        <BorderJito className="absolute min-h-[175px] min-w-[459px]" />

        <ul className="relative flex flex-col gap-[15px] p-[15px]">
          {data.map((data) => (
            <li key={data.name} className="flex items-center gap-2">
              <ImageWrapper src={data.image} alt="jito" unoptimized width={20} height={20} />
              <span className="leading-none">{data.name}</span>

              <Checkbox
                checked={data.checked}
                className="ml-auto"
                onChange={() => handleChecked(data.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <span className="yellow-label-common">
        Config which block engines to send to for jito transactions.
      </span>

      <TooltipQuestion title="Max Tip" className="mt-4 text-secondary" />
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-3 h-[50px]"
        classNameChild="flex items-center justify-between p-[5px] pl-4"
      >
        <input type="text" placeholder="0" />
      </BoxWrapper>
      <span className="yellow-label-common">Default: 0</span>

      <div className="mt-4 grid grid-cols-3 gap-1.5">
        <TooltipQuestion title="Block Engines Tip" className="col-span-3 mb-0.5 text-secondary" />
        <span className="col-span-2 text-sm">Use Separate Tip</span>
        <Switch className="justify-self-end" defaultChecked />
        <span className="col-span-2 text-sm">Use Different Tx</span>
        <Switch className="justify-self-end" defaultChecked />
        <span className="col-span-2 text-sm">Use Different Tip Account</span>
        <Switch className="justify-self-end" defaultChecked />
      </div>
    </BoxWrapper>
  );
};
