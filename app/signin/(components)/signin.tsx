// @flow

import * as React from 'react';
import { cn } from '@/lib';
import { BoxWrapper, Checkbox, CustomButton } from '@/components/shared';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SolanaPhantom } from '@/components/shared/svgr';
import { useAuth } from '@/hooks/useAuth';


type Props = {
  className?: string;
};

export const SignIn = ({ className }: Props) => {
  const { isAuthenticated, login, loading, error } = useAuth();
  const [isRemember, setIsRemember] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    if (!email || !password) return;
    await login(email, password);
  };
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/';
    }
  }, [isAuthenticated]);

  return (
    <div className={cn(className, 'mt-6')}>
      <div className="py-8">
        <span className="text-sm text-secondary">Email</span>
        <BoxWrapper
          variant="inside"
          classNameWrapper="mt-2.5 mb-3 h-[50px]"
          classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
        >
          <input
            type="text"
            placeholder="Enter email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </BoxWrapper>
        <span className="text-sm text-secondary">Password</span>
        <BoxWrapper
          variant="inside"
          classNameWrapper="mt-2.5 mb-2 h-[50px]"
          classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
        >
          <input
            type="password"
            placeholder="Enter password"
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </BoxWrapper>

        <CustomButton
          variant="red"
          classNameWrapper="w-full h-[50px] mt-9 active:!scale-[99%]"
          classNameChild="text-[22px] text-white"
          onClick={handleLogin}
        >
          Login
        </CustomButton>
        <div className="flex flex-row w-full justify-between">
          <Checkbox
            label="Remember me"
            variant="second"
            checked={isRemember}
            onChange={() => setIsRemember(!isRemember)}
            className="mt-5"
            classNameLabel="!ml-[14px] text-sm text-pink-hot"
          />
          <Link className="mt-5 text-sm text-pink-hot" href="#">Forgot password?</Link>
        </div>
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
            <span className="bg-purple-500 text-[22px] text-white flex h-full w-full items-center justify-center gap-2 rounded-[9px] py-2">
              <SolanaPhantom /> Solana
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
