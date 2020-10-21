import axios from 'axios';

export const postGetWave = (data: any) =>
  axios.post('http://localhost/api/wave/get', data);

export const postRunWave = (data: any) =>
  axios.post('http://localhost/api/wave/run', data);

export const postCommand = (command: string) => () =>
  axios.post(`http://localhost/api/commands/${command}`);
