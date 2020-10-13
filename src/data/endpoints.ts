import axios from 'axios'

export const postWave = (data: any) => axios.post(`http://local.dockertoolbox.tiangolo.com/api/wave`, data)