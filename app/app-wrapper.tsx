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
      <div className="mx-auto flex min-h-screen max-w-[1440px] overflow-hidden rounded-lg">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <Header />
          <main className="p-[30px] pt-8">{children}</main>
        </div>
      </div>
      <Toaster />
    </>
  );
};
