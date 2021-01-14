import React from 'react';
import * as R from 'ramda';
import ChartSlidersComponent from './ChartSliders';

interface Props {
  margin: string;
  number: number;
  dataPoints: number[];
  setDataPoints: any;
}

const ChartSliders = ({ margin, number, dataPoints, setDataPoints }: Props) => {
  const handleSlide = (index: number) => (value: number) => {
    setDataPoints(R.update(index, value));
  };

  const props = { margin, number, dataPoints, handleSlide };
  return <ChartSlidersComponent {...props} />;
};

export default ChartSliders;
