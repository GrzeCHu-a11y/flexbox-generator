import style from "./Header.module.scss";
const Header = ({ name }) => {
  return (
    <header className={style.header}>
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
