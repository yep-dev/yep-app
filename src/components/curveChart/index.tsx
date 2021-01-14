import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import CurveChartComponent from './CurveChart';
import endpoints from '../../data/endpoints';
import { useApi } from '../../hooks';

const datasetDefaults = {
  fill: false,
  backgroundColor: 'red',
  pointRadius: 2,
  borderColor: 'red',
  borderWidth: 1,
  lineTension: 0,
};

const initialDataPoints = [50, 40, 30, 25, 23, 22, 20, 18, 15, 10, 0];
const labels = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const CurveChart = () => {
  const chartElement = useRef<HTMLCanvasElement>(null);
  const chart = useRef<any>(null);
  const [dataPoints, setDataPoints] = useState(initialDataPoints);
  const postSettingsCurve = useApi(endpoints.postSettingsCurve);

  useEffect(() => {
    console.log('DUPA', dataPoints);
    postSettingsCurve.callApi({
      model: 'machine-thrust',
      id: 'default',
      data: dataPoints,
    });
  }, [dataPoints]);

  useEffect(() => {
    if (postSettingsCurve.data) {
      chart.current.data.datasets[0].data = postSettingsCurve.data;
      chart.current.data.labels = Array.from({ length: 1000 }, (x, i) => i);
      chart.current.update();
    }
  }, [postSettingsCurve.data]);

  useEffect(() => {
    if (chartElement.current) {
      chart.current = new Chart(chartElement.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'acceleration',
              borderColor: '#fff',
              data: dataPoints,
            },
          ],
          labels,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 0,
          },
          scales: {
            x: {
              min: 0,
              max: 1000,
              ticks: {
                maxTicksLimit: 10,
                major: {
                  enabled: true,
                },
              },
              gridLines: {
                color: '#343434',
              },
            },
            y: {
              min: 0,
              max: 100,
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

  // useEffect(() => {
  //   if (data && chart.current) {
  //     chart.current.data = {
  //       labels: data.processedPositions.map((_: any, i: number) => i),
  //       datasets: [
  //         {
  //           ...datasetDefaults,
  //           label: 'Processed Positions',
  //           data: data.processedPositions,
  //           borderColor: 'white',
  //         },
  //         {
  //           ...datasetDefaults,
  //           label: 'Original Positions',
  //           data: data.originalPositions,
  //         },
  //       ],
  //     };
  //     chart.current.update();
  //   }
  // }, [data]);

  const props = { chartRef: chartElement, dataPoints, setDataPoints };

  return <CurveChartComponent {...props} />;
};

export default CurveChart;
