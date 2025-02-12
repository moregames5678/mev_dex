
import * as React from 'react';
import { cn } from '@/lib';
import { BoxWrapper, CustomButton, Modal } from '@/components/shared';
import { Close } from '@/components/shared/svgr';
import { Wallet } from 'lucide-react';
import { useState } from 'react';
import { default as BorderDialog } from '../../../public/border-gradient/withdraw-dialog.svg';

type Props = {
  className?: string;
};
export const ModalChangePassword = ({ className }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={cn(className, '')}>
      <ButtonWithdraw onClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BoxWrapper classNameWrapper="w-[606px]" classNameChild="!px-[30px]">
          <div className="relative">
            <CustomButton
              variant="inside-dark"
              onClick={() => setIsModalOpen(false)}
              classNameWrapper="w-6 h-6 !rounded-[4px] absolute left-[calc(100%-24px)]"
              classNameChild="text-gray-700 !rounded-[3px]"
            >
              <Close className="h-2.5 w-2.5" />
            </CustomButton>
            <h2 className="relative -top-2 text-center text-[32px] font-semibold">Withdrawal</h2>
          </div>

          <div className="relative mt-6 p-5">
            <BorderDialog className="absolute left-0 top-0 min-h-[137px] min-w-[546px]" />
            <div className="flex justify-between text-sm text-secondary">
              <span>Amount</span>
              <span className="text-green">0.01899 SOL</span>
            </div>
            <BoxWrapper
              variant="inside"
              classNameWrapper="!rounded-sm mt-6"
              classNameChild="flex items-center !p-3 !pr-4 !rounded-[7px]"
            >
              <Wallet className="min-h-6 min-w-6 opacity-55" />
              <p className="ml-3 text-sm">ARsCi2FsfeGgYV3Jwzx397ub2FsfeGgYVwz9jWd8wG3S</p>
            </BoxWrapper>
          </div>

          <ButtonWithdraw title="Confirm" onClick={() => setIsModalOpen(false)} />
        </BoxWrapper>
      </Modal>
    </div>
  );
};

const ButtonWithdraw = ({ onClick, title }: { onClick: () => void; title?: string }) => {
  return (
    <CustomButton
      variant="red"
      classNameWrapper="w-full h-[50px] mt-9 active:!scale-[99%]"
      classNameChild="text-[22px] text-white"
      onClick={onClick}
    >
      {title || 'Change password'}x
    </CustomButton>
  );
};
