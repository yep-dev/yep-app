import React from 'react';
import { Button } from 'antd';

interface Props {
  resetSettings(): void;
}

const GeneralSettingsComponent = ({ resetSettings }: Props) => (
  <div>
    <Button onClick={resetSettings} danger>
      Reset all settings
    </Button>
  </div>
);

export default GeneralSettingsComponent;
