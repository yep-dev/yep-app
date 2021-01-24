import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { propOr } from 'ramda';
import HeaderComponent from './Header';
import { useApi } from '../../hooks';
import endpoints from '../../data/endpoints';
import status from '../../data/status';
import { headerTitles } from '../../routing';

const Header = () => {
  const postCommand = useApi(endpoints.postCommand);
  const location = useLocation();
  const statusData = useSelector(status.selectors.status);
  const title: string = propOr('', location.pathname, headerTitles);

  const props = {
    title,
    handleStop: () => postCommand.callApi({ type: 'stop' }),
    hadleEnd: () => postCommand.callApi({ type: 'end' }),
    handleCalibrate: () => postCommand.callApi({ type: 'calibrate' }),
    statusData,
  };
  return <HeaderComponent {...props} />;
};

export default Header;
