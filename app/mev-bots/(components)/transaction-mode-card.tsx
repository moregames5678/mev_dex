'use client';

import { useState } from 'react';
import { BoxWrapper } from '@/components/shared';
import { IValueTab, Tabs } from '@/components/shared/tabs';
import { transactionModeCardTabs } from '@/constants';

export const TransactionModeCard = () => {
  const [tabValue, setTabValue] = useState<IValueTab>(transactionModeCardTabs[0]);

  const handleTabChange = (value: IValueTab) => {
    setTabValue(value);
  };

  return (
    <BoxWrapper classNameChild="flex flex-col gap-1 !pt-[30px] !pb-3">
      <Tabs
        typeButton="outline-pink"
        dataValues={transactionModeCardTabs}
        value={tabValue}
        classNameBtnWrapper="!rounded-[7px]"
        classNameBtnChild="!py-1 !px-8 !rounded-[6px]"
        onClick={handleTabChange}
      />
      <p className="yellow-label-common">Description: {tabValue.value}</p>
    </BoxWrapper>
  );
};
