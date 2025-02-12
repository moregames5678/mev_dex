import React from 'react';
import { BoxWrapper } from '@/components/shared';
import { Clip, Copy, Notification, NotificationActive, Wallet } from '../svgr';
import { CopyWrapper } from '../wrappers/copy-wrapper';
import { PageTitle } from './title';

export const Header = () => {
  const notification = true;
  const code = 'ARsCio73Eyh36SWuECd8w...G3S';

  return (
    <header className="flex items-center justify-between gap-12 px-[30px] pt-7">
      <PageTitle />

      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="hover:animate-pulse active:scale-[97%]">
          <BoxWrapper classNameWrapper="!rounded-sm" classNameChild="!p-[9px] !rounded-[7px]">
            {notification ? (
              <NotificationActive className="min-h-6 min-w-6" />
            ) : (
              <Notification className="min-h-6 min-w-6" />
            )}
          </BoxWrapper>
        </button>

        {/* Balance */}
        <BoxWrapper
          classNameChild="flex items-center gap-2 !p-[9px] !rounded-[7px]"
          classNameWrapper="!rounded-sm"
        >
          <Wallet className="min-h-6 min-w-6 opacity-55" />
          <p className="text-sm text-secondary">
            Balance:<span className="ml-2.5 font-bold text-green">1,813.56 SOL</span>
          </p>
        </BoxWrapper>

        {/* Spatial code */}
        <CopyWrapper copyValue={code}>
          <BoxWrapper
            classNameWrapper="!rounded-sm"
            classNameChild="flex items-center !p-[9px] !rounded-[7px]"
          >
            <Clip className="min-h-6 min-w-6 opacity-55" />
            <p className="ml-2.5 text-sm text-secondary">
              Wallet Solana:<span className="ml-2.5 text-blue">{code}</span>
            </p>
            <Copy className="ml-3 min-h-4 min-w-4" />
          </BoxWrapper>
        </CopyWrapper>
      </div>
    </header>
  );
};
