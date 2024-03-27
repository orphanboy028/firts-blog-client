import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "./authAction";

const authToken = getLoginCookies();
console.log(authToken);

export const allBlogs = async () => {
  const url = `http://localhost:8000/api/v1/first-blog/blog/all-blogs`;
  return performGetAPIAction(url);
};

export const singleBlogs = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-blog/blog/single-blog/${slug}`;
  return performGetAPIAction(url);
};

export const tagfillterBlogs = async (query, page) => {
  const limit = 5; // Static limit value
  let url = `http://localhost:8000/api/v1/first-blog/blog/fllterd-tag-blogs`;

  const queryParams = [];
  if (query) {
    queryParams.push(`tag=${query}`);
  }
  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (limit) {
    queryParams.push(`limit=${limit}`);
  }

  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }

  return performGetAPIAction(url, null, { cache: "no-store" });
};

export const searchQueryBlogs = async (query, page) => {
  const limit = 5;
  let url = `http://localhost:8000/api/v1/first-blog/blog/search-query`;

  const queryParams = [];
  if (query) {
    queryParams.push(`q=${query}`);
  }
  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (limit) {
    queryParams.push(`limit=${limit}`);
  }

  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }

  return performGetAPIAction(url);
};

export const blogByTag = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-blog/blog/tags-blogs/${slug}`;
  return performGetAPIAction(url);
};

export const tageBlogs = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-blog/blog/single-blog/${slug}`;
  return performGetAPIAction(url);
};

// LOGIN USER

export const blogwithThumblin = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/blog/blog-create`;
    const method = "post";
    return ImageAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const userBlogsApi = async () => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/blog/user-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};

export const userDraftBlogApi = async () => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/blog/user-draft-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};

export const upadteBlogTags = async (formData, slug) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/blog/update-blog-tags/${slug}`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const deleteblog = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/blog/delete-blog`;
    const method = "delete";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

// ADMINS
export const adminsAllBlogs = async () => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-blog/blog/all-admins-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};
