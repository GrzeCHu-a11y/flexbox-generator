import { createContext, useState } from "react";

export const FormContext = createContext({});

export const DataContext = ({ children }) => {
  const [value, setValues] = useState({
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alginItems: "flex-start",
    alginContent: "flex-start",
  });

  return <FormContext.Provider value={{ setValues, value }}>{children}</FormContext.Provider>;
};

export default DataContext;
