import React from 'react';
import { Button, InputNumber, Select } from 'antd';
import PositionChart from './positionChart';
import MovementChart from './movementChart';

const { Option } = Select;

interface Props {
  data: any[] | null;
  setType(type: string): void;
  handleLoopWave(): void;
  setDuration(duration: any): void;
}

const WaveGeneratorComponent = ({
  data,
  setType,
  setDuration,
  handleLoopWave,
}: Props) => (
  <div>
    <div>duration</div>
    <InputNumber min={0.2} defaultValue={5} step={0.1} onChange={setDuration} />
    seconds
    <div>type</div>
    <Select defaultValue="sine" style={{ width: 120 }} onChange={setType}>
      <Option value="sine">Sine</Option>
      <Option value="square">Square</Option>
    </Select>
    <div>postprocessing</div>
    <Button type="primary" onClick={handleLoopWave}>
      Run wave in loop
    </Button>
    <PositionChart data={data} />
    <MovementChart data={data} />
  </div>
);

export default WaveGeneratorComponent;
