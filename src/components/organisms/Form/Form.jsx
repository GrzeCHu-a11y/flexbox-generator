import React, { useContext } from "react";
import { FormContext } from "../../../context/DataContext";

const Form = () => {
  const context = useContext(FormContext);
  console.log(context.test);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Form;
