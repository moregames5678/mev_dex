'use client';

import { BoxWrapper, CustomButton } from '@/components/shared';
import { UpdateCircle } from '@/components/shared/svgr';
import { Charts } from './update-charts';
import { IHtmlParse } from '@/lib/status-jup-ag';
import { useState } from 'react';

interface Props {
  dataChart?: IHtmlParse[];
}

const skeleton = [...Array(3)].fill({
  data: [...Array(90)].fill({ title: '', uptime: '' }),
  title: '',
  uptimePercent: '',
});

export const RpcApiAndViewCharts = ({ dataChart }: Props) => {
  const [loading, setLoading] = useState(true);

  const search = () => {
    const timeout = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeout);
    }, 2000);
  };

  return (
    <>
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-3 h-[50px]"
        classNameChild="flex items-center p-[5px] pl-4"
      >
        <form action={search} className="flex w-full items-center justify-between">
          <input type="text" placeholder="Enter RPC API" name="query" />
          <CustomButton classNameWrapper="w-[40px] h-[40px]" props={{ type: 'submit' }}>
            <UpdateCircle className="min-h-5 min-w-5" />
          </CustomButton>
        </form>
      </BoxWrapper>
      <p className="yellow-label-common">
        If you don&#700;t have Jupiter API, just enter{' '}
        <span className="text-pink-hot">http://0.0.0.0:18080</span>
      </p>

      <Charts dataChart={loading ? skeleton : dataChart} />
    </>
  );
};
