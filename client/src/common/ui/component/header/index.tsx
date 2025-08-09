import Link from "next/link";

import style from "./style/style.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.header__logo}>FitJornual</span>
      <ul className={style.header__topics}>
        <li className={style.header__topics_item}>
          <Link href="/fit">Похудение</Link>
        </li>
        <li className={style.header__topics_item}>
          <Link href="/bone">Суставы</Link>
        </li>
        <li className={style.header__topics_item}>
          <Link href="/sugar">Сахар</Link>
        </li>
        <li className={style.header__topics_item}>
          <Link href="/young">Омоложение</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;