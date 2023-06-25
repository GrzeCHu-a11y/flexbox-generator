import React, { useContext } from "react";
import { FormContext } from "../../../context/DataContext";
import style from "./Sandbox.module.scss";

const Sandbox = () => {
  const context = useContext(FormContext);
  return (
    <section
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
    </section>
  );
};

export default Sandbox;
