import React from 'react';
import styled from 'styled-components';
import ChartSlidersComponent from '../chartSliders';

interface Props {
  chartRef: any;
  dataPoints: number[];
  setDataPoints: any;
}

const Container = styled.div`
  height: 400px;
  position: relative;
`;

const CurveChartComponent = ({
  chartRef,
  dataPoints,
  setDataPoints,
}: Props) => (
  <Container>
    <canvas ref={chartRef} />
    <ChartSlidersComponent
      number={10}
      margin="0 145px 35px 20px"
      dataPoints={dataPoints}
      setDataPoints={setDataPoints}
    />
  </Container>
);

export default CurveChartComponent;
