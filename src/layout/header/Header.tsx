import React from 'react';
import { Button, Tag } from 'antd';
import styled from 'styled-components';
import { propOr } from 'ramda';
import { StatusState } from '../../data/status';

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

const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
`;

const StatusTag = styled(Tag)`
  margin: 4px auto 0;
`;

interface props {
  title: string;
  handleStop(): void;
  handleCalibrate(): void;
  statusData: StatusState;
}

const statusToColorMap = {
  waiting: 'success',
  running: 'processing',
  error: 'error',
  warning: 'warning',
};

const HeaderComponent = ({
  title,
  handleStop,
  handleCalibrate,
  statusData,
}: props) => (
  <>
    <Container>
      <Title>{title}</Title>
      <Section>
        {Object.entries(statusData).map(
          ([device, status]: [string, string]) => (
            <Status key={device}>
              <div>{device}</div>
              <StatusTag color={propOr('default', status, statusToColorMap)}>
                {status || 'disconnected'}
              </StatusTag>
            </Status>
          )
        )}
      </Section>
      <Section>
        <Button size="large" onClick={handleCalibrate}>
          CALIBRATE
        </Button>
        {statusData.machine?.type === 'waiting' ? (
          <Button type="primary" size="large" onClick={handleStop}>
            RESET
          </Button>
        ) : (
          <Button type="primary" size="large" danger onClick={handleStop}>
            STOP
          </Button>
        )}
      </Section>
    </Container>
  </>
);

export default HeaderComponent;
