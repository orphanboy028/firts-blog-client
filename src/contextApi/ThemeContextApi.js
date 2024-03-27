"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { allTags } from "../Actions/tagAction";
import { isAuth } from "../Actions/authAction";
import { usePathname, useSearchParams } from "next/navigation";
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const longined = isAuth();
  const pathname = usePathname();
  const [tagObject, settagObject] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleNavDropDown, settoggleNavDropDown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle click outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click is outside the dropdown, close it
        settoggleNavDropDown(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handelToggleNavDropDown = () => {
    settoggleNavDropDown(!toggleNavDropDown);
  };

  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const handeltoggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    handeGetTags();
    localStorage.setItem("tagObject", JSON.stringify(tagObject));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = tagObject.filter(
        (tag) =>
          tag.tagName.toLowerCase().includes(value.toLowerCase()) ||
          tag.tagSlug.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handeGetTags = async () => {
    try {
      const res = await allTags();
      const tags = res.data.result.map(({ tagName, tagSlug }) => ({
        tagName,
        tagSlug,
      }));
      settagObject(tags);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handeltoggle,
        handleSearch,
        suggestions,
        searchTerm,
        setSearchTerm,
        handelToggleNavDropDown,
        toggleNavDropDown,
        settoggleNavDropDown,
        longined,
        dropdownRef,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
