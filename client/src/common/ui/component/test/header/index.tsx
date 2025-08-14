import Link from "next/link";

import style from "./style/style.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/" className={style.headerLogo}>
        <span className={style.headerLogo__title}>FitJornual</span>
      </Link>
    </header>
  );
};

export default Header;
