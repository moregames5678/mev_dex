'use client';

import { useState } from 'react';
import { BoxWrapper, Tabs } from '@/components/shared';
import { Balance } from './balance';
import { ButtonVariant } from '@/components/shared/custom-button';
import { Deposit } from './deposit';
import { Withdrawal } from './withdrawal';
import { Buy } from './buy';

interface IValueTab {
  label: string;
  value?: string;
  variant?: ButtonVariant;
  component?: React.ReactNode;
}

const tabValues: IValueTab[] = [
  { label: 'Deposit', variant: 'outline-green', component: <Deposit /> },
  { label: 'Withdrawal', variant: 'outline-red', component: <Withdrawal /> },
  { label: 'Buy Solana', variant: 'outline-sol', component: <Buy /> },
];

export const WrapperAndTab = () => {
  const [tabValue, setTabValue] = useState(tabValues[0]);

  const handleTabChange = (value: IValueTab) => {
    setTabValue(value);
  };

  return (
    <BoxWrapper classNameWrapper="w-[606px] mx-auto mt-[30px]" classNameChild="!p-[30px]">
      <h2 className="text-center text-[32px] font-semibold">{tabValue.label}</h2>
      <Balance />

      <Tabs
        typeButton={tabValue.variant}
        dataValues={tabValues}
        value={tabValue}
        classNameWrapper="mt-[30px] !w-full"
        classNameBtnWrapper="!rounded-[6px]"
        classNameBtnChild="!py-1 !px-[50px] !rounded-[5px]"
        onClick={handleTabChange}
      />

      {tabValue.component}
    </BoxWrapper>
  );
};
