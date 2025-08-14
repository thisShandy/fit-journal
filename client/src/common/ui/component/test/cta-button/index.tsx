import type { FC } from "react";

interface ICtaButtonProps {
  title: string;
  onClick?: () => void;
}

const CtaButton: FC<ICtaButtonProps> = ({ title, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

export default  CtaButton;