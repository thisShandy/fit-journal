import type { FC, PropsWithChildren } from "react";
import Header from "../../component/test/header";
import Footer from "../../component/test/footer";

import style from "./style/style.module.scss";

const TestLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.testLayout}>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default TestLayout;
