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
  const chartRef = useRef<HTMLCanvasElement>(null);
  let chart: any = null;

  useEffect(() => {
    if (chartRef.current && data) {
      console.log(data);
      chart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: data.movements.map((_: any, i: number) => i),
          datasets: [
            {
              ...datasetDefaults,
              label: 'Movements',
              data: data.movements,
              borderColor: 'white',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
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
  }, [data]);

  // useEffect(() => {
  //   if (data) {
  //     chart.data.datasets[0].data = data
  //   }
  // }, [data])
  //
  const props = { chartRef };

  return <MovementChartComponent {...props} />;
};

export default MovementChart;
