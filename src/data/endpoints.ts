import axios from 'axios';

export const postWave = (data: any) => axios.post('http://localhost/api/wave', data);

export const postCommand = (command: string) => () => axios.post(`http://localhost/api/commands/${command}`);
