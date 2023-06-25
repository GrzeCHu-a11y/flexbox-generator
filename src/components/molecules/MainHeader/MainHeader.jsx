import style from "./MainHeader.module.scss";
const MainHeader = ({ name }) => {
  return (
    <header className={style.header}>
      <h2>{name}</h2>
    </header>
  );
};

export default MainHeader;
