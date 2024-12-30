import { BoxWrapper, TableUserTransaction } from '@/components/shared';
import React from 'react';

export const UserTransaction = () => {
  return (
    <BoxWrapper as={'section'} classNameChild="!p-0 overflow-hidden">
      <div className="flex items-center justify-between p-5 pb-0">
        <h2 className="font-semibold">User Transaction Live Stream</h2>
        <p className="text-sm text-green">
          1 - 5 <span className="text-[#aeb9e1]">of 256</span>
        </p>
      </div>
      <div className="mt-3 h-px bg-gd-divider opacity-[32%]" />

      <TableUserTransaction />
    </BoxWrapper>
  );
};
