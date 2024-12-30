'use client';

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Props {
  height?: number;
  data: {
    labels: string[] | number[];
    data: number[];
  };
}

const textStyles = {
  color: '#9e9e9e',
  fontSize: '10px',
};

export const LineCompass: React.FC<Props> = ({ height, data }) => {
  const options = {
    chart: {
      margin: [75, 20, null, null],
      height: height,
      zoomType: 'xy',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Poppins',
      },
    },
    xAxis: [
      {
        categories: data.labels.map((label) => label + ' min ago'),
        crosshair: true,
        labels: {
          format: '{value}',
          style: textStyles,
        },
      },
    ],
    yAxis: [
      {
        labels: {
          format: '{value} ms',
          style: textStyles,
        },
        title: {
          enabled: false,
        },
        gridLineColor: 'rgba(255, 255, 255, 0.03)',
        gridLineWidth: 1,
        max: 600,
        min: 0,
        step: 200,
      },
    ],
    tooltip: {
      backgroundColor: '#191A1C',
      style: {
        color: '#9e9e9e',
      },
    },
    legend: {
      verticalAlign: 'left',
      align: 'left',
      x: -8,
      symbolWidth: 60,
      backgroundColor: 'transparent',
      itemStyle: { ...textStyles, fontSize: '12px' },
      itemHoverStyle: {
        color: ' #9e9e9ebe',
      },
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
        borderRadius: 0,
        pointWidth: 45,
      },
    },
    series: [
      {
        name: '',
        lineWidth: 2,
        type: 'spline',
        data: data.data,
        tooltip: {
          valueSuffix: ' sm',
        },
        marker: {
          radius: 4,
        },
        color: '#44ffa2',
      },
    ],
    subtitle: {
      enabled: false,
    },
    title: {
      text: 'Estimated Block Time',
      align: 'left',
      style: textStyles,
      y: 38,
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact key={'data.data[0]'} highcharts={Highcharts} options={options} />;
};
