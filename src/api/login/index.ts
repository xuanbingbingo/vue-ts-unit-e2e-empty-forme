// 登录用到的接口定义
import axios from "@/axios";
import dataUrl from "@/config/url"; // import请求接口地址配置
export default {
  login(options: any) {
    return axios({
      url: dataUrl.login,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: options
    }).then((res) => {
      return res.data;
    });
  }
};
