// @flow
import * as React from 'react';
import { cn } from '@/lib';
import { BoxWrapper, CustomButton } from '@/components/shared';
import { SolanaPhantom } from '@/components/shared/svgr';

type Props = {
  className?: string;
};
const SignUp = ({ className }: Props) => {
  return (
    <div className={cn(className, 'mt-6')}>
      <div className="py-8">
        <span className="text-sm text-secondary">Username</span>
        <BoxWrapper
          variant="inside"
          classNameWrapper="mt-2.5 mb-3 h-[50px]"
          classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
        >
          <input type="text" placeholder="Enter username" className="w-full" />
        </BoxWrapper>
        <span className="text-sm text-secondary">Email</span>
        <BoxWrapper
          variant="inside"
          classNameWrapper="mt-2.5 mb-3 h-[50px]"
          classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
        >
          <input type="email" placeholder="Enter email" className="w-full" />
        </BoxWrapper>
        <span className="text-sm text-secondary">Invite code (optional)</span>
        <BoxWrapper
          variant="inside"
          classNameWrapper="mt-2.5 mb-3 h-[50px]"
          classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
        >
          <input type="text" placeholder="Enter invite code" className="w-full" />
        </BoxWrapper>
        <span className="text-sm text-secondary">Password</span>
        <BoxWrapper
          variant="inside"
          classNameWrapper="mt-2.5 mb-2 h-[50px]"
          classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
        >
          <input type="password" placeholder="Enter password" className="w-full" />
        </BoxWrapper>
        <span className="text-sm text-secondary">Confirm password</span>
        <BoxWrapper
          variant="inside"
          classNameWrapper="mt-2.5 mb-2 h-[50px]"
          classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
        >
          <input type="password" placeholder="Enter password" className="w-full" />
        </BoxWrapper>

        <CustomButton
          variant="red"
          classNameWrapper="w-full h-[50px] mt-9 active:!scale-[99%]"
          classNameChild="text-[22px] text-white"
        >
          Sign Up
        </CustomButton>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="mx-4 text-white font-semibold">Or</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <div className="pt-8">
        <button
          className="p-px shadow-main w-full h-[50px] mt-9 active:!scale-[99%] relative cursor-pointer rounded-[10px] opacity-90 transition-opacity hover:opacity-100 active:scale-[97%]"
        >
          <div className="inline">
            <span
              className="bg-purple-500 text-[22px] text-white flex h-full w-full items-center justify-center gap-2 rounded-[9px] py-2">
              <SolanaPhantom /> Solana
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignUp;