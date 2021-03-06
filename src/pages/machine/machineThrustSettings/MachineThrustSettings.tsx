import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { Form } from 'formik';
import NumberSetting from '../../../components/numberSetting';
import StringSetting from '../../../components/stringSetting';
import ChartSetting from '../../../components/chartSetting';

const Section = styled.div`
  margin-bottom: 32px;
`;

const MachineThrustSettingsComponent = () => (
  <Form className="ant-form ant-form-vertical">
    <Section>
      <StringSetting name="name" label="Name" />
    </Section>
    <Section>
      <h2>Force response</h2>
      <NumberSetting
        name="tick_stroke_limit"
        label="Stroke in tick limit"
        addonAfter="mm"
      />
      <NumberSetting
        name="force_limit"
        label="Max force applied"
        addonAfter="g"
      />
      <ChartSetting
        name="stroke_force_chart"
        label="Max stroke for the given force"
        interval={10}
        margin="0 130px 50px 42px"
      />
    </Section>
    <Section>
      <h2>Stepper motor</h2>
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
      <h2>Thrust</h2>
      <NumberSetting
        name="stroke_limit"
        label="User-set max stroke limit"
        addonAfter="mm"
      />
      <NumberSetting
        name="max_stroke"
        label="Machine max stroke"
        addonAfter="mm"
      />
      <NumberSetting
        name="padding_mm"
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
