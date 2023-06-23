import { createContext, useState } from "react";

export const FormContext = createContext({});

export const DataContext = ({ children }) => {
  const [test, setTest] = useState("");
  return <FormContext.Provider value={{ test, setTest }}>{children}</FormContext.Provider>;
};

export default DataContext;
