import axios from 'axios';

export const authAxios = axios.create({
  baseURL: 'http://192.168.0.17:8080/auth/'
});
