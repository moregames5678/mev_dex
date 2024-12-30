import { useState } from 'react';
import { cn } from '@/lib';
import { BoxWrapper, CustomButton, TitleSection, TooltipQuestion } from '@/components/shared';
import { Pause } from '@/components/shared/svgr';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChartList } from './chart-list';

interface Props {
  className?: string;
}

export const SandwichMonitor = ({ className }: Props) => {
  const [position, setPosition] = useState('10');

  return (
    <BoxWrapper classNameWrapper={cn(className, '')}>
      <TitleSection
        title="Real-time Solana Sandwich monitor"
        logo
        unableQuestionMark
        rightChildren={
          <div className="flex items-center">
            <BoxWrapper
              variant="inside"
              classNameWrapper="h-[20px] w-[20px] !rounded-full"
              classNameChild="flex items-center justify-center"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-green" />
            </BoxWrapper>
            <span className="ml-1.5 text-sm text-green">Operational</span>{' '}
            <button className="px-2.5 py-1">
              <Pause className="w-2.5" />
            </button>
          </div>
        }
      />

      <div className="mt-7 flex items-center justify-between pl-[60px] pr-[104px]">
        <TooltipQuestion title="Slot / Leader" />
        <div className="text-sm">Sandwiches</div>
      </div>

      <ChartList className="mt-6" />

      <div className="mt-5 flex items-center justify-end">
        <div className="flex items-center gap-2 text-xs text-secondary">
          Show
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BoxWrapper
                variant="inside"
                classNameWrapper="!rounded-[7px] h-[21px] !p-[0.5px]"
                classNameMiddle="!rounded-[6px] !p-[0.5px]"
                classNameChild="!rounded-[6px] !px-2.5 flex items-center !py-0 text-white"
              >
                <span className="w-6 text-left text-sm">{position}</span>
                <ChevronDown size={16} className="-mr-1" />
              </BoxWrapper>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-0">
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="5">5</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="10">10</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          per page
        </div>

        <div className="ml-[30px] flex items-center gap-2.5 text-xs">
          <CustomButton
            variant="dark"
            classNameWrapper="!rounded-[4px] h-5"
            classNameChild="!rounded-[3px] px-[5px]"
          >
            <ChevronLeft size={16} />
          </CustomButton>
          <p>
            Item <span className="text-green">1 - 5</span>{' '}
            <span className="text-secondary">of 256</span>
          </p>
          <CustomButton
            variant="dark"
            classNameWrapper="!rounded-[4px] h-5"
            classNameChild="!rounded-[3px] px-[5px]"
          >
            <ChevronRight size={16} />
          </CustomButton>
        </div>
      </div>
    </BoxWrapper>
  );
};
