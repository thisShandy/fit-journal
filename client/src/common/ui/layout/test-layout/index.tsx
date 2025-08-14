import type { FC, PropsWithChildren } from "react";

import style from "~/common/ui/layout/container-layout/style/style.module.scss";


interface IContainerLayoutProps {
  className?: string;
}

const TestLayout: FC<PropsWithChildren<IContainerLayoutProps>> = ({ children, className }) => {
  return (
    <div className={[style.container, className].join(" ")}>
      {children}
    </div>
  );
};

export default TestLayout;
