'use client';

import { useState, ChangeEvent } from 'react';
import { BoxWrapper } from './wrappers/box-wrapper';
import { Search } from './svgr';
import { cn } from '@/lib/utils';

interface Props {
  defaultValue: string | null;
  placeholder?: string;
  size?: string;
  className?: string;
}

export const SearchInput = ({ defaultValue, placeholder, size, className }: Props) => {
  const [inputValue, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setValue(inputValue);
  };

  return (
    <BoxWrapper
      classNameWrapper={cn(size, '!rounded-sm')}
      classNameChild="!py-3 !pl-5 !pr-3 !rounded-[7px]"
    >
      <label htmlFor="inputId" className="flex items-center gap-2">
        <input
          type="text"
          id="inputId"
          placeholder={placeholder ?? 'Enter your keywords'}
          value={inputValue ?? ''}
          onChange={handleChange}
          className={cn(
            className,
            'w-full border-none bg-[transparent] outline-none placeholder:text-secondary',
          )}
        />
        <Search />
      </label>
    </BoxWrapper>
  );
};
