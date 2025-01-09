'use client';

import React from 'react';
import { BoxWrapper } from '@/components/shared';
import { Signin } from '@/app/login/(components)/signin';

const Login = () => {
  return (
    <BoxWrapper classNameWrapper="w-full sm:w-[606px] mx-auto mt-8 px-4" classNameChild="!p-8">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold">Sign In</h2>

      <Signin />
    </BoxWrapper>
  );
};

export default Login;
