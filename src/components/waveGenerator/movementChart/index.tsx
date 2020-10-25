import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import MovementChartComponent from './MovementChart';

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

const MovementChart = ({ data }: Props) => {
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
                  zeroLineColor: '#676767',
                  zeroLineWidth: 3,
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
        labels: data.movements.map((_: any, i: number) => i),
        datasets: [
          {
            ...datasetDefaults,
            label: 'Movements',
            data: data.movements,
            borderColor: 'white',
          },
        ],
      };
      chart.current.update();
    }
  }, [data]);
  //
  const props = { chartRef: chartElement };

  return <MovementChartComponent {...props} />;
};

export default MovementChart;
