import { ProgressBar } from '@/components/shared';
import { Clock } from '@/components/shared/svgr';
import { BoxWrapper, CustomButton } from '@/components/shared';
import React from 'react';

export const SlotInfo = () => {
  return (
    <BoxWrapper as={'section'} classNameChild="flex items-start">
      <div>
        <p className="text-sm text-secondary">Slot Heigh</p>
        <div className="mt-2 text-[32px] font-bold leading-[48px]">296,522,345</div>
      </div>

      <div className="ml-20">
        <p className="text-sm text-secondary">Supply</p>
        <div className="mt-2 text-[32px] font-bold leading-[48px] text-green">479.3M</div>
      </div>

      <div className="ml-24">
        <p className="text-sm text-secondary">Epoch</p>
        <CustomButton variant={'pink'} classNameWrapper="w-8 h-8 mt-[14px]">
          <Clock className={'min-h-4 min-w-4'} />
        </CustomButton>
      </div>

      <div className="ml-3 flex items-end gap-3">
        <span className="relative top-[14px] text-[32px] font-bold">686</span>
        <ProgressBar value={34} addLabel="ETA 1d 10h" />
        <span className="relative top-[14px] text-[32px] font-bold text-secondary">687</span>
      </div>
    </BoxWrapper>
  );
};
