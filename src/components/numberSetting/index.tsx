import React from 'react';
import { useField } from 'formik';
import { InputProps } from 'antd/es/input';
import NumberSettingComponent from './NumberSetting';

interface Props extends InputProps {
  name: string;
  label: string;
}

const NumberSetting = ({ name, label, ...inputProps }: Props) => {
  const [field] = useField(name);
  const props = { label, field, ...inputProps };

  return <NumberSettingComponent {...props} />;
};

export default NumberSetting;
