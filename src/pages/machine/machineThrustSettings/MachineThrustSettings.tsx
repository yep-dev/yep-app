import React from 'react';
import { Button } from 'antd';
import { Form } from 'formik';
import styled from 'styled-components';
import NumberSetting from '../../../components/numberSetting';
import StringSetting from '../../../components/stringSetting';

const Section = styled.div`
  margin-bottom: 32px;
`;

const MachineThrustSettingsComponent = () => (
  <Form>
    <Section>
      <StringSetting name="name" label="Name" />
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
        label="Max length of stroke"
        addonAfter="mm"
      />
      <NumberSetting
        name="stroke_limit"
        label="Length of stroke limit"
        addonAfter="mm"
      />
      <NumberSetting
        name="padding_steps"
        label="Padding from limit switches"
        addonAfter="full steps"
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
    </Section>
    <Button type="primary" htmlType="submit">
      Save
    </Button>
  </Form>
);

export default MachineThrustSettingsComponent;
