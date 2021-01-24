import React from 'react';
import * as R from 'ramda';
import { useField } from 'formik';
import ChartSlidersComponent from './ChartSliders';

interface Props {
  margin: string;
  fieldName: string;
}

const ChartSliders = ({ margin, fieldName }: Props) => {
  const [field, _, { setValue }] = useField(fieldName);
  const handleSlide = (index: number) => (value: number) => {
    setValue(R.update(index, value, field.value));
  };

  const props = {
    margin,
    dataPoints: field.value,
    handleSlide,
  };
  return <ChartSlidersComponent {...props} />;
};

export default ChartSliders;
