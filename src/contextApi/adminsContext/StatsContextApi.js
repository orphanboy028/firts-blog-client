"use client";
import { createContext, useEffect, useState } from "react";

export const StatsContext = createContext();

import { useRouter } from "next/navigation";
import { dailyBlogStatsAction } from "../../Actions/statsActions";

export const StatsContextProvider = ({ children }) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [blogstatsday, setblogstatsday] = useState([]);

  useEffect(() => {
    handeldailyBlogStats();
  }, [isLoading]);

  const handeldailyBlogStats = async () => {
    try {
      const res = await dailyBlogStatsAction();
      console.log(res.data.blogStats);
      setblogstatsday(res.data.blogStats);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StatsContext.Provider
      value={{
        isLoading,
        setisLoading,
        blogstatsday,
        setblogstatsday,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};
