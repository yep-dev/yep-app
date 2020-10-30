import React, { useEffect, useState } from 'react';
import WaveGeneratorComponent from './WaveGenerator';
import { useApi } from '../../hooks';
import endpoints from '../../data/endpoints';

const WaveGenerator = () => {
  const getWave = useApi(endpoints.postGetWave);
  const runWave = useApi(endpoints.postRunWave);
  const [type, setType] = useState('sine');
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    getWave.callApi({ type, duration });
  }, [getWave.callApi, type, duration]);

  const handleLoopWave = () => {
    runWave.callApi({ type, duration });
  };

  const props = {
    data: getWave.data,
    setType,
    handleLoopWave,
    setDuration,
  };

  return <WaveGeneratorComponent {...props} />;
};

export default WaveGenerator;
