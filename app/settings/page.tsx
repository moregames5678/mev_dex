'use client';
import React, { useState, useEffect } from 'react';
import { useUserData } from '@/hooks/useUserData';
import { useEdit } from '@/hooks/useEdit';

import { BoxWrapper, CustomButton } from '@/components/shared';
import { ModalChangePassword } from '@/app/settings/(components)/modal-changepassword';
import { Switch } from '@/components/ui';
import { Info } from '@/components/shared/svgr';

const Support = () => {
  const userData = useUserData();
  const { editAccount, loading, error } = useEdit();

  const [changeEmailBtn, setChangeEmailBtn] = useState(true);
  const [getNews, setGetNews] = useState(false);
  const [twoAuthm, setTwoAuth] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userData?.email) {
      setNewEmail(userData.email);
    }
  }, [userData?.email]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewEmail(value);
    setChangeEmailBtn(value === userData?.email);
  };

  const handleEmailSubmit = async () => {
    // if (!newEmail || !password) return;
    
    await editAccount(newEmail, password, '');
    if (!error) {
      setPassword('');
      userData.refetch();
    }
  };

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
          <input className="w-full" type="email" value={newEmail} onChange={handleEmailChange} />
        </BoxWrapper>
        <CustomButton
          variant={changeEmailBtn ? 'inside-dark' : 'red'}
          classNameWrapper={`w-[30%] mt-2.5 h-[50px] active:!scale-[99%] ${changeEmailBtn && 'disabled:cursor-not-allowed'}`}
          classNameChild="text-[16px] text-white"
          // props={{ disabled: changeEmailBtn }}
          onClick={handleEmailSubmit}
        >
          Change email
        </CustomButton>
      </div>
      {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}

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
      <ModalChangePassword 
      />
    </BoxWrapper>
  );
};

export default Support;
