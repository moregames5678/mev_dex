import { cn } from '@/lib';
import { BoxWrapper, Tabs, TitleSection } from '@/components/shared';
import { LineCompass } from '@/components/shared/charts';
import { lineCompassData } from '@/db/data';
import { SlotLink } from './sandwich-monitor/slot-link';

interface Props {
  className?: string;
}

const tabValues = [{ label: 'Blocks/s' }, { label: 'Block Time' }, { label: 'Tx/block' }];

export const TransactionPerformance = ({ className }: Props) => {
  return (
    <BoxWrapper as={'section'} classNameWrapper={cn(className, '')}>
      <TitleSection title="Transaction Performance" unableQuestionMark logo=" " />

      <Tabs
        classNameWrapper="mt-5 h-11"
        value={tabValues[1]}
        dataValues={tabValues}
        classNameBtnChild="!rounded-[7px]"
        classNameBtnWrapper="!rounded-[8px]"
      />
      <div className="relative -ml-2.5  h-[400px] w-[calc(100%+30px)]">
        <LineCompass data={lineCompassData} />
        <SlotLink
          className="absolute right-5 top-[18px] text-right text-[10px] leading-[180%]"
          text={
            <>
              <p>Stake with 🧭 solanacompass.com</p>
              <p>+ support our analytics</p>
            </>
          }
        />
      </div>

      <ul className="mt-1 flex flex-col gap-5">
        <li>
          <h3 className="text-sm font-semibold">Block Time</h3>
          <p className="mt-2.5 text-xs leading-normal text-secondary">
            How long does it take for a block to be processed by the Solana network? The expected
            time for each block to be processed is 400ms. At times of high congestion this can rise
            considerably. Your staking rewards are directly affected by block times: the shorter the
            duration, the higher the APY you receive on your stake.
          </p>
        </li>
        <li>
          <h3 className="text-sm font-semibold">Historic Performance Stats</h3>
          <p className="mt-2.5 text-xs leading-normal text-secondary">
            Seen an interesting bump on the chart? Dig in using our block explorer to
          </p>
        </li>
      </ul>
    </BoxWrapper>
  );
};
