"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function MyLineChart(props) {
  const { apiStats } = props;
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const generateDateRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    endDate = new Date(endDate);
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const startDate = "2024-03-08"; // Start date from your data
  const endDate = "2024-03-14"; // End date from your data
  const dateRange = generateDateRange(startDate, endDate);

  const preprocessedData = dateRange.map((date) => {
    const entry = apiStats.find((item) => item._id === date);
    return {
      _id: date,
      totalBlog: entry ? entry.totalBlog : 0,
    };
  });

  const labels = preprocessedData.map((entry) => entry._id);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Total Blogs Created",
        data: preprocessedData.map((entry) => entry.totalBlog),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  useEffect(() => {
    if (!chartRef.current) return;

    // Check if chart instance already exists, if yes, destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },

        maintainAspectRatio: false, // Set to false to allow custom width and height
        // Other chart options...
      },
    });

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [apiStats]);
  return <canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}
