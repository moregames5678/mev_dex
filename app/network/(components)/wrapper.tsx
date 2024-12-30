'use client';

import React, { useState } from 'react';
import { NetworkTabs } from './tabs';
import { IValueTab } from '@/components/shared/tabs';
import { transactionNetworkTabs } from '@/constants';
import { SandwichMonitor } from './sandwich-monitor';
import { PerformanceOfTypes, SlotInfo } from '@/app/dashboard/(components)';
import { TransactionPerformance } from './transaction-performance';
import { WalletAddress } from './wallet-address';
import { WalletPerformanceCards } from './wallet-performance-cards';
import { TableQueryResultsWallet } from '@/components/shared/tables/query-results-wallet';

export const Wrapper = () => {
  const [tabValue, setTabValue] = useState<IValueTab>(transactionNetworkTabs[0]);

  const handleTabChange = (value: IValueTab) => {
    setTabValue(value);
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <SlotInfo />
      <NetworkTabs onChange={handleTabChange} value={tabValue} />

      {tabValue.label === transactionNetworkTabs[0].label && (
        <div className="flex gap-[30px]">
          <SandwichMonitor className="w-[710px]" />
          <div className="flex w-[500px] flex-col gap-[30px]">
            <PerformanceOfTypes className="h-fit" />
            <TransactionPerformance className="w-[500px]" />
          </div>
        </div>
      )}

      {tabValue.label === transactionNetworkTabs[1].label && (
        <>
          <WalletAddress />
          <WalletPerformanceCards />
          <TableQueryResultsWallet />
        </>
      )}
    </div>
  );
};
