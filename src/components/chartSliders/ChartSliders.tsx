import React from 'react';
import { Slider } from 'antd';
import styled from 'styled-components';

const Absolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  padding: ${(props: { margin: string }) => props.margin};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Sliders = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface Props {
  margin: string;
  number: number;
  dataPoints: number[];
  handleSlide: any;
}

const ChartSlidersComponent = ({
  margin,
  number,
  dataPoints,
  handleSlide,
}: Props) => (
  <Absolute>
    <Container margin={margin}>
      <Sliders>
        {Array.from(Array(number), (_, i) => (
          <Slider
            key={i}
            vertical
            defaultValue={dataPoints[i]}
            onAfterChange={handleSlide(i)}
          />
        ))}
      </Sliders>
    </Container>
  </Absolute>
);

export default ChartSlidersComponent;
