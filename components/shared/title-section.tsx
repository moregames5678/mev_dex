import { Square } from './svgr';
import { TooltipQuestion } from './tooltip-question';

type Props = {
  title: string;
  secondTitle?: string;
  unableQuestionMark?: boolean;
  logo?: React.ReactNode;
  rightChildren?: React.ReactNode;
  className?: string;
};

export const TitleSection = ({
  title,
  secondTitle,
  className,
  unableQuestionMark,
  rightChildren,
  logo,
}: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {logo || <Square className="h-6 min-w-6" />}

          <TooltipQuestion
            unableQuestionMark={unableQuestionMark}
            className="!gap-[5px]"
            title={
              <h2 className="whitespace-nowrap text-base font-medium">
                {title}
                {secondTitle && (
                  <span className="ml-2.5 text-sm font-normal text-secondary">{secondTitle}</span>
                )}
              </h2>
            }
          />
        </div>

        <div>{rightChildren}</div>
      </div>

      <div className="ml-[-20px] mt-2.5 h-px w-[calc(100%+40px)] bg-gd-divider opacity-[32%]" />
    </div>
  );
};
