import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import PositionChartComponent from './PositionChart';

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
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 0,
          },
          scales: {
            xAxes: [],
            yAxes: [
              {
                gridLines: {
                  color: '#343434',
                  zeroLineColor: '#343434',
                  zeroLineWidth: 1,
                },
                ticks: {
                  min: -1,
                  max: 1,
                },
              },
            ],
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    if (data && chart.current) {
      chart.current.data = {
        labels: data.processedPositions.map((_: any, i: number) => i),
        datasets: [
          {
            ...datasetDefaults,
            label: 'Processed Positions',
            data: data.processedPositions,
            borderColor: 'white',
          },
          {
            ...datasetDefaults,
            label: 'Original Positions',
            data: data.originalPositions,
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
