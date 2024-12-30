import { slots } from '@/db/data';
import { cn, formatNumberWithCommas } from '@/lib';
import { ISlots } from '@/types';
import { SlotLink } from './slot-link';

import { default as SlotDividerArrows } from '../../../../public/bg-image/slot-divider-arrows.svg?url';
import { default as Separator } from '../../../../public/border-gradient/separator-neumorphism.svg';
import stopLinkImg1 from '../../../../public/crypto-icons/slot-link-img-1.png';
import stopLinkImg2 from '../../../../public/crypto-icons/slot-link-img-2.png';
import stopLinkImg3 from '../../../../public/crypto-icons/slot-link-img-3.png';

interface Props {
  className?: string;
}

export const ChartList = ({ className }: Props) => {
  return (
    <ul className={cn(className, '')}>
      {slots.map((slot: ISlots, index) => {
        return (
          <li
            key={slot.slot}
            className={cn('-ml-5 flex w-[calc(100%+40px)] items-center gap-9 px-5', {
              'bg-[#00000026]': index % 2 === 0,
            })}
          >
            <div className="flex w-[188px] flex-col items-center leading-normal">
              <SlotLink text={formatNumberWithCommas(slot.slot)} />
              <div>{slot.timestamp}</div>
              <Separator className="my-2 w-full" />
              <SlotLink text={slot.leader} />
              <div className="mt-2 flex items-center gap-4">
                <SlotLink image={stopLinkImg1} />
                <SlotLink image={stopLinkImg2} />
                <SlotLink image={stopLinkImg3} />
              </div>
            </div>

            <ul>
              {slot.sandwiches.map((sandwich, index) => {
                return (
                  <li key={index} className="flex items-center py-5 text-sm">
                    <div className="w-[110px] ">
                      {sandwich.participants.map(({ role, id }, index) => {
                        return (
                          <div
                            key={index}
                            className={cn('flex flex-col gap-1', { 'mt-4': index % 2 !== 0 })}
                          >
                            <span className="text-secondary">{role}</span>
                            <SlotLink text={id} />
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex h-[156px] w-40 flex-col justify-between">
                      {sandwich.transactions.from.map(({ currency, value }, index) => (
                        <div key={index} className="flex gap-6">
                          <SlotLink image={stopLinkImg1} className="w-[20px] self-center" />
                          <div className="flex flex-col gap-1.5">
                            <span className="text-secondary">{currency}</span>
                            <span>{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <SlotDividerArrows className="h-[129px] w-[41px]" />

                    <div className="flex h-[156px] w-[140px] flex-col justify-between">
                      {sandwich.transactions.to.map(({ currency, value }, index) => (
                        <div className="flex flex-col gap-1.5" key={index}>
                          <span className="text-end text-secondary">{currency}</span>
                          <span className="text-end ">{value}</span>
                        </div>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
