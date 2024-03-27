import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";
const authToken = getLoginCookies();

export const userDetailApi = async () => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/user/user-detail`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};

export const upadteUserApi = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/user/update-user`;
    const method = "patch";
    return performAPIAction(method, url, requestData, authToken);
  }
  return null;
};

export const upadteUserNameApi = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/user/update-user-name`;
    const method = "post";
    return performAPIAction(method, url, requestData, authToken);
  }
  return null;
};

export const upadteUserPasswordApi = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/user/update-password`;
    const method = "post";
    return performAPIAction(method, url, requestData, authToken);
  }
  return null;
};
