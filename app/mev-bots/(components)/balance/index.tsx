'use client';

import { ChangeEvent, useState } from 'react';
import { BoxWrapper, Checkbox, CustomButton } from '@/components/shared';
import { ButtonWithdraw, Solana, UpdateHorizontalColors } from '@/components/shared/svgr';
import { cn } from '@/lib';

const costSol = 210.44;
const balanceUsdt = 752.32;
const balanceSOL = balanceUsdt / costSol;

export const Balance = () => {
  const [percentInput, setPercentInput] = useState(50);
  const [isDeposit, setDeposit] = useState(true);
  const [input, setInput] = useState<string>(((balanceSOL / 100) * percentInput).toFixed(5));

  const handlePercentChange = (value: number) => {
    setPercentInput(value);
    setInput(((balanceSOL / 100) * value).toFixed(5));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^.\d]/g, '');
    setInput(value);
  };

  return (
    <BoxWrapper as={'section'} classNameChild="flex items-center">
      <div className="w-full">
        <h2 className="mb-2.5 text-sm text-secondary">
          {isDeposit ? 'I pay / My available Balance' : 'Bot account Balance'}
        </h2>
        {isDeposit ? <InputOne input={input} /> : <InputTwo />}

        <BoxWrapper
          variant="inside"
          classNameChild="py-[3px] px-4 flex justify-between items-center"
          classNameWrapper="mt-[15px]"
        >
          <Solana />
          <input
            type="string"
            className="ml-3 mr-auto w-32 text-sm"
            value={input}
            placeholder="0.00000"
            onChange={(e) => handleInputChange(e)}
          />
          <div>
            {[25, 50, 75, 100].map((item) => (
              <CustomButton
                key={item}
                classNameWrapper="w-[42px] h-[42px]"
                classNameChild="text-xs text-white"
                variant={item === percentInput ? 'magenta' : 'ghost'}
                onClick={() => handlePercentChange(item)}
              >
                {item}%
              </CustomButton>
            ))}
          </div>
        </BoxWrapper>
      </div>

      <BoxWrapper
        variant="inside"
        classNameWrapper="min-w-[52px] h-[52px] mx-[43px] mt-7"
        classNameChild="flex items-center justify-center"
      >
        <CustomButton
          classNameWrapper="w-[40px] h-[40px] !rounded-sm !p-px"
          classNameChild="flex items-center justify-center !rounded-[7px]"
          onClick={() => setDeposit((prev) => !prev)}
        >
          <UpdateHorizontalColors className="min-h-6 min-w-6" />
        </CustomButton>
      </BoxWrapper>

      <div className="w-full">
        <h2 className="mb-2.5 text-sm text-secondary">
          {' '}
          {isDeposit ? 'Bot account deposit' : 'Withdraw to My Wallet'}
        </h2>
        {isDeposit ? <InputTwo /> : <InputOne input={input} />}

        <div className="mt-4 flex flex-col gap-2">
          <Checkbox
            label={isDeposit ? 'We charge 10% commission from profit only' : 'Zero withdrawal  fee'}
            variant="second"
            classNameLabel="!ml-[14px] text-sm text-pink-hot"
            checked
          />
          <Checkbox
            label={isDeposit ? 'Zero deposit fee' : 'We charge 10% commission from profit only'}
            variant="second"
            classNameLabel="!ml-[14px] text-sm text-pink-hot"
            checked
          />
        </div>
      </div>

      <div className="ml-7 mt-5 flex flex-col gap-5">
        <CustomButton
          variant={'magenta'}
          classNameWrapper={cn('w-[268px]', {
            'order-last': !isDeposit,
          })}
          classNameChild="text-[22px] !py-[9px]"
        >
          {isDeposit ? 'Deposit' : 'Withdraw'}
        </CustomButton>

        <button className="relative block h-[52px] w-[268px]">
          <ButtonWithdraw className="h-[52px] w-[268px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[22px] text-[#5e5e5e]">
            {isDeposit ? 'Withdraw' : 'Deposit'}
          </div>
        </button>
      </div>
    </BoxWrapper>
  );
};

const InputOne = ({ input = '0' }: { input?: string }) => {
  const SOL = (balanceSOL - Number(input)).toFixed(5);
  const usdt = (balanceUsdt - Number(input) * costSol).toFixed(5);

  return (
    <BoxWrapper variant="inside" classNameChild="py-1.5 px-4 flex justify-between items-center">
      <Solana />
      <div className="ml-3 mr-auto">
        <div className="text-sm">Solana</div>
        <div className="text-xs text-green">{SOL} SOL</div>
      </div>
      <div>
        <div className="text-right text-sm">{usdt} USDT</div>
        <div className="text-right text-xs text-green">{SOL} SOL</div>
      </div>
    </BoxWrapper>
  );
};

const InputTwo = () => {
  return (
    <BoxWrapper variant="inside" classNameChild="py-1 px-4 flex justify-between items-center">
      <div>
        <div>0.3 SOl</div>
        <div className="text-xs text-pink-hot">Fee: 0.03 SOL</div>
      </div>
      <div>
        <div className="text-right font-bold text-green">$ 340.21</div>
        <div className="text-right text-xs text-secondary">1 SOL = {costSol} USD</div>
      </div>
    </BoxWrapper>
  );
};
