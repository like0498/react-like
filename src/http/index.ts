import axios, { AxiosError } from "axios";
import { message } from "antd";

axios.defaults.baseURL = '/vip/';
axios.defaults.timeout = 10000;
axios.defaults.headers['X-Platform'] = 'web';
axios.interceptors.response.use(response => response, error => {
  return handleError(error);
})

function handleError(error: AxiosError){
  switch (error.code) {
    case AxiosError.ERR_NETWORK:
      message.error('网关超时');
      break;
    case AxiosError.ETIMEDOUT:
    case AxiosError.ECONNABORTED:
      message.error('请求超时，请稍后重试');
      break;
    default:
      message.error('请求失败o(╥﹏╥)o');
      break;
  }
  return Promise.reject(error);
}
