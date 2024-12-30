import { cn, formatNumberWithCommas } from '@/lib';
import { walletPerformanceCard } from '@/db/data';
import { BoxWrapper, ImageWrapper } from '@/components/shared';
import { CheckedOutlineCircle } from '@/components/shared/svgr';

import bgLogo from '../../../public/logo-box.png';

interface Props {
  className?: string;
}

export const WalletPerformanceCards = ({ className }: Props) => {
  return (
    <ul className={cn(className, 'grid grid-cols-12 gap-7')}>
      {walletPerformanceCard.map((item, index) => (
        <BoxWrapper
          as="li"
          key={index}
          classNameWrapper={cn('col-span-3 h-[210px]', { 'col-span-6': index > 7 })}
          classNameChild="relative"
        >
          <div
            className="absolute left-0 top-0 h-full w-full"
            style={{
              background:
                'linear-gradient(45deg, rgba(31, 35, 48, 0) 0%, rgba(31, 35, 48, 0.7) 100%)',
            }}
          />
          <div
            className="absolute -left-[80px] -top-[50%] h-[276px] w-[256px]"
            style={{
              background: 'radial-gradient( rgba(255,0,221,0.7) 50%, transparent 50% )',
              filter: 'blur(70px)',
            }}
          />
          <ImageWrapper
            src={bgLogo}
            alt="logo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
            width={249}
            height={206}
            unoptimized
          />
          <span className="relative text-sm font-medium">{item.title}</span>
          <div
            className={cn(
              'absolute top-1/2 -ml-5 w-full -translate-y-1/2 text-center text-[26px] font-black',
              {
                'text-green': item.value > 0,
                'text-[#ff0040]': item.value < 0,
                'text-white': index === 0,
              },
            )}
          >
            {formatNumberWithCommas(item.value)} {item.typeOfValue}
          </div>
          <div
            className={cn(
              'absolute top-1/2 -ml-5 mt-8 w-full -translate-y-1/2 text-center text-[#b87aff]',
            )}
          >
            {item.shortTitle}
          </div>
          <div className="absolute bottom-5 left-5 flex w-[calc(100%-40px)] justify-between text-xs text-[#b1b6c6]">
            <span className="ml-5">@sunnypost</span>
            <div className="mr-1 flex items-end gap-1">
              ...{' '}
              <BoxWrapper
                variant="inside"
                classNameWrapper="!rounded-[7px] h-[19px] !p-[0.5px]"
                classNameMiddle="!rounded-[6px] !p-[0.5px]"
                classNameChild="!rounded-[6px] !pl-2 !pr-1 flex items-center !py-0"
              >
                17 min <CheckedOutlineCircle className="-mt-px ml-1 min-h-[14px] min-w-[14px]" />
              </BoxWrapper>
            </div>
          </div>
        </BoxWrapper>
      ))}
    </ul>
  );
};
