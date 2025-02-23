import React, { createContext, useContext, useState } from "react";

export const SortContext = createContext({
  sortAsc: true,
  toggleSort: () => {},
});

export const SortProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortAsc, setSortAsc] = useState(true);

  const toggleSort = () => setSortAsc((prev) => !prev);

  return (
    <SortContext.Provider value={{ sortAsc, toggleSort }}>
      {children}
    </SortContext.Provider>
  );
};