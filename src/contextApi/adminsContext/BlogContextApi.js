"use client";
import { createContext, useEffect, useState } from "react";

export const BlogDataContext = createContext();
import { genericPagePushHandler } from "../../staticUtlis/generichandler/generichandler";
import { adminsAllBlogs, deleteblog } from "../../Actions/blogActions";

import { useRouter } from "next/navigation";

export const BlogDataContextProvider = ({ children }) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [authAllBlogs, setauthAllBlogs] = useState([]);

  const handelView = (passValue) => {
    genericPagePushHandler(router, "/admins", passValue);
  };

  const handelDelate = async (dataValue) => {
    try {
      const id = {
        _id: dataValue,
      };
      const res = await deleteblog(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAdminsBlog();
  }, []);

  const getAllAdminsBlog = async () => {
    try {
      setisLoading(true);
      const res = await adminsAllBlogs();
      setauthAllBlogs(res.data.result);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BlogDataContext.Provider
      value={{
        isLoading,
        setisLoading,
        handelView,
        handelDelate,
        authAllBlogs,
      }}
    >
      {children}
    </BlogDataContext.Provider>
  );
};
