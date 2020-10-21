import React from 'react';
import { Button, InputNumber, Select } from 'antd';
import PositionChart from './positionChart';
import MovementChart from './movementChart';

const { Option } = Select;

interface Props {
  data: {}[] | null;
  // eslint-disable-next-line no-unused-vars
  setType(type: string): void;
  handleLoopWave(): void;
}

const WaveGeneratorComponent = ({ data, setType, handleLoopWave }: Props) => (
  <div>
    <div>duration</div>
    <InputNumber min={1} defaultValue={10} onChange={console.log} />
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
