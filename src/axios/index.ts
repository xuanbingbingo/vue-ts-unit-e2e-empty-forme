import axios from "axios";
import { Message } from "element-ui";
const service = axios.create({
  baseURL: "/",
  timeout: 5000,
  withCredentials: true // 允许携带cookie
});
service.interceptors.request.use((config: any) => {
  return config;
});
// respone拦截
// service.interceptors.response.use(
//   (response: any) => {
//     if (response.status === 200 && response.headers["content-type"] === "text/html") {
//       window.location.hash = "#/login";
//     } else {
//       return response;
//     }
//   },
//   (error) => {
//     if (error.message === "Network Error") {
//       window.location.hash = "#/login";
//     } else {
//       Message({
//         message: error.message,
//         duration: 0,
//         showClose: true,
//         type: "error"
//       });
//     }
//     return Promise.reject(error);
//   }
// );

export default service;
