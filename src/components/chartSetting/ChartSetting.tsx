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
}

const ChartSettingComponent = ({ label, name, chartRef }: Props) => (
  <SettingsField label={label} name={name} vertical>
    <Container>
      <canvas ref={chartRef} />
      <ChartSliders fieldName={name} margin="0 145px 35px 20px" />
    </Container>
  </SettingsField>
);

export default ChartSettingComponent;
