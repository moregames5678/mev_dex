'use client';

import React from 'react';
import { BoxWrapper } from '@/components/shared';
import SignUp from '@/app/signup/(components)/signup';

const Registration = () => {
  return (
    <BoxWrapper classNameWrapper="w-full sm:w-[606px] mx-auto mt-8 px-4" classNameChild="!p-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold">Sign Up</h2>

        <SignUp />
      </BoxWrapper>
  );
};

export default Registration;
