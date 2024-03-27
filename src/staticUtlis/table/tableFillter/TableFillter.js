"use client";
import React from "react";
import styles from "./tablefillter.module.css";
import useTableDataFillter from "../../../custome-hooks/useTableDataFillter";

export default function TableFillter(props) {
  const { data } = props;

  const {
    searchbyFiled,
    sortByDate,
    handleStartDate,
    handleEndDate,
    filterByDateRange,
  } = useTableDataFillter(data);
  const searchFiled = "title";
  return (
    <div className={styles.fillterBox}>
      <div>
        <input
          placeholder="search title"
          name="title"
          onChange={(e) => searchbyFiled(e.target.value, searchFiled)}
        ></input>
      </div>
      <div className={styles.sortNBox}>
        <span onClick={() => sortByDate("Asce", "updatedAt")}>Asce</span>{" "}
        <span onClick={() => sortByDate("Desc", "updatedAt")}>Desc</span>
      </div>
      <div className={styles.sortNBox}>
        <input type="date" onChange={handleStartDate} />
        <input type="date" onChange={handleEndDate} />
        <button onClick={filterByDateRange}>apply</button>
      </div>
    </div>
  );
}
