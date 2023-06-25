import React from "react";
import style from "./OutputCss.module.scss";
const OutputCss = ({ values }) => {
  return (
    <div className={style.container}>
      <h4>Css code:</h4>
      <div className={style.properitiesContainer}>
        <p className={style.specialP}>.Container &#123;</p>
        <p>flex-direction: {values.flexDirection};</p>
        <p>flex-wrap: {values.flexWrap};</p>
        <p>justify-content: {values.justifyContent};</p>
        <p>align items: {values.alignItems};</p>
        <p>align content: {values.alignContent};</p>
        <p>&#125;</p>
      </div>
    </div>
  );
};

export default OutputCss;
