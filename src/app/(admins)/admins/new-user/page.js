"use client";
import React, { useContext } from "react";
import styles from "./newUser.module.css";
import DynimicTable from "../../../../staticUtlis/table/dynimicTable/DynimicTable";
import {
  dummyDataColoum,
  dummysampleData,
  SuperAdminColum,
} from "../../../../staticUtlis/JsonData/tableData";
import { UserDataContext } from "../../../../contextApi/adminsContext/UserDataContextApi";
import Model from "../../../../staticUtlis/models/Model";
import { AppContext } from "../../../../contextApi/adminsContext/AppContextApi";

export default function NewUserPage() {
  const { isLoading, setisLoading, handelView, handelDelate } =
    useContext(UserDataContext);
  const { handelOpenModel } = useContext(AppContext);

  return (
    <div>
      <div>
        <Model yesAction={handelDelate} />
        <DynimicTable
          tableColums={dummyDataColoum}
          tableData={dummysampleData}
          viewBtnhandler={handelView}
          openModelBox={handelOpenModel}
        />
      </div>
    </div>
  );
}
