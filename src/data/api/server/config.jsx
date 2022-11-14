import axios from 'axios';
import auth from './auth'

const ApiViajaSeguro = axios.create({
  baseURL: 'https://pocc-services.herokuapp.com/',
});

ApiViajaSeguro.interceptors.request.use(
  async (config) => {
    let token = '';
    try {
      token = auth.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        config.headers.Authorization = `Basic dXNlcjpwYXNz`;
      }
    } catch (e) {
      console.info('token not available');
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default ApiViajaSeguro;
