import { isValidElement } from 'react';

import { cn } from '@/lib';
import { QuestionMark } from './svgr';
import { Tooltip } from './tooltip';
import { tooltipsObj } from '@/constants';

type Props = {
  title: React.ReactNode;
  as?: React.ElementType;
  unableQuestionMark?: boolean;
  className?: string;
};

export const TooltipQuestion = ({
  title,
  as: Component = 'span',
  unableQuestionMark,
  className,
}: Props) => {
  const titleType = isValidElement(title) ? title.props.children[0] : title;
  const tooltip = tooltipsObj[titleType as keyof typeof tooltipsObj] || titleType;

  return (
    <div className={cn(className, 'flex items-center gap-[3px] text-sm')}>
      <Component>{title}</Component>{' '}
      <Tooltip
        className="max-w-96 border-[#3f3f4686] bg-gd-main text-base font-light text-secondary text-white shadow-main"
        title={<div className="p-2">{tooltip}</div>}
      >
        <QuestionMark
          className={cn('min-h-4 min-w-6 cursor-pointer px-1', {
            hidden: unableQuestionMark,
          })}
        />
      </Tooltip>
    </div>
  );
};
