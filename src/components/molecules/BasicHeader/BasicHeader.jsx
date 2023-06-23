import React from "react";
import style from "./BasicHeader.module.scss";

const BasicHeader = ({ name }) => {
  return (
    <header className={style.header}>
      <h2>{name}</h2>
    </header>
  );
};

export default BasicHeader;
