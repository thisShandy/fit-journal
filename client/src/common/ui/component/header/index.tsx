import Link from "next/link";

import style from "./style/style.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <Link href="/" className={style.headerLogo}>
          <span className={style.headerLogo__title}>FitJornual</span>
        </Link>
        <ul className={style.headerTopics}>
          <li className={style.headerTopics__item}>
            <Link href="/fit">Похудение</Link>
          </li>
          <li className={style.headerTopics__item}>
            <Link href="/bone">Суставы</Link>
          </li>
          <li className={style.headerTopics__item}>
            <Link href="/sugar">Сахар</Link>
          </li>
          <li className={style.headerTopics__item}>
            <Link href="/young">Тесты</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;