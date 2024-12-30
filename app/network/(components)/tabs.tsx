import { BoxWrapper } from '@/components/shared';
import { IValueTab, Tabs } from '@/components/shared/tabs';
import { transactionNetworkTabs } from '@/constants';

type Props = {
  onChange?: (value: IValueTab) => void;
  value?: IValueTab;
};

export const NetworkTabs = ({ onChange, value }: Props) => {
  return (
    <BoxWrapper classNameChild="flex flex-col gap-1 !py-[30px]">
      <Tabs
        typeButton="outline-pink"
        dataValues={transactionNetworkTabs}
        value={value}
        classNameBtnWrapper="!rounded-[7px]"
        classNameBtnChild="!py-1 !px-8 !rounded-[6px]"
        onClick={onChange}
      />
    </BoxWrapper>
  );
};
