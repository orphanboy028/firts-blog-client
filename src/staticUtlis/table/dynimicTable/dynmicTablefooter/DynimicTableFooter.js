import React from "react";
import styles from "./dynimicTablefooter.module.css";

export default function DynimicTableFooter(props) {
  const {
    totalRowsNumber,
    rowPerPage,
    perPageHandeler,
    nextPageHandler,
    prevPageHandler,
    pageNumbers,
    currentPage,
    totalPages,
    rowStart,
    rowEnd,
  } = props;
  return (
    <div className={styles.footer_container}>
      <div className={styles.actions_wrapper}>
        <div className={styles.columns}>
          <div>
            <p>Rows per page</p>
          </div>
          <div>
            <select value={rowPerPage} onChange={perPageHandeler}>
              <option>5</option>
              <option>10</option>
              <option>10</option>
            </select>
          </div>
          <div className={styles.child_element}>
            <span>
              {rowStart} - {rowEnd}
            </span>
            <span>of</span>
            <span>{totalPages}</span>
          </div>
        </div>

        <div className={styles.columns}>
          <div onClick={prevPageHandler}>Prv</div>
          <div className={styles.pageNumber_box}>
            {pageNumbers.map((el, i) => {
              return <span key={i}>{el}</span>;
            })}
          </div>
          <div onClick={nextPageHandler}>Next</div>
        </div>
      </div>
    </div>
  );
}
