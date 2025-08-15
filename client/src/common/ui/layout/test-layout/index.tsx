import type { FC, PropsWithChildren } from "react";

import Footer from "~/common/ui/component/test/footer";
import Header from "~/common/ui/component/test/header";

import style from "./style/style.module.scss";

const TestLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.testLayout}>
      <div className={style.testLayout__content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default TestLayout;
