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

const StringSettingComponent = ({ label, field, ...inputProps }: Props) => (
  <Container>
    <div>{label}</div>
    <Input {...field} {...inputProps} />
  </Container>
);

export default StringSettingComponent;
