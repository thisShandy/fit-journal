import type { FC, PropsWithChildren } from "react";

import style from "./style/style.module.scss";

interface IContainerLayoutProps {
  className?: string;
}

const ContainerLayout: FC<PropsWithChildren<IContainerLayoutProps>> = ({ children, className }) => {
  return (
    <div className={[style.container, className].join(" ")}>
      {children}
    </div>
  );
};

export default ContainerLayout;
