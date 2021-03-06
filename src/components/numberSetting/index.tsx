import React from 'react';
import { useField, useFormikContext } from 'formik';
import { InputProps } from 'antd/es/input';
import NumberSettingComponent from './NumberSetting';

interface Props extends InputProps {
  name: string;
  label: string;
  addonAfter: string;
}

const NumberSetting = ({ name, label, addonAfter, ...inputProps }: Props) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  inputProps.onChange = (value) => setFieldValue(name, value);
  const props = { label, field, addonAfter, ...inputProps };

  return <NumberSettingComponent {...props} />;
};

export default NumberSetting;
