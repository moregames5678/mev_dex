'use client';

import { useState } from 'react';
import { BoxWrapper, TableSettings, Tabs, TitleSection } from '@/components/shared';
import { IValueTab } from '@/components/shared/tabs';
import { dataSetting } from '@/db/data';

type Props = {
  title: string;
};

import { default as BorderStrategy } from '../../../public/border-gradient/settings.svg?url';

export const Setting = ({ title }: Props) => {
  const [tabValue, setTabValue] = useState({ label: 'MevDex RDC' });

  const handleTabChange = (value: IValueTab) => {
    setTabValue(value);
  };

  const medDexActive = tabValue.label === 'MevDex RDC';

  return (
    <BoxWrapper classNameChild="!p-0 overflow-hidden">
      <TitleSection title={title} className="p-5" />
      <Tabs
        typeButton="outline-green"
        dataValues={[{ label: 'MevDex RDC' }, { label: 'Custom RDC Node' }]}
        value={tabValue}
        classNameWrapper="ml-5"
        classNameBtnChild="!py-1 !px-[27px]"
        onClick={handleTabChange}
      />

      {medDexActive ? (
        <TableSettings data={dataSetting} />
      ) : (
        <div className="p-5">
          <div className="relative p-2.5 font-light">
            <BorderStrategy className="absolute left-0 top-0 min-h-[250px] min-w-[352px]" />
            <h4 className="-mt-1 text-[18px] text-[#894aff]">Custom RPC Setup Required</h4>
            <p className="mt-1.5 text-xs leading-[167%] text-yellow-amber">
              To set up a custom RPC for your bot, please note that this process cannot be automated
              and must be done manually by our support team.
            </p>
            <p className="text-xs leading-[167%]">How to Get Assistance:</p>
            <ul className="list-disc text-xs leading-[167%]">
              <li className="ml-5">
                Submit a Ticket: Create a support ticket with your request. (24-48h wait time)
              </li>
              <li className="ml-5">
                Contact Us Directly: For faster support, reach out to us on: Telegram, Discord (1h
                wait time)
              </li>
            </ul>
            <p className="text-xs leading-[167%] text-yellow-amber">
              Our team is here to assist you 24/7 and ensure your bot setup is seamless and
              efficient!
            </p>
          </div>
        </div>
      )}
    </BoxWrapper>
  );
};
