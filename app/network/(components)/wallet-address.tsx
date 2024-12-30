import { BoxWrapper, CopyWrapper } from '@/components/shared';
import { Copy, Wallet } from '@/components/shared/svgr';
import { cn } from '@/lib';

interface Props {
  className?: string;
}

const code = 'ARsCi2FsfeGgYV3Jwzx397ub2FsfeGgYV3Jwzx39jv3Wd8w...G3S';

export const WalletAddress = ({ className }: Props) => {
  return (
    <BoxWrapper classNameWrapper={cn(className, '')}>
      <p className="text-sm text-secondary">Wallet Address</p>
      <CopyWrapper copyValue={code} className="mt-2.5 w-fit">
        <BoxWrapper
          variant="inside"
          classNameWrapper="!rounded-sm"
          classNameChild="flex items-center !p-3 !pr-4 !rounded-[7px]"
        >
          <Wallet className="min-h-6 min-w-6 opacity-55" />
          <p className="ml-3 text-sm">{code}</p>
          <Copy className="ml-10 h-[11px] w-[13px]" />
        </BoxWrapper>
      </CopyWrapper>
    </BoxWrapper>
  );
};
