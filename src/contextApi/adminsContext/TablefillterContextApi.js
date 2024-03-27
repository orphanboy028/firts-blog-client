"use client";
import { createContext, useEffect, useState } from "react";
export const TableFillterContext = createContext();

export default function TablefillterContextApi({ children }) {
  const [visibaleData, setvisibaleData] = useState([]);

  return (
    <TableFillterContext.Provider value={{ visibaleData, setvisibaleData }}>
      {children}
    </TableFillterContext.Provider>
  );
}
