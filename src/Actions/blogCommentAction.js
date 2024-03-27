import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";

const authToken = getLoginCookies();

export const createCommentAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/blog-comment/create-new-blog-comment`;
    const method = "post";

    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const createReplyAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/blog-comment/comment-reply`;
    const method = "post";

    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};
