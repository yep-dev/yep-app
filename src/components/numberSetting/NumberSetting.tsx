import React from 'react';
import { Input } from 'antd';
import { FieldInputProps } from 'formik';
import SettingsField from '../settingsField';

interface Props {
  label: string;
  field: FieldInputProps<string>;
}

const NumberSettingComponent = ({ label, field, ...inputProps }: Props) => (
  <SettingsField label={label} name={field.name}>
    <Input type="number" {...field} {...inputProps} />
  </SettingsField>
);

export default NumberSettingComponent;
