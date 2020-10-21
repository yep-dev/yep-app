import React from 'react';
import { useSelector } from 'react-redux';
import HeaderComponent from './Header';
import { useApi } from '../../hooks';
import { postCommand } from '../../data/endpoints';
import status from '../../data/status';

const Header = () => {
  const stopCommand = useApi(postCommand('stop'));
  const calibrateCommand = useApi(postCommand('calibrate'));

  const statusData = useSelector(status.selectors.status);

  const props = {
    handleStop: stopCommand.callApi,
    handleCalibrate: calibrateCommand.callApi,
    statusData,
  };
  return <HeaderComponent {...props} />;
};

export default Header;
