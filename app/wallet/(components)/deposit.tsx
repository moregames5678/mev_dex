import { BoxWrapper, CopyWrapper, ImageWrapper } from '@/components/shared';
import { Copy, Wallet } from '@/components/shared/svgr';

import { default as BorderDeposit } from '../../../public/border-gradient/wallet-deposit.svg?url';

const code = 'ARsCi2FsfeGgYV3Jwzx397ub2FsfeGgYV3Jwzx39jv3Wd8w...G3S';

export const Deposit = () => {
  return (
    <div className="mt-6">
      <span className="text-sm text-secondary">Address</span>
      <CopyWrapper copyValue={code} className="mt-2.5 w-full">
        <BoxWrapper
          variant="inside"
          classNameWrapper="!rounded-sm"
          classNameChild="flex items-center !p-3 !pr-4 !rounded-[7px]"
        >
          <Wallet className="min-h-6 min-w-6 opacity-55" />
          <p className="ml-3 text-sm">{code}</p>
          <Copy className="ml-auto h-[11px] w-[13px]" />
        </BoxWrapper>
      </CopyWrapper>

      <div className="mx-auto mt-10 flex h-[182px] w-[182px] items-center justify-center rounded-md border-2">
        <ImageWrapper src={'/crypto-icons/qr-code.png'} alt="qr code" width={152} height={152} />
      </div>

      <div className="relative mt-10 p-5">
        <BorderDeposit className="absolute left-0 top-0 min-h-[170px] min-w-[546px]" />

        <ul className="text-sm">
          <li className="flex justify-between text-secondary">
            <span>Min deposit amount</span>
            <span>0.003 SOL</span>
          </li>
          <li className="mt-2.5 flex justify-between">
            <span>Expected arrival</span>
            <span>1 confirmations</span>
          </li>
          <li className="mt-2.5 flex justify-between">
            <span>Minimum unlock</span>
            <span>1 confirmations</span>
          </li>
        </ul>

        <p className="yellow-label-common mt-2.5 !leading-normal">
          Deposit Solana tokens to your personal crypto deposit address. Make sure you copy the
          address correctly as incorrect transfers can not be refunded.
        </p>
      </div>
    </div>
  );
};
