import type { FC } from "react";

import style from "./style/style.module.scss";

interface ICtaButtonProps {
  title: string;
  type?: "button" | "reset" | "submit" | undefined;
  className?: string;
  onClick?: () => void;
}

const CtaButton: FC<ICtaButtonProps> = ({ title, type = "button", className, onClick }) => {
  return (
    <button type={type} className={[style.ctaButton, className].join(" ")} onClick={onClick}>
      <span className={style.ctaButton__text}>{title}</span>
    </button>
  );
};

export default CtaButton;
