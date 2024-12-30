'use client';

import * as React from 'react';
import { BoxWrapper, Tabs, TitleSection } from '@/components/shared';
import { TableArrows } from '@/components/shared/svgr';
import { Switch } from '@/components/ui';

import { default as BorderStrategy } from '../../../public/border-gradient/strategy.svg?url';
import { IValueTab } from '@/components/shared/tabs';
import { cn } from '@/lib';

type Props = {
  advanceAttacks?: boolean;
  jitoOnly?: boolean;
};

export const Strategy = ({ advanceAttacks = true, jitoOnly = false }: Props) => {
  const [tabValue, setTabValue] = React.useState({ label: 'Spam' });
  const [isActiveSwitch, setIsActiveSwitch] = React.useState(advanceAttacks);
  const [isAuto, setAuto] = React.useState(false);

  const handleSwitchChange = () => {
    setIsActiveSwitch(!isActiveSwitch);
  };

  const handleTabChange = (value: IValueTab) => {
    setTabValue(value);
    setAuto(false);
  };

  return (
    <BoxWrapper as="section">
      <TitleSection title="Strategy" logo=" " />
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm">Jito Only</span> <Switch checked={jitoOnly} />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm">Advance Attacks</span>{' '}
        <Switch checked={isActiveSwitch} onCheckedChange={handleSwitchChange} />
      </div>

      {isActiveSwitch && (
        <div className="relative mt-5 p-2.5">
          <BorderStrategy className="absolute left-0 top-0 min-h-[160px] min-w-[352px]" />
          <p className="text-xs font-light leading-[167%]">
            This strategy sends transactions through both jito and spam, and you usually when using
            SPAM, failed transaction is a big part of your cost. You usually want to either set{' '}
            <span className="text-yellow-amber">SIMULATION=true</span>, or have{' '}
            <span className="text-yellow-amber">SKIP PREFLIGHT = false</span> to reduce the failed
            transactions, and figuring out a good{' '}
            <span className="text-yellow-amber">PRIORITY FEE PERCENTILE</span> to use in your{' '}
            <span className="text-yellow-amber">BASE MINTS</span> based on your setup.
          </p>
        </div>
      )}

      <BoxWrapper
        variant="inside"
        as={'label'}
        classNameWrapper="mt-5 block cursor-pointer"
        classNameChild="text-sm flex items-center justify-between !px-[15px] py-[14px]"
      >
        <span>Slippage:</span>
        <input type="number" />
        <button
          className={cn('flex items-center gap-2.5', { 'text-magenta': isAuto })}
          onClick={() => setAuto(true)}
        >
          Auto <TableArrows className="min-h-6 min-w-4" />
        </button>
      </BoxWrapper>

      {isActiveSwitch && (
        <Tabs
          typeButton="outline-pink"
          dataValues={[{ label: 'Spam' }, { label: 'Catch-all' }, { label: 'High free spam' }]}
          value={tabValue}
          classNameWrapper="mt-5 !w-full"
          classNameBtnWrapper="!p-px"
          classNameBtnChild="!py-1 !px-[17px]"
          onClick={handleTabChange}
          disabled={isAuto}
        />
      )}
    </BoxWrapper>
  );
};
