import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { message } from "antd";
import { ResponseData } from "../types";

const http = axios.create({
  baseURL: '/vip/',
  timeout: 10000,
  headers: {
    'x-platform': 'web'
  }
});

http.interceptors.response.use(response => response, error => {
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

function postData(url: string, param?: any, config?: AxiosRequestConfig){
  return http.post<ResponseData>(url, param, config).then(res => res.data);
}
export default {
  http,
  postData
};