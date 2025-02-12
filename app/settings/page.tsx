'use client';
import React, { useState } from 'react';

import { BoxWrapper, CustomButton } from '@/components/shared';
import { ModalChangePassword } from '@/app/settings/(components)/modal-changepassword';
import { Switch } from '@/components/ui';
import { Info } from '@/components/shared/svgr';

const Support = () => {
  const [changeEmailBtn, setChangeEmailBtn] = useState(true);
  const [getNews, setGetNews] = useState(false);
  const [twoAuthm, setTwoAuth] = useState(false);


  return (
    <BoxWrapper as="section" classNameWrapper="min-w-[710px] max-w-[710px]">
      <h2 className="font-semibold">User Settings</h2>
      <div className="mt-3 h-px bg-gd-divider opacity-[32%]" />

      <span className="text-sm text-secondary">Email</span>
      <div className="flex flex-row gap-5">
        <BoxWrapper
          variant="inside"
          classNameWrapper="mt-2.5 h-[50px] w-[70%]"
          classNameChild="py-[3px] px-4 pr-1 flex justify-between items-center"
        >
          <input className="w-full" type="text" defaultValue="test@gmail.com" onChange={() => {
            setChangeEmailBtn(false);
          }} />
        </BoxWrapper>
        <CustomButton
          variant={changeEmailBtn ? 'inside-dark' : 'red'}
          classNameWrapper={`w-[30%] mt-2.5 h-[50px] active:!scale-[99%] ${changeEmailBtn && 'disabled:cursor-not-allowed'}`}
          classNameChild="text-[16px] text-white"
          props={{ disabled: changeEmailBtn }}
        >
          Change email
        </CustomButton>
      </div>
      <div className="mt-5 flex items-center gap-5 flex-row">
        <Switch checked={twoAuthm} onCheckedChange={() => setTwoAuth(!twoAuthm)}/>
        <span
          className="flex flex-row items-center gap-2 text-sm">I want to get information of the news to my email</span>{' '}
      </div>
      <div className="mt-5 flex items-center gap-5 flex-row">
        <Switch checked={getNews} onCheckedChange={() => setGetNews(!getNews)} />
        <span
          className="flex flex-row items-center gap-2 text-sm">Two-factor authentication by email<Info /></span>{' '}
      </div>
      <p className="text-secondary text-sm mt-3">
        Simple and reliable 2FA check protects your account from being modified without confirmation by email. Enabling
        this protection, no one can change your account.
      </p>
      <ModalChangePassword />
    </BoxWrapper>
  );
};

export default Support;
