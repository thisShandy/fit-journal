import type { FC } from "react";

import style from "./style/style.module.scss";

interface ICtaButtonProps {
  title: string;
  type?: "button" | "reset" | "submit";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CtaButton: FC<ICtaButtonProps> = ({
  title,
  type = "button",
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={[style.ctaButton, className].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={style.ctaButton__text}>{title}</span>
    </button>
  );
};

export default CtaButton;
