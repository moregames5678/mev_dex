'use client';

import {
  BoxWrapper,
  Checkbox,
  ImageWrapper,
  TitleSection,
  TooltipQuestion,
} from '@/components/shared';
import { Switch } from '@/components/ui';
import { cn } from '@/lib';

import flashLoadLogo from '../../../public/crypto-icons/flash-loan.png';
import { useState } from 'react';

export const FlashLoad = () => {
  const [isSolendFi, setIsSolendFi] = useState(true);

  return (
    <BoxWrapper>
      <TitleSection
        title="Flash Loan"
        logo={<ImageWrapper src={flashLoadLogo} alt="jito" unoptimized width={24} height={24} />}
      />

      <div className="mt-4 grid grid-cols-3 gap-1">
        <TooltipQuestion title="Enable Flashloan" className="col-span-2" />
        <Switch className="justify-self-end" defaultChecked />
        <p className={cn('yellow-label-common col-span-3 mb-2.5 !leading-[167%]')}>
          Whether to enable flashloan. Note you need to have at least 0.5 SOL in the wallet to
          enable flashloan.
        </p>
      </div>

      <h3 className="text-sm">Flashloan Provider</h3>
      <div className="mt-2.5 flex items-center gap-2">
        <Checkbox checked={isSolendFi} onChange={() => setIsSolendFi(!isSolendFi)} />
        <TooltipQuestion title="Solend.fi" />
      </div>

      <p className={cn('yellow-label-common col-span-3 mt-1.5 !leading-[167%]')}>
        Soland flashloan charges a 0.04% fee based on the amount you borrow
      </p>

      <TooltipQuestion title="Wrap Sol Amount" className="mt-4" />
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-3 h-[50px]"
        classNameChild="flex items-center justify-between p-[5px] pl-4"
      >
        <input type="text" placeholder="0" />
      </BoxWrapper>
      <span className="yellow-label-common">Default: 0</span>
    </BoxWrapper>
  );
};
