'use client';

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Props {
  height?: number;
  data: {
    sandwich: number[];
    frontRunning: number[];
    backRunning: number[];
    count: number[];
  };
}

const textStyles = {
  color: '#9e9e9e',
  fontSize: '10px',
};

export const LineAndColumn: React.FC<Props> = ({ height, data }) => {
  const options = {
    chart: {
      margin: [70, 57, 30, 57],
      height: height,
      zoomType: 'xy',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Poppins',
      },
    },
    xAxis: [
      {
        categories: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07'],
        crosshair: true,
        labels: {
          style: textStyles,
        },
      },
    ],
    yAxis: [
      {
        labels: {
          format: '{value}M',
          style: textStyles,
        },
        title: {
          text: '$MEVs',
          style: textStyles,
        },
        gridLineColor: 'rgba(255, 255, 255, 0.03)',
        gridLineWidth: 1,
        max: 2.4,
        min: 0,
      },
      {
        title: {
          text: 'TXN',
          style: textStyles,
        },
        labels: {
          format: '{value}M',
          style: textStyles,
        },
        gridLineColor: 'rgba(255, 255, 255, 0.03)',
        opposite: true,
      },
    ],
    tooltip: {
      backgroundColor: '#191A1C',
      style: {
        color: '#9e9e9e',
      },
    },
    legend: {
      verticalAlign: 'top',
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
        name: 'Sandwich',
        type: 'column',
        yAxis: 1,
        data: data.sandwich,
        tooltip: {
          valueSuffix: 'M',
        },
        color: '#b056ff',
      },
      {
        name: 'FrontRunning',
        type: 'column',
        yAxis: 1,
        data: data.frontRunning,
        tooltip: {
          valueSuffix: 'M',
        },
        color: '#58b9ed',
      },
      {
        name: 'BackRunning',
        type: 'column',
        yAxis: 1,
        data: data.backRunning,
        tooltip: {
          valueSuffix: 'M',
        },
        color: '#14f195',
      },
      {
        name: 'Count',
        type: 'spline',
        data: data.count,
        tooltip: {
          valueSuffix: 'M',
        },
        legendSymbol: 'lineMarker',
        marker: {
          radius: 6,
        },
        color: '#f114b6',
      },
    ],
    subtitle: {
      enabled: false,
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact key={data.backRunning[1]} highcharts={Highcharts} options={options} />;
};
