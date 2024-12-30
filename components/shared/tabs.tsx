import React from 'react';
import { BoxWrapper } from './wrappers';
import { ButtonVariant, CustomButton } from './custom-button';
import { cn } from '@/lib';
import { Lock } from './svgr';

export interface IValueTab {
  label: string;
  value?: string;
  lock?: boolean;
}

interface Props {
  dataValues?: IValueTab[];
  typeButton?: ButtonVariant;
  value?: IValueTab;
  classNameWrapper?: string;
  classNameBtnChild?: string;
  classNameBtnWrapper?: string;
  onClick?: (value: IValueTab) => void;
  disabled?: boolean;
}

const tabValues = [
  { value: 'value', label: 'Value' },
  { value: 'value 2', label: 'Value 2' },
];

export const Tabs = ({
  dataValues = tabValues,
  typeButton = 'magenta',
  value: item = tabValues[0],
  classNameWrapper,
  classNameBtnChild,
  classNameBtnWrapper,
  onClick,
  disabled = false,
}: Props) => {
  return (
    <BoxWrapper
      variant="inside"
      classNameWrapper={cn(classNameWrapper, 'w-fit')}
      classNameChild="flex gap-1 justify-between p-1"
    >
      {dataValues.map(({ label, lock }, i) => (
        <CustomButton
          key={label}
          classNameWrapper={cn(classNameBtnWrapper)}
          classNameChild={cn(classNameBtnChild, 'px-3 text-sm items-center')}
          variant={label === item?.label && !disabled ? typeButton : 'ghost'}
          onClick={() => onClick && !lock && onClick(dataValues[i])}
        >
          {lock && <Lock className="-mr-0.5 h-2.5 w-2" />}
          {label}
        </CustomButton>
      ))}
    </BoxWrapper>
  );
};
