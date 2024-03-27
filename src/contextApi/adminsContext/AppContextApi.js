"use client";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

import { useRouter } from "next/navigation";

export const AppContextProvider = ({ children }) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [modelBox, setmodelBox] = useState(false);
  const [modelPassData, setmodelPassData] = useState("");

  const handelOpenModel = (data) => {
    setmodelBox(true);
    setmodelPassData(data);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setisLoading,
        modelBox,
        setmodelBox,
        modelPassData,
        setmodelPassData,
        handelOpenModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
