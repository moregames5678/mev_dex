"use client"
import { BoxWrapper } from '@/components/shared';
import { SolanaWithoutBG, UpdateCircle } from '@/components/shared/svgr';
import { useUserData } from '@/hooks/useUserData';

type Props = {
  crypto?: number;
  balance?: number;
};

export const Balance = ({ crypto = 0, balance = 0 }: Props) => {
    const userData = useUserData();
  
  return (
    <>
      <span className="text-sm text-secondary">Your Trading Balance</span>
      <BoxWrapper
        classNameWrapper="mt-2 !rounded-[8px]"
        classNameChild="!rounded-[7px] !p-[15px] flex justify-between items-center"
      >
        <div className="flex items-center gap-[14px]">
          <SolanaWithoutBG className="h-[19px] min-w-6" />{' '}
          <div className="flex items-end leading-none">
            <span className="text-[32px] font-medium">{userData?.balance}</span>
            <span className="relative -top-[3px] ml-0.5 text-green">/ $ {balance}</span>
          </div>
        </div>

        <BoxWrapper
          as={'button'}
          variant="inside"
          classNameWrapper="w-[40px] h-[40px] !rounded-[6px] focus:outline-none active:scale-[97%]"
          classNameMiddle="!rounded-[5px]"
          classNameChild="flex items-center justify-center  !rounded-[4px]"
        >
          <UpdateCircle className="min-h-5 min-w-5" />
        </BoxWrapper>
      </BoxWrapper>
    </>
  );
};
