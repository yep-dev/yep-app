import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  background-color: transparent;
  border-bottom: 1px solid #303030;
  display: flex;
`;

const Section = styled.div`
  border-left: 1px solid #303030;
  padding: 16px 32px 16px 20px;
  display: flex;
  align-items: center;

  > * {
    margin-left: 12px;
  }
`;

const Title = styled.h1`
  margin: auto auto auto 32px;
  font-size: 24px;
`;

interface props {
  handleStop(): void;
  handleCalibrate(): void;
}

const HeaderComponent = ({ handleStop, handleCalibrate }: props) => (
  <>
    <Container>
      <Title>asd</Title>
      <Section>
        <div>Machine</div>
      </Section>
      <Section>
        <Button size="large" onClick={handleCalibrate}>
          CALIBRATE
        </Button>
        <Button type="primary" size="large" danger onClick={handleStop}>
          STOP
        </Button>
      </Section>
    </Container>
  </>
);

export default HeaderComponent;
