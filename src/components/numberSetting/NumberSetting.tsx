import React from 'react';
import { InputNumber } from 'antd';
import { FieldInputProps } from 'formik';
import styled from 'styled-components';
import cx from 'classnames';
import SettingsField from '../settingsField';

const StyledInputNumber = styled(InputNumber)`
  width: 100%;
`;

interface Props {
  label: string;
  field: FieldInputProps<number>;
  addonAfter: string;
}

const NumberSettingComponent = ({
  label,
  field,
  addonAfter,
  ...inputProps
}: Props) => (
  <SettingsField label={label} name={field.name}>
    <div
      className={cx('ant-input-wrapper', 'ant-input-group', {
        'addon-after': addonAfter,
      })}
    >
      <StyledInputNumber {...field} {...inputProps} />
      {addonAfter && (
        <span className="ant-input-group-addon">{addonAfter}</span>
      )}
    </div>
  </SettingsField>
);

export default NumberSettingComponent;
