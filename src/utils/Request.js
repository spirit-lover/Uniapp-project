// noinspection EqualityComparisonWithCoercionJS

import Message from "./Message";
import Api from "./Api";
const contentTypeForm = "";
const contentTypeJson = "";
const responseTypeJson = "json";

let port = uni.getSystemInfoSync().uniPlatform;
console.log(port);
let BASE_URL = null;
if (port == "web") {
  BASE_URL = "/api";
} else {
  BASE_URL = Api.domain;
}
const request = (config) => {
  const {
    url,
    params,
    dataType,
    showLoading = true,
    showError = true,
    errorCallback,
    responseType = responseTypeJson,
  } = config;
  let contentType = contentTypeForm;
  let formData = params; //创建form对象
  if (dataType != null && dataType == "json") {
    contentType = contentTypeJson;
  } else {
    formData = new FormData();
    for (let key in params) {
      formData.append(key, params[key] == undefined ? "" : params[key]);
    }
  }
  let headers = {
    "Content-Type": contentType,
    "X-Requested-With": "XMLHttpRequest",
    token: "",
  };
  if (params) {
    for (let item in params) {
      if (params[item] == undefined) {
        params[item] = "";
      }
    }
  }
  return new Promise((resolve, reject) => {
    if (showLoading) {
      uni.showLoading();
    }
    uni
      .request({
        url: BASE_URL + url,
        data: params,
        header: headers,
        responseType: responseType,
        methods: "POST",
      })
      .then((res) => {
        if (showLoading) {
          uni.hideLoading();
        }
        uni.stopPullDownRefresh();
        if (res.statusCode != 200) {
          return Promise.reject("网络连接错误");
        }
        const responseData = res.data;
        if (responseType == "arraybuffer" || responseType == "blob") {
          resolve(responseData);
          return;
        }
        if (responseData.code == 200) {
          resolve(responseData);
          return;
        } else if (responseData.code == 901) {
          uni.navigateTo({
            url: "/pages/account/LoginAndRegister",
          });
          return Promise.reject();
        } else {
          //其他错误
          if (errorCallback) {
            errorCallback(responseData.info);
          }
          return Promise.reject(responseData.info);
        }
      })
      .catch((error) => {
        if (error && showError) {
          Message.error(error);
        }
        return null;
      });
  });
};
export default request;
