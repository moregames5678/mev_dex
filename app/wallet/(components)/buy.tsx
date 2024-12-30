import { CustomButton, ImageWrapper } from '@/components/shared';
import { cn } from '@/lib';

import adWantCrypto from '../../../public/bg-image/ad-want-crypto.png';
import {
  BestRates,
  DocumentRequirement,
  New,
  Onramper,
  PaymentMethods,
} from '@/components/shared/svgr';

interface Props {
  className?: string;
}

export const Buy = ({ className }: Props) => {
  return (
    <div className={cn(className, 'mt-[30px]')}>
      <div className="relative h-[277px] w-full">
        <ImageWrapper src={adWantCrypto} alt={'Want crypto ?'} fill />
        <div className="relative px-7 py-5">
          <h2 className="text-[34px] font-semibold">Want crypto?</h2>
          <h3 className="mt-[9px] font-bold">Buy with:</h3>
          <ul className="mt-[19px]">
            <li className="flex items-center gap-[14px] text-sm text-white/60">
              <BestRates className="h-6 min-w-6" /> Best rates
            </li>
            <li className="mt-[18px] flex items-center gap-[14px] text-sm text-white/60">
              <DocumentRequirement className="h-6 min-w-6" /> Low or no documentation <br />{' '}
              requirements
            </li>
            <li className="mt-5 flex items-center gap-[14px] text-sm text-white/60">
              <PaymentMethods className="h-6 min-w-6" /> 200+ payment methods
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <CustomButton
          variant={'outline-sol'}
          classNameWrapper="mt-[30px] w-full h-[50px] active:!scale-[99%]"
          classNameMiddle="!rounded-[9px]"
          classNameChild=""
        />
        <div className="pointer-events-none absolute bottom-[12px] left-[200px] min-h-9 text-sm leading-none">
          <div className="text-center">Buy Solana</div>
          <div className="mt-[4px] flex items-center justify-center">
            <Onramper className="h-3 min-w-6" />
            <span className="ml-[5px] text-[#A7A8A9]">Onramper</span>
            <New className="ml-2.5 h-[17px] min-w-8 rounded-[4px] shadow-magenta-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};
