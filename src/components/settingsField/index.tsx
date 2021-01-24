import React, { ReactNode } from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';
import { settingsTexts } from '../../texts';

const { Item } = Form;

const Container = styled.div`
  display: flex;
`;

const StyledItem = styled(Item)`
  ${(props: { $vertical?: boolean }) =>
    !props.$vertical &&
    `
    max-width: 300px;
  `}
  width: 100%;

  .ant-form-item-label {
    padding-bottom: 0;
  }

  label {
    font-size: 15px;
  }
`;

const Name = styled.div`
  color: #aaa;
  margin-bottom: 4px;
`;

const Description = styled.div`
  width: 100%;
  border-left: 4px solid #666;
  margin: 0 0 24px 16px;
  padding-left: 16px;
  max-width: 500px;
  color: #aaa;
`;

interface Props {
  label: string;
  name: string;
  children: ReactNode;
  vertical?: boolean;
}

const SettingsField = ({ label, name, children, vertical = false }: Props) => (
  <Container>
    <StyledItem label={label} name="asd" $vertical={vertical}>
      <>
        <Name>{name}</Name>
        {children}
      </>
    </StyledItem>
    {settingsTexts[name] && <Description>{settingsTexts[name]}</Description>}
  </Container>
);

export default SettingsField;
