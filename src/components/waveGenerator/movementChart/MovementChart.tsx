import React from 'react';
import styled from "styled-components";

interface Props {
  chartRef: any;
}


const Container = styled.div`
  height: 300px;
`

const MovementChartComponent = ({ chartRef }: Props) => (
  <Container>
    <canvas ref={chartRef} />
  </Container>
)

export default MovementChartComponent