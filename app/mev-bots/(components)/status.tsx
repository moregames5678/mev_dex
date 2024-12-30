import {
  BoxWrapper,
  CustomButton,
  LineBarProgress,
  LineProgress,
  TitleSection,
} from '@/components/shared';
import { CheckedDesign, UpdateCircle } from '@/components/shared/svgr';
import { default as BorderStatus } from '../../../public/border-gradient/status.svg?url';
import { cn } from '@/lib';

type Props = {
  title: string;
  secondTitle?: string;
  enableApiInput?: boolean;
};

export const Status = ({ title, secondTitle, enableApiInput = false }: Props) => {
  return (
    <BoxWrapper>
      <TitleSection title={title} secondTitle={secondTitle} />
      <BoxWrapper
        variant="inside"
        classNameWrapper={cn('mt-4', { hidden: !enableApiInput })}
        classNameChild="flex items-center justify-between p-[5px] pl-4"
      >
        <input type="text" placeholder="Enter RPC API" />
        <CustomButton classNameWrapper="w-[40px] h-[40px]">
          <UpdateCircle className="min-h-5 min-w-5" />
        </CustomButton>
      </BoxWrapper>

      <div className="mt-5">
        <h3 className="mb-2.5 text-sm text-secondary">
          Status: {!enableApiInput ? <span className="text-green">Working</span> : 'True / False'}
        </h3>
        <LineProgress value={90} />
      </div>

      <div className="mt-5">
        <h3 className="mb-2.5 text-sm text-secondary">Latency</h3>

        <div className="flex justify-between">
          <div className="relative flex h-[124px] min-w-[166px] flex-col items-center">
            <BorderStatus className="absolute h-[124px] min-w-[166px]" />
            <LineBarProgress value={50} className="relative mt-[18px]" />
            <p className="relative mt-2 text-xs text-blue">45.6 MS</p>
          </div>

          <div className="relative flex h-[124px] min-w-[166px] flex-col items-center">
            <BorderStatus className="absolute h-[124px] min-w-[166px]" />
            <BoxWrapper
              variant="inside"
              classNameWrapper="w-[72px] h-[72px] !rounded-sm !p-px mt-[18.5px]"
              classNameChild="flex items-center justify-center !rounded-[7px]"
            >
              <CheckedDesign className="h-[47px] w-[50px]" />
            </BoxWrapper>
            <p className="relative mt-2 text-xs text-blue">Healthy</p>
          </div>
        </div>
      </div>

      <ul className="flex justify-between">
        <li className="mt-5">
          <h3 className="mb-2.5 text-sm text-secondary">Slot</h3>
          <BoxWrapper
            variant="inside"
            classNameWrapper="!rounded-[4px] w-[104px]"
            classNameMiddle="!rounded-[4px]"
            classNameChild="!rounded-[4px] text-center !py-0.5 text-sm fort-semibold"
          >
            302758754
          </BoxWrapper>
        </li>
        <li className="mt-5">
          <h3 className="mb-2.5 text-sm text-secondary">Solana Core</h3>
          <BoxWrapper
            variant="inside"
            classNameWrapper="!rounded-[4px] w-[104px]"
            classNameMiddle="!rounded-[4px]"
            classNameChild="!rounded-[4px] text-center !py-0.5 text-sm fort-semibold"
          >
            2.0.16
          </BoxWrapper>
        </li>
        <li className="mt-5">
          <h3 className="mb-2.5 text-sm text-secondary">Block Time</h3>
          <BoxWrapper
            variant="inside"
            classNameWrapper="!rounded-[4px] w-[104px]"
            classNameMiddle="!rounded-[4px]"
            classNameChild="!rounded-[4px] text-center !py-0.5 text-sm fort-semibold"
          >
            23 Nov 2024
          </BoxWrapper>
        </li>
      </ul>
    </BoxWrapper>
  );
};
