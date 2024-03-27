"use client";

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
import { userDetailApi } from "../Actions/userAction";
import { isAuth } from "../Actions/authAction";

export const UserContextProvider = ({ children }) => {
  const longined = isAuth();
  const [userDetail, setuserDetail] = useState({
    email: "",
    name: "",
    businessWebsite: "",
    userName: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (longined) {
      handelUserDetail();
    }
  }, [isLoading]);

  const handelUserDetail = async () => {
    try {
      const res = await userDetailApi();
      const email = res.data.result.email;
      const name = res.data.result.name;
      const businessWebsite = res.data.result.businessWebsite;
      const bio = res.data.result.bio;
      const userName = res.data.result.userName;
      const facebook = res.data.result.facebook;
      const twitter = res.data.result.twitter;
      const instagram = res.data.result.instagram;
      setuserDetail({
        name,
        email,
        businessWebsite,
        bio,
        userName,
        facebook,
        twitter,
        instagram,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <UserContext.Provider value={{ userDetail, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};
