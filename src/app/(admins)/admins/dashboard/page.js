"use client";
import React, { useContext } from "react";
import styles from "./dashBoard.module.css";
import MyLineChart from "../../../../staticUtlis/stats-chart/line-chart/MyLineChart";
import { StatsContext } from "../../../../contextApi/adminsContext/StatsContextApi";

export default function AdminDashBoard() {
  const { blogstatsday } = useContext(StatsContext);
  const responseData = [
    { _id: "2024-03-08", totalBlog: 10 },
    { _id: "2024-03-09", totalBlog: 20 },
    { _id: "2024-03-12", totalBlog: 50 },
    { _id: "2024-03-14", totalBlog: 100 },
  ];

  return (
    <div>
      <div className={styles.chart_container}>
        <div className={styles.container}>
          <MyLineChart apiStats={blogstatsday} />
        </div>
        <div className={styles.container}>
          <MyLineChart apiStats={blogstatsday} />
        </div>
      </div>
    </div>
  );
}
