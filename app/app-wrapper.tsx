import { Header, Sidebar } from '@/components/shared';
import { Toaster } from '@/components/ui';
import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const AppWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-full sm:max-w-[1440px] overflow-hidden rounded-lg">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Header />
          <main className="p-4 sm:p-[30px] pt-8">{children}</main>
        </div>
      </div>
      <Toaster />
    </>
  );
};
