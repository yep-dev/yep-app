import React from 'react';
import { Button } from 'antd';
import { Form } from 'formik';
import styled from 'styled-components';
import NumberSetting from '../../../components/numberSetting';
import StringSetting from '../../../components/stringSetting';
import CurveChart from '../../../components/curveChart';

const Section = styled.div`
  margin-bottom: 32px;
`;

const MachineThrustSettingsComponent = () => (
  <Form>
    <Section>
      <StringSetting name="name" label="Name" />
    </Section>
    <Section>
      <CurveChart />
    </Section>
    <Section>
      <h2>Stepper motor settings</h2>
      <NumberSetting
        name="microsteps_per_rev"
        label="Microsteps per motor revolution"
        addonAfter="microsteps"
      />
      <NumberSetting
        name="wave_resolution"
        label="Wave resolution"
        addonAfter="points/s"
      />
    </Section>
    <Section>
      <h2>Thrust specific settings</h2>
      <NumberSetting
        name="stroke_length"
        label="User max stroke length"
        addonAfter="mm"
      />
      <NumberSetting
        name="stroke_limit"
        label="Machine stroke limit"
        addonAfter="mm"
      />
      <NumberSetting
        name="padding_steps"
        label="Padding from limit switches"
        addonAfter="mm"
      />
    </Section>
    <Section>
      <h2>Automatic calibration values</h2>
      <NumberSetting
        name="max_steps"
        label="Max steps until end of stroke"
        addonAfter="full steps"
        disabled
      />
      <NumberSetting
        name="steps_per_mm"
        label="Number of steps per mm"
        addonAfter="steps/mm"
        disabled
      />
    </Section>
    <Button htmlType="submit">Save</Button>
  </Form>
);

export default MachineThrustSettingsComponent;
