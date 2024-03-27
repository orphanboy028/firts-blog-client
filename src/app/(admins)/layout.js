"use client";
import React, { useState } from "react";
import styles from "./dashboardLayout.module.css";
import { FaBars } from "../../staticUtlis/ApplicationIcon";
import "../global.css";
import AdminNavBar from "../../components/adminComponent/layoutCompoenent/adminNavBar/AdminNavBar";
import AsideDrawer from "../../components/adminComponent/layoutCompoenent/asideDrawer/AsideDrawer";
import AdminFooter from "../../components/adminComponent/layoutCompoenent/adminFooter/AdminFooter";
import { UserDataContextProvider } from "../../contextApi/adminsContext/UserDataContextApi";
import { AppContextProvider } from "../../contextApi/adminsContext/AppContextApi";
import { BlogDataContextProvider } from "../../contextApi/adminsContext/BlogContextApi";
import { StatsContextProvider } from "../../contextApi/adminsContext/StatsContextApi";
import TablefillterContextApi from "../../contextApi/adminsContext/TablefillterContextApi";

export default function AdminLayOut({ children }) {
  const [toggleSidebar, settoggleSidebar] = useState(false);

  const handelToogleSidebar = () => {
    settoggleSidebar(!toggleSidebar);
    console.log(toggleSidebar);
  };

  return (
    <html lang="en">
      <body className={styles.layout_body}>
        <AppContextProvider>
          <StatsContextProvider>
            <UserDataContextProvider>
              <BlogDataContextProvider>
                <TablefillterContextApi>
                  <div className={styles.main_container}>
                    <AdminNavBar toogleSidebar={handelToogleSidebar} />
                    <div className={styles.content_container}>
                      <AsideDrawer
                        toogleSidebar={handelToogleSidebar}
                        toogle={toggleSidebar}
                      />
                      <div className={styles.dashBoardcontent_wrapper}>
                        {children}
                      </div>
                    </div>
                    <AdminFooter />
                  </div>
                </TablefillterContextApi>
              </BlogDataContextProvider>
            </UserDataContextProvider>
          </StatsContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
