import React, { useEffect, useRef } from 'react';
import {
  Chart,
  LinearScale,
  LineController,
  LineElement,
  CategoryScale,
  PointElement,
} from 'chart.js';
import PositionChartComponent from './PositionChart';

Chart.register(
  LineController,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

interface Props {
  data: any | null;
}

const datasetDefaults = {
  fill: false,
  backgroundColor: 'red',
  pointRadius: 2,
  borderColor: 'red',
  borderWidth: 1,
  lineTension: 0,
};

const PositionChart = ({ data }: Props) => {
  const chartElement = useRef<HTMLCanvasElement>(null);
  const chart = useRef<any>(null);

  useEffect(() => {
    if (chartElement.current) {
      chart.current = new Chart(chartElement.current, {
        type: 'line',
        data: {
          datasets: [],
          labels: [],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: -1,
              max: 1,
              gridLines: {
                color: '#343434',
                // zeroLineColor: '#343434',
                // zeroLineWidth: 1,
              },
            },
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    if (data && chart.current) {
      chart.current.data = {
        labels: data.positions.map((_: any, i: number) => i),
        datasets: [
          {
            ...datasetDefaults,
            label: 'Original Positions',
            data: data.positions,
          },
        ],
      };
      chart.current.update();
    }
  }, [data]);

  const props = { chartRef: chartElement };

  return <PositionChartComponent {...props} />;
};

export default PositionChart;
