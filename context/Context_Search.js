import React, { createContext, useContext, useEffect, useState } from "react";

export const Context_Search = createContext();

export const Context_Search_Provider = ({ children }) => {
  const [search, setSearch] = useState(0);

  return (
    <Context_Search.Provider value={{ search, setSearch }}>
      {children}
    </Context_Search.Provider>
  );
};
