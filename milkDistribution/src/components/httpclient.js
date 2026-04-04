import axios, { Axios } from "axios"
import {store } from '../redux/store'


axios.defaults.baseURL = "http://192.168.1.148:8000/"
const http = axios.create({
  timeout: 100000000000,
  withCredentials: false,
});

export const httpClient = (method, url, data, config = {}) => {
  debugger
  try{
    const token = store.getState()?.user?.user?.access_token;
    console.log(token,"rishitroken")
    if (token && token.length > 0)
      http.defaults.headers.common['Authorization'] = `Token ${token}`;
       config.headers = {
        ...config.headers,
        'Authorization': `Token ${token}`,
      };
    switch (method) {
      case "get":
        return http.get(url,{params:data})
      case "post":
        return http.post(url,data,config)
      case "patch":
        return http.patch(url,data,config)
      case "put":
        return http.put(url,data,config)
      case "delete":
        return http.delete(url)
      case "options":
        return http.options(url)
      default:
        break;
    }
  }catch (error) {
    debugger
    console.log(error)
  }
}