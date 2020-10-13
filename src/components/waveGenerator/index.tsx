import React, {useEffect, useState} from 'react';
import WaveGeneratorComponent from './WaveGenerator'
import {useApi} from "../../hooks";
import {postWave} from "../../data/endpoints";

const WaveGenerator = () => {
  const {callApi, data} = useApi(postWave)
  const [type, setType] = useState('sine')

  useEffect(() => {
    callApi({type})
  }, [callApi, type])

  const props = {data, setType}

  return (
    <WaveGeneratorComponent {...props} />
  );
}

export default WaveGenerator