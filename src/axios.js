import axios from 'axios';

const API_URL = 'http://192.168.0.17:8080/';

export const authAxios = axios.create({
  baseURL: API_URL + 'auth/'
});

export const productAxios = axios.create({
  baseURL: API_URL + 'products/'
});
