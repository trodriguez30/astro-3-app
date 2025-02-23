import { SortContextType } from "@/types/contextTypes";
import React, { createContext, useState } from "react";

export const SortContext = createContext<SortContextType | undefined>(undefined);


export const SortProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortAsc, setSortAsc] = useState(true);

  const toggleSort = () => setSortAsc((prev) => !prev);

  return (
    <SortContext.Provider value={{ sortAsc, toggleSort }}>
      {children}
    </SortContext.Provider>
  );
};