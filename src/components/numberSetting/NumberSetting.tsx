import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { FieldInputProps } from 'formik';

interface Props {
  label: string;
  field: FieldInputProps<string>;
}

const Container = styled.div`
  max-width: 300px;
  margin: 12px 0;
`;

const NumberSettingComponent = ({ label, field, ...inputProps }: Props) => (
  <Container>
    <div>{label}</div>
    <Input type="number" {...field} {...inputProps} />
  </Container>
);

export default NumberSettingComponent;
