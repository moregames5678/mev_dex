import { ChangeEvent, useState } from 'react';
import { BoxWrapper, Checkbox, CustomButton } from '@/components/shared';
import { cn } from '@/lib';
import { Solana } from '@/components/shared/svgr';
import { ModalWithdraw } from './modal-withdraw';

interface Props {
  className?: string;
}

const costSol = 210.44;
const balanceUsdt = 752.32;
const balanceSOL = balanceUsdt / costSol;

export const Withdrawal = ({ className }: Props) => {
  const [isSaveWallet, setSaveWallet] = useState(true);

  const [percentInput, setPercentInput] = useState(50);
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
    <div className={cn(className, 'mt-6')}>
      <span className="text-sm text-secondary">Withdraw</span>
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-2.5 mb-4"
        classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
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

      <span className="text-sm text-secondary">To wallet</span>
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-2.5 h-[50px]"
        classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
      >
        <input type="text" placeholder="Enter wallet" />
      </BoxWrapper>

      <Checkbox
        label="Save wallet"
        variant="second"
        checked={isSaveWallet}
        onChange={() => setSaveWallet(!isSaveWallet)}
        className="mt-5"
        classNameLabel="!ml-[14px] text-sm text-pink-hot"
      />

      <ModalWithdraw />
    </div>
  );
};
