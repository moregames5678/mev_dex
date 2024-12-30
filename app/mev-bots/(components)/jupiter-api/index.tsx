import { BoxWrapper, TitleSection } from '@/components/shared';
import { getDataChart } from '@/lib/status-jup-ag';
import { RpcApiAndViewCharts } from './rpc-api-and-view-charts';
import { InputsIntermediumConf } from './inputs-intermedium-conf';

type Props = {
  chart?: boolean;
  secondTitle?: string;
  nodeBot?: boolean;
};

const secTitle = 'ml-2.5 text-sm font-normal text-secondary relative -top-9 left-[148px]';

export default async function JupiterApi({ chart = true, secondTitle, nodeBot }: Props) {
  const v6 = await getDataChart('https://status.jup.ag/r/3ad2/esou5');
  const priceAPI = await getDataChart('https://status.jup.ag/r/3ad2/eurrf');
  const statusAPI = await getDataChart('https://status.jup.ag/r/3ad2/ewzlc');

  return (
    <BoxWrapper>
      <TitleSection title="Jupiter API" />
      {secondTitle && <span className={secTitle}>{secondTitle}</span>}

      {chart && (
        <>
          <RpcApiAndViewCharts dataChart={[v6, priceAPI, statusAPI]} />
          <TitleSection
            title="Intermedium Mints Configuration"
            unableQuestionMark
            className="mb-5"
          />
        </>
      )}

      <InputsIntermediumConf nodeBot={nodeBot} />
    </BoxWrapper>
  );
}
