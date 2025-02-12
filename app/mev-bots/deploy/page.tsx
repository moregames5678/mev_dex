import React from 'react';
import { BoxWrapper, CustomButton, ImageWrapper } from '@/components/shared';
import { Checked } from '@/components/shared/svgr';
import { promoText } from '@/db/promo-or-info';
import { cn } from '@/lib';

import Image from 'next/image';
import Link from 'next/link';

const Deploy = () => {
  return (
    <section>
      <h1 className="mt-7 text-center text-5xl">Compare MevDex RDC / Custom RDC Node</h1>
      <p className="mt-4 text-center text-sm text-secondary">
        Explore the key differences between MevDex RDC and Custom RDC Node solutions. Compare their
        features, <br /> performance, and customization options to determine the best fit for your
        business needs.
      </p>

      {/* Promotions */}
      <ul className="flex gap-[30px]">
        {/* MevDex RDC / Box 1 */}
        <li key={'promo-md-rdc'} className="relative">
          <Image
            src="/bg-image/shadow-line-md.svg"
            alt="MevDex RDC"
            width={570}
            height={0}
            className="absolute left-1/2 top-[26px] -translate-x-1/2 transform"
          />
          <BoxWrapper classNameWrapper="mt-[30px] w-full" classNameChild="!pt-6">
            <div className="rounded-md bg-gradient-to-br from-[#000000b0] to-[#ffffff15] p-[1px]">
              <div className="relative h-[147px] w-[566px]">
                <ImageWrapper src="/bg-image/promo-md-rdc.png" alt="MevDex RDC" fill />
                <h2 className="relative pt-[84px] text-center text-[40px] font-bold leading-tight">
                  MevDex RDC
                </h2>
              </div>
            </div>
            <Link href="/mev-bots/deploy/mev-rdc">
              <CustomButton
                classNameWrapper="mt-[30px] w-full shadow-main active:!scale-[99%] shadow-magenta-btn text-[22px] font-bold"
                classNameChild="!py-[14.5px]"
                variant="magenta"
              >
                DEPLOY
              </CustomButton>
            </Link>

            <BoxWrapper
              variant="inside"
              classNameWrapper="mt-8 w-full !p-px"
              classNameChild="relative p-5"
            >
              <ImageWrapper src="/bg-image/bg-promo-rdc.png" alt="MevDex RDC" fill />
              <ul>
                {promoText['md'].map(({ title, description }, index) => (
                  <li key={index} className={cn('flex gap-4', { 'mt-[15px]': index !== 0 })}>
                    <div>
                      <CustomButton
                        variant="sidebar"
                        classNameChild="!p-1.5"
                        classNameWrapper="active:!scale-100"
                      >
                        <Checked />
                      </CustomButton>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-tight">{title}</h3>
                      <p className="mt-2.5 text-sm leading-normal text-secondary">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </BoxWrapper>
          </BoxWrapper>
        </li>

        {/* Custom RDC / Box 2*/}
        <li key={'promo-mev-rdc'} className="relative">
          <Image
            src="/bg-image/shadow-line-custom.svg"
            alt="Custom RDC"
            width={570}
            height={0}
            className="absolute left-1/2 top-[26px] -translate-x-1/2 transform"
          />
          <BoxWrapper classNameWrapper="mt-[30px] w-full" classNameChild="!pt-6">
            <div className="rounded-md bg-gradient-to-br from-[#000000b0] to-[#ffffff15] p-[1px]">
              <div className="relative h-[147px] w-[566px]">
                <ImageWrapper src="/bg-image/promo-custom-rdc.png" alt="MevDex RDC" fill />
                <h2 className="relative pt-[84px] text-center text-[40px] font-bold leading-tight">
                  Custom RDC
                </h2>
              </div>
            </div>
            <Link href="/mev-bots/deploy/custom-rdc">
              <CustomButton
                classNameWrapper="mt-[30px] w-full shadow-main active:!scale-[99%] shadow-magenta-btn text-[22px] font-bold"
                classNameChild="!py-[14.5px]"
                variant="purple"
              >
                DEPLOY
              </CustomButton>
            </Link>

            <BoxWrapper
              variant="inside"
              classNameWrapper="mt-8 w-full !p-px"
              classNameChild="relative p-5"
            >
              <ImageWrapper src="/bg-image/bg-promo-rdc.png" alt="MevDex RDC" fill />
              <ul>
                {promoText['custom'].map(({ title, description }, index) => (
                  <li key={index} className={cn('flex gap-4', { 'mt-[15px]': index !== 0 })}>
                    <div>
                      <CustomButton
                        variant="sidebar"
                        classNameChild="!p-1.5"
                        classNameWrapper="active:!scale-100"
                      >
                        <Checked />
                      </CustomButton>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-tight">{title}</h3>
                      <p className="mt-2.5 text-sm leading-normal text-secondary">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </BoxWrapper>
          </BoxWrapper>
        </li>
      </ul>
    </section>
  );
};

export default Deploy;
