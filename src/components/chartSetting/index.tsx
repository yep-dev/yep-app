import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { useField } from 'formik';
import ChartSettingComponent from './ChartSetting';
import endpoints from '../../data/endpoints';
import { useApi } from '../../hooks';

interface ChartSettingProps {
  name: string;
  label: string;
  interval: number;
  margin: string;
}

const ChartSetting = ({ name, label, interval, margin }: ChartSettingProps) => {
  const chartElement = useRef<HTMLCanvasElement>(null);
  const chart = useRef<any>(null);
  const [field] = useField(name);
  const postSettingsCurve = useApi(endpoints.postSettingsCurve);

  useEffect(() => {
    postSettingsCurve.callApi({
      model: 'machine-thrust',
      id: 'default',
      points: field.value,
    });
  }, [field.value]);

  useEffect(() => {
    if (postSettingsCurve.data) {
      chart.current.data.datasets[0].data = postSettingsCurve.data;
      chart.current.data.labels = Array.from({ length: 100 }, (x, i) => i);
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
              data: field.value,
            },
          ],
          labels: Array.from(
            { length: field.value.length },
            (_, i) => i * interval
          ),
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
              max: 100,
              ticks: {
                maxTicksLimit: 10,
                major: {
                  enabled: true,
                },
              },
              gridLines: {
                color: '#343434',
              },
              scaleLabel: {
                display: true,
                labelString: 'Force (% of force_limit)',
                color: '#fff',
              },
            },
            y: {
              min: 0,
              max: 100,
              gridLines: {
                color: '#343434',
              },
              scaleLabel: {
                display: true,
                labelString: 'Max stroke per tick (% of tick_stroke_limit)',
                color: '#fff',
              },
            },
          },
        },
      });
    }
  }, []);

  const props = {
    chartRef: chartElement,
    label,
    name,
    margin
  };

  return <ChartSettingComponent {...props} />;
};

export default ChartSetting;
