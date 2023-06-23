import React, { useContext } from "react";
import { FormContext } from "../../../context/DataContext";
import style from "./Form.module.scss";
import BasicHeader from "../../molecules/BasicHeader/BasicHeader";

const Form = () => {
  const context = useContext(FormContext);

  return (
    <section className={style.formSection}>
      <BasicHeader name="Chose options" />
      <br />
      <div className={style.optionsContainer}>
        <div className={style.item}>
          <label htmlFor="flexDirection" className={style.label}>
            Flex Direction
          </label>
          <select name="flexDirection" id="flexDirection" className={style.select}>
            <option value="row">row</option>
            <option value="column">column</option>
          </select>
        </div>
        <div className={style.item}>
          <label htmlFor="flexWrap" className={style.label}>
            Flex Wrap
          </label>
          <select name="flexWrap" id="flexWrap" className={style.select}>
            <option value="wrap">wrap</option>
            <option value="nowrap">nowrap</option>
          </select>
        </div>
        <div className={style.item}>
          <label htmlFor="justifyContent" className={style.label}>
            Justify Content
          </label>
          <select name="justifyContent" id="justifyContent" className={style.select}>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
          </select>
        </div>
        <div className={style.item}>
          <label htmlFor="alginItems" className={style.label}>
            Algin Items
          </label>
          <select name="alginItems" id="alginItems" className={style.select}>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baselane</option>
            <option value="stretch">stretch</option>
          </select>
        </div>
        <div className={style.item}>
          <label htmlFor="alginContent" className={style.label}>
            Algin Content
          </label>
          <select name="alginContent" id="alginContent" className={style.select}>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="stretch">stretch</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Form;
{
  /* <input type="text" onChange={(e) => context.setTest(e.target.value)} /> */
}