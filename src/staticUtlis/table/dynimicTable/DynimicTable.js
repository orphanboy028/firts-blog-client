"use client";

import React, { Suspense, useEffect, useLayoutEffect } from "react";
import styles from "./dynimicTable.module.css";
import ViewBtn from "../tablebtns/ViewBtn";
import DeleteBtn from "../tablebtns/DeleteBtn";
import { formatDate } from "../../logical-function/formatDate";
import TableImage from "../tableImages/TableImage";
import useFillterTable from "../../../custome-hooks/useFillterTable";
import DynimicTableFooter from "./dynmicTablefooter/DynimicTableFooter";

export default function DynimicTable(props) {
  const {
    tableColums,
    tableData,
    displeyRows,
    viewBtnhandler,
    openModelBox,
    dataLoading,
    folderPath,
  } = props;

  const handlers = {
    viewBtn: viewBtnhandler,
    deleteBtn: openModelBox,
    singleImage: folderPath,
  };

  const {
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
  } = useFillterTable(tableData);

  useEffect(() => {
    UpdateVisiibleRow();
  }, [dataLoading, dataPerPage, currentPage]);

  return (
    <>
      {dataLoading ? (
        <h1>loading</h1>
      ) : (
        <Suspense fallback={<h1>loading</h1>}>
          <div className={styles.table_container}>
            <div className={styles.table_wrapper}>
              <table className={styles.table}>
                <thead className={styles.tableHeader}>
                  <tr className={styles.tableTr}>
                    {tableColums.map((column, i) => (
                      <th key={i}>{column.label}</th>
                    ))}
                  </tr>
                </thead>
                {displeyRows && (
                  <tbody className={styles.table_body}>
                    {displeyRows.map((row, no) => (
                      <tr key={no}>
                        {tableColums.map((column, i) => (
                          <td key={i}>
                            {renderCellContent(
                              no,
                              row[column.key],
                              row._id,
                              row.slug,
                              column.component,
                              handlers[column.component]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
            <div className={styles.table_footerContainer}>
              <DynimicTableFooter
                totalRowsNumber={totalRows}
                rowPerPage={dataPerPage}
                perPageHandeler={handleDataPerPageChange}
                nextPageHandler={goToNextPage}
                prevPageHandler={goToprevPage}
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                totalPages={totalPages}
                rowStart={startnumber}
                rowEnd={endNumber}
              />

              {/* <div>
                <div>
                  <span>Total Row {totalRows}</span>
                  <span>Total page {totalPages}</span>
                </div>
                <div>
                  <span>Cureernt page {currentPage}</span>
                </div>
                <div className={styles.table_rowAction}>
                  <span>Row Per page {dataPerPage}</span>
                  <div>
                    <select
                      value={dataPerPage}
                      onChange={handleDataPerPageChange}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                </div>
                <div className={styles.table_rowAction}>
                  <span onClick={goToprevPage}>Prv</span>
                  <span onClick={goToNextPage}>next</span>
                </div>
                <div>
                  {pageNumbers.map((el) => {
                    return <span key={el}>{el}</span>;
                  })}{" "}
                </div>
              </div> */}
            </div>
          </div>
        </Suspense>
      )}
    </>
  );
}

// Helper function to render cell content based on component type
const renderCellContent = (indexNo, data, id, slug, componentType, handler) => {
  switch (componentType) {
    case "number":
      return indexNo + 1;
    case "text":
      return data;

    case "date":
      return formatDate(data);

    case "checkbox":
      if (handler) {
        return <p>Check box</p>;
      }

    case "switch":
      if (handler) {
        return (
          <>
            <p>{slug}</p>
          </>
        );
      }

    case "deleteBtn":
      if (handler) {
        return (
          <>
            <DeleteBtn
              viewBtnText="Delete"
              btnAction={handler}
              passValue={id}
            />
          </>
        );
      }

    case "update":
      if (handler) {
        return (
          <>
            <p>{id}</p>
          </>
        );
      }

    case "viewBtn":
      if (handler) {
        return (
          <>
            <ViewBtn viewBtnText="view" btnAction={handler} passValue={slug} />
          </>
        );
      }

    case "singleImage":
      if (handler) {
        return (
          <>
            <TableImage imageData={data} folderPath={handler} />
          </>
        );
      }

    default:
      return data;
  }
};
