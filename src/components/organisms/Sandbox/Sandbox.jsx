import React, { useContext } from "react";
import { FormContext } from "../../../context/DataContext";
import style from "./Sandbox.module.scss";

const Sandbox = () => {
  const context = useContext(FormContext);
  console.log(context.value.alignContent);
  return (
    <div
      className={style.sandboxContainer}
      style={{
        flexDirection: context.value.flexDirection,
        flexWrap: context.value.flexWrap,
        justifyContent: context.value.justifyContent,
        alignItems: context.value.alignItems,
        alignContent: context.value.alignContent,
      }}
    >
      <div className={style.item}></div>
      <div className={style.item}></div>
      <div className={style.item}></div>
    </div>
  );
};

export default Sandbox;
{
  /* <h3>{context.value.flexDirection}</h3>
<h3>{context.value.flexWrap}</h3>
<h3>{context.value.justifyContent}</h3>
<h3>{context.value.alginItems}</h3>
<h3>{context.value.alginContent}</h3> */
}
