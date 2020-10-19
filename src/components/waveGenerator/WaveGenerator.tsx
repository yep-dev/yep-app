import React from 'react';
import { InputNumber, Select } from 'antd';
import PositionChart from './positionChart';
import MovementChart from './movementChart';

const { Option } = Select;

interface Props {
  data: {}[] | null;
  // eslint-disable-next-line no-unused-vars
  setType(type: string): void;
}

const WaveGeneratorComponent = ({ data, setType }: Props) => (
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
    <PositionChart data={data} />
    <MovementChart data={data} />
  </div>
);

export default WaveGeneratorComponent;
