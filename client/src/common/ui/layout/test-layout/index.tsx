import type { FC, PropsWithChildren } from "react";
import Header from "../../component/test/header";
import Footer from "../../component/test/footer";

const TestLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>;
      <Footer/>
    </>
  );
};

export default TestLayout;
