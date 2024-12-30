'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';
import { BoxWrapper } from '../../shared';
import { SvgThumb } from './svg-thumb';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <BoxWrapper
    variant="inside"
    classNameWrapper={cn(className, 'w-fit h-6 !rounded-full')}
    classNameChild="!p-0 !rounded-full"
    classNameMiddle="!rounded-full"
  >
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex h-5 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green data-[state=unchecked]:bg-dark',
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-[15.5px] w-[15.5px] rounded-full bg-transparent ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
        )}
      >
        <SvgThumb className="mt-[-1px]" />
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  </BoxWrapper>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
