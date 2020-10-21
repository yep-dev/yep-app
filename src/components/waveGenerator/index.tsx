import React, { useEffect, useState } from 'react';
import WaveGeneratorComponent from './WaveGenerator';
import { useApi } from '../../hooks';
import { postGetWave, postRunWave } from '../../data/endpoints';

const WaveGenerator = () => {
  const postWaveApi = useApi(postGetWave);
  const runLoopWave = useApi(postRunWave);
  const [type, setType] = useState('sine');

  useEffect(() => {
    postWaveApi.callApi({ type });
  }, [postWaveApi.callApi, type]);

  const handleLoopWave = () => {
    runLoopWave.callApi({ type });
  };

  const props = { data: postWaveApi.data, setType, handleLoopWave };

  return <WaveGeneratorComponent {...props} />;
};

export default WaveGenerator;
