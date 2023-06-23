import React, { useContext } from "react";
import { FormContext } from "../../../context/DataContext";

const Sandbox = () => {
  const context = useContext(FormContext);
  console.log(context);
  // console.log(context.flexDirection);
  return (
    <div>
      <h3>{context.value.flexDirection}</h3>
      <h3>{context.value.flexWrap}</h3>
      <h3>{context.value.justifyContent}</h3>
      <h3>{context.value.alginItems}</h3>
      <h3>{context.value.alginContent}</h3>
    </div>
  );
};

export default Sandbox;
