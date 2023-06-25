import React, { useContext } from "react";
import { FormContext } from "../../../context/DataContext";
import style from "./GeneratedCode.module.scss";
import BasicHeader from "../../molecules/BasicHeader/BasicHeader";
import OutputCss from "../../molecules/OutputCss/OutputCss";
import OutputHtml from "../../molecules/OutputHtml/OutputHtml";

const GeneratedCode = () => {
  const context = useContext(FormContext);
  return (
    <section>
      <BasicHeader name="Code" />
      <div className={style.codeContainer}>
        <OutputCss />
        <OutputHtml />
      </div>
    </section>
  );
};

export default GeneratedCode;
