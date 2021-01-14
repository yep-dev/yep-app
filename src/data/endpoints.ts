import axios from 'axios';

const apiUrl = 'http://localhost/api/';

const postGetWave = (data: any) => axios.post(`${apiUrl}wave/get`, data);

const postRunWave = (data: any) => axios.post(`${apiUrl}wave/run`, data);

const postCommand = (command: string) => () =>
  axios.post(`${apiUrl}commands/${command}`);

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
  data,
}: {
  model: string;
  id: number;
  data: any;
}) => axios.post(`${apiUrl}curve/`, { data });

export default {
  postGetWave,
  postRunWave,

  postCommand,

  getSettings,
  putSettings,
  resetSettings,

  postSettingsCurve,
};
