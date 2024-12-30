'use client';

import { BoxWrapper, CustomButton, TitleSection, TooltipQuestion } from '@/components/shared';
import { UpdateCircle } from '@/components/shared/svgr';
import { Switch } from '@/components/ui';
import { cn } from '@/lib';
import { useState } from 'react';

type Props = {
  rpcApi?: boolean;
  enableJitoRpc?: boolean;
};

export const Bot = ({ rpcApi = true, enableJitoRpc = true }: Props) => {
  const [isSkipSameOpportunity, setSkipSameOpportunity] = useState(false);
  const [isPayFeeWithProfit, setPayFeeWithProfit] = useState(false);

  return (
    <BoxWrapper>
      <TitleSection title="Bot" />

      <TooltipQuestion title="Auto Restart" className="mt-4 text-secondary" />
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-3 h-[50px]"
        classNameChild="flex items-center justify-between p-[5px] pl-4"
      >
        <input type="text" placeholder="0-60 min" />
      </BoxWrapper>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <TooltipQuestion title="Enable Simulation" />
        <Switch className="justify-self-end" defaultChecked />
        {enableJitoRpc && (
          <>
            <TooltipQuestion title="Enable Jito RPC" />
            <Switch className="justify-self-end" />
          </>
        )}
      </div>

      {rpcApi && (
        <BoxWrapper
          variant="inside"
          classNameWrapper={cn('mt-3 h-[50px]')}
          classNameChild="flex items-center justify-between p-[5px] pl-4"
        >
          <input type="text" placeholder="Enter RPC API" />
          <CustomButton classNameWrapper="w-[40px] h-[40px]">
            <UpdateCircle className="min-h-5 min-w-5" />
          </CustomButton>
        </BoxWrapper>
      )}

      <TooltipQuestion title="Max Compute Time" className="mt-4" />
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-3 h-[50px]"
        classNameChild="flex items-center justify-between p-[5px] pl-4"
      >
        <input type="text" placeholder="400 ms" />
      </BoxWrapper>
      <span className="yellow-label-common">Default: 400</span>

      <div className="mt-4 grid grid-cols-3">
        <TooltipQuestion title="Skip Same Opportunity" className="col-span-2" />
        <Switch
          className="justify-self-end"
          onCheckedChange={() => setSkipSameOpportunity((prev) => !prev)}
          checked={isSkipSameOpportunity}
        />
        <BoxWrapper
          variant="inside"
          classNameWrapper={cn('mt-3 h-[50px] w-full col-span-3', {
            hidden: !isSkipSameOpportunity,
          })}
          classNameChild="flex items-center justify-between p-[5px] pl-4"
        >
          <input type="text" placeholder="" defaultValue={'400'} />
        </BoxWrapper>
        <span className={cn('yellow-label-common col-span-3 mb-2.5')}>
          {!isSkipSameOpportunity ? 'Default: 400' : ''}
        </span>
        <TooltipQuestion title="Pay Fee With Profit" className="col-span-2" />
        <Switch
          className="justify-self-end"
          onCheckedChange={() => setPayFeeWithProfit((prev) => !prev)}
          checked={isPayFeeWithProfit}
        />
        <BoxWrapper
          variant="inside"
          classNameWrapper={cn('mt-3 h-[50px] w-full col-span-3', {
            hidden: !isPayFeeWithProfit,
          })}
          classNameChild="flex items-center justify-between p-[5px] pl-4"
        >
          <input type="text" placeholder="" defaultValue={'400'} />
        </BoxWrapper>
        <span className={cn('yellow-label-common col-span-3')}>
          {!isPayFeeWithProfit ? 'Default: 400' : ''}
        </span>
      </div>
    </BoxWrapper>
  );
};
