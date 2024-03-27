"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { TableFillterContext } from "../contextApi/adminsContext/TablefillterContextApi";

export default function useTableDataFillter(initialData) {
  // Function to filter data by username
  const { visibaleData, setvisibaleData } = useContext(TableFillterContext);
  const [startDate, setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);

  // SEARCH BY FILED
  const searchbyFiled = (searchTerm, field) => {
    if (!searchTerm) {
      return initialData;
    }
    let filteredData;
    filteredData = initialData.filter((item) => {
      if (
        item[field] &&
        item[field].toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    UpdateFillterdRow(filteredData);
  };

  // sort data

  const sortByDate = (order, filed) => {
    console.log(order, filed);
    const sortedData = initialData.slice().sort((a, b) => {
      if (order === "Asce") {
        return new Date(a[filed]) - new Date(b[filed]);
      } else if (order === "Desc") {
        return new Date(b[filed]) - new Date(a[filed]);
      }
      // If the order is not specified, return the original data
      return 0;
    });
    UpdateFillterdRow(sortedData);
  };

  // Sort By alphaBhat
  const sortByAlphabhat = (order, filed) => {
    console.log(order);
    const sortedData = initialData.slice().sort((a, b) => {
      if (order === "Asce") {
        return a[filed].localeCompare(b[filed]);
      } else if (order === "Desc") {
        return b[filed].localeCompare(a[filed]);
      }
      // If the order is not specified, return 0 to maintain the original order
      return 0;
    });
    UpdateFillterdRow(sortedData);
  };

  const sortByPrice = (order, filed) => {
    console.log(order);
    const sortedData = initialData.slice().sort((a, b) => {
      if (order === "Asce") {
        return a[filed] - b[filed];
      } else if (order === "Desc") {
        return b[filed] - a[filed];
      }
      // If the order is not specified, return 0 to maintain the original order
      return 0;
    });
    UpdateFillterdRow(sortedData);
  };

  // Fiilter By Date range
  const handleStartDate = (e) => {
    setstartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setendDate(e.target.value);
  };

  console.log(startDate, endDate);

  const filterByDateRange = () => {
    if (startDate === null && endDate === null) {
      UpdateFillterdRow(initialData);
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const filteredData = initialData.filter((item) => {
      const itemDate = new Date(item.updatedAt);

      return itemDate >= start && itemDate <= end;
    });
    UpdateFillterdRow(filteredData);
  };

  const UpdateFillterdRow = (filteredData) => {
    setvisibaleData(filteredData);
  };

  return {
    searchbyFiled,
    sortByDate,
    sortByAlphabhat,
    sortByPrice,
    handleStartDate,
    handleEndDate,
    filterByDateRange,
  };
}
