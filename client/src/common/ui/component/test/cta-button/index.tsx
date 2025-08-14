import type { FC } from "react";

import style from "./style/style.module.scss";

interface ICtaButtonProps {
  title: string;
  onClick?: () => void;
}

const CtaButton: FC<ICtaButtonProps> = ({ title, onClick }) => {
  return (
    <button type="button" className={style.ctaButton} onClick={onClick}>
      <span className={style.ctaButton__text}>{title}</span>
    </button>
  );
};

export default CtaButton;
