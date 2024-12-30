import { Tooltip, TooltipQuestion } from '@/components/shared';
import { CheckedCircle } from '@/components/shared/svgr';
import { cn } from '@/lib';
import { IHtmlParse } from '@/lib/status-jup-ag';
import { CircleAlert } from 'lucide-react';

type Props = {
  data: IHtmlParse | undefined;
};

export const UpdateChart = ({ data }: Props) => {
  if (!data)
    return (
      <ul className="w mt-1 flex max-w-[449px] gap-px overflow-hidden rounded-[4px]">
        {[...Array(90)].map((_, index) => (
          <li
            key={index}
            className={cn('h-[19px] w-[4px] rounded-[1px] bg-[#48484A] hover:opacity-75')}
          />
        ))}
      </ul>
    );

  return (
    <li className="max-w-[453px]">
      <div className={cn('flex items-center justify-between', { invisible: data.title === '' })}>
        <CheckedCircle className="h-[14px] min-w-[14px]" />
        <TooltipQuestion title={data.title} className="ml-1 mr-auto text-[15px]" />
        <span className="text-[13px] leading-normal text-[#059669]">{data.uptimePercent}</span>
      </div>

      <ul className="w mt-1 flex max-w-[449px] gap-px overflow-hidden rounded-[4px]">
        {data.data.map((data, index) => (
          <Tooltip
            key={index}
            className={'border-none bg-dark text-xs text-secondary shadow-main'}
            title={
              <>
                <p className="flex items-center text-white">
                  {data.title === 'Operational' ? (
                    <CheckedCircle className="mr-1 h-[14px] min-w-[14px]" />
                  ) : (
                    <CircleAlert className="mr-1" size={14} color="#b91c1c" />
                  )}
                  {data.title}
                </p>
                <p className="mt-0.5">{data.downtime}</p>
                <div className="mb-1 ml-[-10px] mt-1.5 h-px w-[calc(100%+20px)] bg-gd-divider opacity-[32%]" />
                <p className="text-center">{data.uptime}</p>
              </>
            }
          >
            <li
              className={cn('h-[19px] w-[4px] rounded-[1px] hover:opacity-75', {
                'bg-[#059669]': data.title === 'Operational',
                'bg-[#b91c1c]': data.title === 'Downtime',
                'bg-[#9e9e9e2a]': data.title === '',
              })}
            ></li>
          </Tooltip>
        ))}
      </ul>

      <div className="mt-1 flex  justify-between text-sm text-secondary">
        <p>90 days ago</p>
        <p>Today</p>
      </div>
    </li>
  );
};
