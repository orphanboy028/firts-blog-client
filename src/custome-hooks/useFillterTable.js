"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { TableFillterContext } from "../contextApi/adminsContext/TablefillterContextApi";

export default function useFillterTable(initialData, initialDataPerPage = 5) {
  const { visibaleData, setvisibaleData } = useContext(TableFillterContext);

  const totalRows = initialData.length;
  const [dataPerPage, setdataPerPage] = useState(initialDataPerPage);
  const [currentPage, setcurrentPage] = useState(1);
  const [startnumber, setstartnumber] = useState(1);
  const [endNumber, setendNumber] = useState(null);

  //1) Total row Logic
  const logictotalPages = () => {
    return Math.ceil(totalRows / dataPerPage);
  };
  //2) Total row Logic execute
  const totalPages = logictotalPages();
  // const totalPages = 100;

  //1) For select row Logic
  const handleDataPerPageChange = (e) => {
    const selectedRowsPerPage = Number(e.target.value);
    setdataPerPage(selectedRowsPerPage);
    setcurrentPage(1); // Reset to first page when changing rows per page
  };

  // Next Pages
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1);
    }
  };
  // Prev Page
  const goToprevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  // Function to generate page numbers
  const generatePageNumbers = () => {
    const pageCount = 3; // Number of page numbers to show
    const pageNumbers = [];
    let startPage = Math.max(1, Math.ceil(currentPage - pageCount / 2));
    let endPage = Math.min(totalPages, startPage + pageCount - 1);

    if (totalPages > pageCount) {
      if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - pageCount + 1);
      } else if (startPage === 1) {
        endPage = Math.min(totalPages, pageCount);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  const UpdateVisiibleRow = () => {
    let rowsToDisplay = initialData;
    let startpageIndex = (currentPage - 1) * dataPerPage;
    const endPageIndex = currentPage * dataPerPage;
    setstartnumber(startpageIndex + 1);
    setendNumber(endPageIndex);
    const displayData = rowsToDisplay.slice(startpageIndex, endPageIndex);
    setvisibaleData(displayData);
  };

  return {
    totalRows,
    dataPerPage,
    currentPage,
    totalPages,
    handleDataPerPageChange,
    UpdateVisiibleRow,
    goToNextPage,
    goToprevPage,
    pageNumbers,
    startnumber,
    endNumber,
  };
}
