import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";

const authToken = getLoginCookies();

export const dailyBlogStatsAction = async () => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/stats/blog-stats`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};
