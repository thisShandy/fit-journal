import type { FC, PropsWithChildren } from "react";

import style from "./style/style.module.scss";

interface IContainerLayoutProps {
  className?: string;
}

const ContainerLayout: FC<PropsWithChildren<IContainerLayoutProps>> = ({ children, className }) => {
  return (
    <div className={[style.container, className].join(" ")}>
      <div className={style.header}>
        <span className={style.header__logo}>FitJornual</span>
        <ul className={style.header__topics}>
          <li className={style.header__topics_item}>Похудение</li>
          <li className={style.header__topics_item}>Суставы</li>
          <li className={style.header__topics_item}>Сахар</li>
          <li className={style.header__topics_item}>Омоложение</li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default ContainerLayout;
