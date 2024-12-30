import { BoxWrapper, CustomButton } from '@/components/shared';

type Props = {
  title: string;
};

export const SettingSave = ({ title }: Props) => {
  return (
    <BoxWrapper classNameChild="flex justify-between items-center !py-[30px] !pl-[30px]">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <CustomButton
        variant={'magenta'}
        classNameWrapper="w-[248px] h-[50px]"
        classNameChild="text-[22px]"
      >
        Save Bundle
      </CustomButton>
    </BoxWrapper>
  );
};
