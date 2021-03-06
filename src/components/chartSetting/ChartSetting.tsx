import React from 'react';
import styled from 'styled-components';
import ChartSliders from '../chartSliders';
import SettingsField from '../settingsField';

const Container = styled.div`
  height: 400px;
  position: relative;
  margin-top: 12px;
`;

interface Props {
  chartRef: any;
  label: string;
  name: string;
  margin: string;
}

const ChartSettingComponent = ({ label, name, chartRef, margin }: Props) => (
  <SettingsField label={label} name={name} vertical>
    <Container>
      <canvas ref={chartRef} />
      <ChartSliders fieldName={name} margin={margin} />
    </Container>
  </SettingsField>
);

export default ChartSettingComponent;
