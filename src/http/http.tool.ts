import axios, { AxiosRequestConfig } from "axios";
import { ResponseData } from "../interface";

function postData(url: string, param?: any, config?: AxiosRequestConfig){
  return axios.post<ResponseData>(url, param, config).then(res => res.data);
}

export default {
  postData
};