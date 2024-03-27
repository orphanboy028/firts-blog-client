"use client";
import React, { useContext } from "react";
import styles from "./seachinput.module.css";
import { CiSearch } from "../../../staticUtlis/ApplicationIcon";
import { ThemeContext } from "../../../contextApi/ThemeContextApi";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const { handleSearch, suggestions, searchTerm, setSearchTerm } =
    useContext(ThemeContext);

  const handelSearcQuery = (event) => {
    if (event.key === "Enter") {
      router.push(`search?q=${searchTerm}`);
    }
  };

  return (
    <div className={styles.search_Container}>
      <div className={styles.search_wrapper}>
        <input
          type="text"
          value={searchTerm}
          placeholder="seach.."
          className={styles.inputStyle}
          onChange={handleSearch}
          onKeyDown={handelSearcQuery}
        />
        <div className={styles.serachIconBox}>
          <CiSearch />
        </div>
      </div>
      {searchTerm.length > 2 && (
        <div className={styles.suggestion_listBox}>
          <div className={styles.suggestion_title}>Topic</div>
          <div>
            {suggestions.map((el, index) => {
              return (
                <div key={index}>
                  <p>{el.tagName}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
