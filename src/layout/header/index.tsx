import React from 'react';
import HeaderComponent from './Header';
import { useApi } from '../../hooks';
import { postCommand } from '../../data/endpoints';

const Header = () => {
  const stopCommand = useApi(postCommand('stop'));
  const calibrateCommand = useApi(postCommand('calibrate'));

  const props = {
    handleStop: stopCommand.callApi,
    handleCalibrate: calibrateCommand.callApi,
  };
  return <HeaderComponent {...props} />;
};

export default Header;
