import React from 'react';
import {
  Balance,
  Status,
  SettingSave,
  Strategy,
  Setting,
  Bot,
  Jito,
  Attacks,
  Pools,
  FlashLoad,
} from '../../(components)';
import { SlotInfo } from '@/app/dashboard/(components)';
import JupiterApi from '../../(components)/jupiter-api';

export default function page() {
  return (
    <div className="flex flex-col gap-[30px]">
      <SlotInfo />
      <Balance />
      <SettingSave title="MevDex Bot Settings" />
      <div className="flex gap-[30px]">
        <div className="flex w-[392px] flex-col gap-[30px]">
          <Strategy />
          <Status title="Node Status" secondTitle="Custom Node" enableApiInput />
          <Setting title="RDC Settings" />
          <Bot />
        </div>
        <div className="flex w-[500px] flex-col gap-[30px]">
          <JupiterApi />
          <Jito />
        </div>
        <div className="flex w-[288px] flex-col gap-[30px]">
          <Attacks smartAI />
          <Pools />
          <FlashLoad />
        </div>
      </div>
    </div>
  );
}
