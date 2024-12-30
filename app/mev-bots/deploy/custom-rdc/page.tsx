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
  TransactionModeCard,
} from '../../(components)';
import { SlotInfo } from '@/app/dashboard/(components)';
import JupiterApi from '../../(components)/jupiter-api';

export default function page() {
  return (
    <div className="flex flex-col gap-[30px]">
      <SlotInfo />
      <Balance />
      <SettingSave title="Node Bot Settings" />
      <TransactionModeCard />
      <div className="flex gap-[30px]">
        <div className="flex w-[392px] flex-col gap-[30px]">
          <Strategy advanceAttacks={false} jitoOnly />
          <Status title="Node Status" secondTitle="MevDex RPC Shared-Node" />
          <Setting title="RDC Settings" />
          <Bot enableJitoRpc={false} rpcApi={false} />
        </div>
        <div className="flex w-[500px] flex-col gap-[30px]">
          <JupiterApi chart={false} secondTitle="Intermedium Mints Configuration" nodeBot={true} />
          <Jito />
        </div>
        <div className="flex w-[288px] flex-col gap-[30px]">
          <Attacks />
          <Pools />
          <FlashLoad />
        </div>
      </div>
    </div>
  );
}
