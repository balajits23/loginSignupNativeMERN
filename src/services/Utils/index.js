import { axiosInstance } from "../axios";

const get = (url, args) => {
  return axiosInstance.get(url, args);
};

const post = (url, reqObj, args) => {
  return axiosInstance.post(url, reqObj, args);
};

const put = (url, reqObj, args) => {
  return axiosInstance.put(url, reqObj, args);
};

const deleteById = (url) => {
  return axiosInstance.delete(url);
};

const requestUtil = {
  get,
  post,
  put,
  deleteById,
};

export default requestUtil;
