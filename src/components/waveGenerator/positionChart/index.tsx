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
  const chartRef = useRef<HTMLCanvasElement>(null);
  let chart: any = null;

  useEffect(() => {
    if (chartRef.current && data) {
      console.log(data);
      chart = new Chart(chartRef.current, {
        type: 'line',
        data: {
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
                  zeroLineColor: '#343434',
                  zeroLineWidth: 1,
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

  return <PositionChartComponent {...props} />;
};

export default PositionChart;
