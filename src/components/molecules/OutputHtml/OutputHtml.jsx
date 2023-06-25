import React from "react";
import style from "./OutputHtml.module.scss";

const OutputHtml = () => {
  return (
    <div className={style.container}>
      <h4>html code:</h4>
      <pre>
        <code>
          <span>&lt;</span>
          div class="container"
          <span>&gt;</span>
          <br />
          &nbsp;
          <span>&lt;</span>
          div class="item"
          <span>&gt;</span>
          <span>&lt;</span>
          /div
          <span>&gt;</span>
          <br />
          <span>&lt;</span>
          /div
          <span>&gt;</span>
        </code>
      </pre>
    </div>
  );
};

export default OutputHtml;
