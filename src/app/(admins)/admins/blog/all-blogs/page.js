"use client";
import React, { useContext, useEffect } from "react";
import styles from "./allBlog.module.css";
import { blogDataColoum } from "../../../../../staticUtlis/JsonData/tableData";
import { BlogDataContext } from "../../../../../contextApi/adminsContext/BlogContextApi";
import DynimicTable from "../../../../../staticUtlis/table/dynimicTable/DynimicTable";
import { AppContext } from "../../../../../contextApi/adminsContext/AppContextApi";
import Model from "../../../../../staticUtlis/models/Model";
import MyLineChart from "../../../../../staticUtlis/stats-chart/line-chart/MyLineChart";
import { TableFillterContext } from "../../../../../contextApi/adminsContext/TablefillterContextApi";
import TableFillter from "../../../../../staticUtlis/table/tableFillter/TableFillter";

export default function AllBlogsPage() {
  const { authAllBlogs, handelView, handelDelate, isLoading } =
    useContext(BlogDataContext);
  const { handelOpenModel } = useContext(AppContext);
  const { visibaleData } = useContext(TableFillterContext);

  return (
    <div>
      <Model yesAction={handelDelate} />

      <div>
        <TableFillter data={authAllBlogs} />
      </div>
      <div>
        <DynimicTable
          tableColums={blogDataColoum}
          tableData={authAllBlogs}
          viewBtnhandler={handelView}
          openModelBox={handelOpenModel}
          dataLoading={isLoading}
          displeyRows={visibaleData}
          folderPath="blog-thumblin/"
        />
      </div>
    </div>
  );
}
