import React from 'react';
import GeneralSettingsComponent from './GeneralSettings';
import { useApi } from '../../hooks';
import endpoints from '../../data/endpoints';

const GeneralSettings = () => {
  const resetSettings = useApi(endpoints.resetSettings);

  const props = { resetSettings: resetSettings.callApi };

  return <GeneralSettingsComponent {...props} />;
};

export default GeneralSettings;
