import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";

const authToken = getLoginCookies();
console.log(authToken);

export const allTags = async () => {
  const url = `http://localhost:8000/api/v1/first-blog/tag/all-tags`;
  return performGetAPIAction(url);
};

export const createTagsByUsers = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/tag/create-users-tag`;
    const method = "post";
    return performAPIAction(method, url, requestData, authToken);
  }
  return null;
};
