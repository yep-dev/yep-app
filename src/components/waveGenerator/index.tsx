import React, { useEffect, useState } from 'react';
import WaveGeneratorComponent from './WaveGenerator';
import { useApi } from '../../hooks';
import { postGetWave, postRunWave } from '../../data/endpoints';

const WaveGenerator = () => {
  const postWaveApi = useApi(postGetWave);
  const runLoopWave = useApi(postRunWave);
  const [type, setType] = useState('sine');
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    postWaveApi.callApi({ type, duration });
  }, [postWaveApi.callApi, type, duration]);

  const handleLoopWave = () => {
    runLoopWave.callApi({ type, duration });
  };

  console.log(postWaveApi.data);
  const props = {
    data: postWaveApi.data,
    setType,
    handleLoopWave,
    setDuration,
  };

  return <WaveGeneratorComponent {...props} />;
};

export default WaveGenerator;
