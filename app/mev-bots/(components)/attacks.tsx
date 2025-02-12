import React, { cloneElement } from 'react';
import { BoxWrapper, TitleSection } from '@/components/shared';
import { BackRunning, FrontRunning, Sandwich, SmartIA } from '@/components/shared/svgr';
import { Switch } from '@/components/ui';

export const dataAttacks = [
  {
    title: 'FrontRunning',
    icon: <FrontRunning />,
    status: false,
  },
  {
    title: 'Sandwich',
    icon: <Sandwich />,
    status: false,
  },
  {
    title: 'BackRunning',
    icon: <BackRunning />,
    status: false,
  },
  {
    title: 'Smart-AI Switch',
    icon: <SmartIA />,
    status: false,
  },
];

type Props = {
  smartAI?: boolean;
};

export const Attacks = ({ smartAI = false }: Props) => {
  const dataSlice = smartAI ? dataAttacks : dataAttacks.slice(0, 3);

  return (
    <BoxWrapper>
      <TitleSection title="Attacks" logo=" " />

      <ul className="mt-4">
        {dataSlice.map(({ title, icon: Component, status }, index) => (
          <li key={index} className="mt-4 flex items-center gap-2.5">
            {cloneElement(Component, { className: 'min-h-8 min-w-8' })}
            <span className="text-sm">{title}</span>
            <Switch className="ml-auto" checked={status} />
          </li>
        ))}
      </ul>
    </BoxWrapper>
  );
};
