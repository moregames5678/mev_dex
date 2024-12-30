'use client';

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Line: React.FC<{
  data: number[];
  color?: string;
  height?: number;
  type?: 'area' | 'areaspline';
  lineWidth?: number;
  themeColor?: boolean;
}> = ({ data, color = 'rgb(255, 0, 221)', height, type, lineWidth = 2, themeColor }) => {
  const changeRGBAColor = (color: string, opacity: number = 1) => {
    return `${color.slice(0, -1)}, ${opacity})`;
  };

  const options = {
    chart: {
      margin: [0, 0, 0, 0],
      height: height,
      zoomType: 'xy',
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
      align: 'left',
    },
    tooltip: {
      backgroundColor: '#191A1C',
      style: {
        color: '#9e9e9e',
      },
      formatter: function (this: Highcharts.Point): string {
        return `${this.series.name}: <b>+${this.y}%</b>`;
      },
    },
    xAxis: [
      {
        minPadding: 0,
        categories: [],
        labels: {
          enabled: false,
        },
        lineWidth: 0,
      },
    ],
    yAxis: [
      {
        title: '',
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
      },
    ],
    series: [
      {
        name: 'Solana',
        type: type ? type : 'areaspline',
        pointPlacement: 'on',
        data: data,
        color: themeColor
          ? {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                { 0: 0, 1: '#73A8F8' },
                { 0: 1, 1: 'rgba(58, 87, 232, 0.80)' },
              ],
            }
          : color,
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, changeRGBAColor(color, 0.27)],
            [1, changeRGBAColor(color, 0)],
          ],
        },
        fillOpacity: 0,
        lineWidth: lineWidth,
        marker: {
          enabled: false,
        },
        onPoint: {
          connectorOptions: {
            width: 0,
          },
        },
      },
    ],
    exporting: {
      buttons: {
        contextButton: {
          enabled: false,
        },
      },
    },
    subtitle: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
  };

  return <HighchartsReact key={data[1]} highcharts={Highcharts} options={options} />;
};
