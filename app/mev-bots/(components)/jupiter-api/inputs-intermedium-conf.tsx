import { BoxWrapper, TooltipQuestion } from '@/components/shared';
import { Switch } from '@/components/ui';
import { cn } from '@/lib';

type Props = {
  nodeBot?: boolean;
};

export const InputsIntermediumConf = ({ nodeBot = false }: Props) => {
  return (
    <>
      {/* Input 1 */}
      <TooltipQuestion title="MintCount from Birdeye Trending" className="-mt-1 text-secondary" />
      <BoxWrapper
        variant="inside"
        classNameWrapper="mt-3 h-[50px]"
        classNameChild="flex items-center justify-between p-[5px] pl-4"
      >
        <input type="text" placeholder="0-200" />
      </BoxWrapper>
      <span className="yellow-label-common">You do not need birdeye api for this.</span>

      {nodeBot ? (
        <>
          {/* Input 2 */}
          <TooltipQuestion title="Mint Count From Gecko" className="mt-4 text-secondary" />
          <BoxWrapper
            variant="inside"
            classNameWrapper="mt-3 h-[50px]"
            classNameChild="flex items-center justify-between p-[5px] pl-4"
          >
            <input type="text" placeholder="0-30" />
          </BoxWrapper>
          <span className="yellow-label-common">
            Сan only return ~20-30 mints at maximum due to their limitation on the api
          </span>

          {/* Input 3 */}
          <TooltipQuestion title="Webserver Thread Count" className="mt-4 text-secondary" />
          <BoxWrapper
            variant="inside"
            classNameWrapper="mt-3 h-[50px]"
            classNameChild="flex items-center justify-between p-[5px] pl-4"
          >
            <input type="text" placeholder="1-32" />
          </BoxWrapper>
        </>
      ) : (
        <>
          {/* Input 2 */}
          <TooltipQuestion title="Mint Count From Gecko" className="mt-4 text-secondary" />
          <BoxWrapper
            variant="inside"
            classNameWrapper="mt-3 h-[50px]"
            classNameChild="flex items-center justify-between p-[5px] pl-4"
          >
            <input type="text" placeholder="0-30" />
          </BoxWrapper>
          <span className="yellow-label-common">
            Сan only return ~20-30 mints at maximum due to their limitation on the api
          </span>

          <TooltipQuestion title="Webserver Thread Count" className="mt-4 text-secondary" />
          <BoxWrapper
            variant="inside"
            classNameWrapper="mt-3 h-[50px]"
            classNameChild="flex items-center justify-between p-[5px] pl-4"
          >
            <input type="text" placeholder="0-30" />
          </BoxWrapper>

          {/* Input 3 */}
          <TooltipQuestion title="Jup Max Accounts" className="mt-4 text-secondary" />
          <BoxWrapper
            variant="inside"
            classNameWrapper="mt-3 h-[50px]"
            classNameChild="flex items-center justify-between p-[5px] pl-4"
          >
            <input type="text" placeholder="1-32" />
          </BoxWrapper>
          <span className="yellow-label-common">Default: 24</span>
        </>
      )}

      <div className="mt-4 grid grid-cols-3">
        <TooltipQuestion title="YELLOWSTONE GRPC" className="col-span-2" />
        <Switch className="justify-self-end" defaultChecked />
        <span className={cn('yellow-label-common col-span-3')}>
          Check plugin instalation before setting up
        </span>
      </div>
    </>
  );
};
