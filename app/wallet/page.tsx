import React from 'react';
import { WrapperAndTab } from './(components)/wrapper-and-tab';
import { SlotInfo } from '../dashboard/(components)';
import { TableWalletTransaction } from '@/components/shared';

const Wallet = () => {
  return (
    <div>
      <SlotInfo />
      <WrapperAndTab />
      <TableWalletTransaction />
    </div>
  );
};

export default Wallet;
