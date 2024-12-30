'use client';

import { IHtmlParse } from '@/lib/status-jup-ag';
import { UpdateChart } from './update-chart';

type Props = {
  dataChart?: IHtmlParse[];
};

export const Charts = ({ dataChart }: Props) => {
  return (
    <ul className="mb-5 mt-3 flex flex-col gap-5">
      {dataChart?.map((data, index) => <UpdateChart key={index} data={data} />)}
    </ul>
  );
};
