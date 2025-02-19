"use client"
import { ChangeEvent, useState, useEffect } from 'react';
import { BoxWrapper, Checkbox, CustomButton } from '@/components/shared';
import { cn } from '@/lib';
import { Solana } from '@/components/shared/svgr';
import { ModalWithdraw } from './modal-withdraw';
import { useUserData } from '@/hooks/useUserData';
import { useWithdraw } from '@/hooks/useWithdrawal';


interface Props {
  className?: string;
};

export const Withdrawal = ({ className }: Props) => {
  const [isSaveWallet, setSaveWallet] = useState<boolean>(true);
  const [wallet, setWallet] = useState<string>('');

  const [percentInput, setPercentInput] = useState(100);
  const userData = useUserData();
  const [input, setInput] = useState<string>(((userData?.balance / 100) * percentInput).toFixed(5));

  const { withdraw, error } = useWithdraw();

  const handleWithdraw = async () => {    
    await withdraw(input, wallet, isSaveWallet);
    if (!error) {
    }
  };
  


  const handlePercentChange = (value: number) => {
    setPercentInput(value);
    setInput(((userData?.balance / 100) * value).toFixed(5));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^.\d]/g, '');
    setInput(value);
  };

    useEffect(() => {
      setInput(userData?.balance)
    }, [userData?.balance]);

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
        <input type="text" value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder="Enter wallet" />
      </BoxWrapper>

      <Checkbox
        label="Save wallet"
        variant="second"
        checked={isSaveWallet}
        onChange={() => setSaveWallet(!isSaveWallet)}
        className="mt-5"
        classNameLabel="!ml-[14px] text-sm text-pink-hot"
      />

      <ModalWithdraw handleWithdraw={handleWithdraw}/>
    </div>
  );
};
