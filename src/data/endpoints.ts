import axios from 'axios';

const apiUrl = 'http://localhost/api/';

const postGetWave = (data: any) => axios.post(`${apiUrl}wave/get`, data);

const postRunWave = (data: any) => axios.post(`${apiUrl}wave/run`, data);

const postCommand = (data: any) => axios.post(`${apiUrl}commands/run/`, data);

const getSettings = ({ model, id }: { model: string; id: number }) =>
  axios.get(`${apiUrl}settings/${model}/${id}`);

const putSettings = ({
  model,
  id,
  data,
}: {
  model: string;
  id: number;
  data: any;
}) => axios.put(`${apiUrl}settings/${model}/${id}`, data);

const resetSettings = () => axios.post(`${apiUrl}setup/initialize/`);

const postSettingsCurve = ({
  model,
  id,
  points,
}: {
  model: string;
  id: number;
  points: number[];
}) => axios.post(`${apiUrl}curve/`, { points });

export default {
  postGetWave,
  postRunWave,

  postCommand,

  getSettings,
  putSettings,
  resetSettings,

  postSettingsCurve,
};
