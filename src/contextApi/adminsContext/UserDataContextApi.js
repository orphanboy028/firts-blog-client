"use client";
import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();
import { genericPagePushHandler } from "../../staticUtlis/generichandler/generichandler";

import { useRouter } from "next/navigation";

export const UserDataContextProvider = ({ children }) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);

  const handelView = (passValue) => {
    genericPagePushHandler(router, "/admins", passValue);
  };

  const handelDelate = (dataValue) => {
    console.log(dataValue);
  };

  return (
    <UserDataContext.Provider
      value={{ isLoading, setisLoading, handelView, handelDelate }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
