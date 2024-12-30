import { cn } from '@/lib';
import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type Props = {
  children?: React.ReactNode;
  title: React.ReactNode;
  className?: string;
};

export const Tooltip = ({ children, title, className }: Props) => {
  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0} disableHoverableContent={true}>
      <TooltipPrimitive>
        <TooltipTrigger className="cursor-default">{children}</TooltipTrigger>
        <TooltipContent className={cn(className, '')}>{title}</TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  );
};
