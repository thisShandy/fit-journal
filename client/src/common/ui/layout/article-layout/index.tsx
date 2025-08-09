import type { FC, PropsWithChildren } from "react";

import Footer from "~/common/ui/component/article/footer";
import Header from "~/common/ui/component/header";

import style from "./style/style.module.scss";

interface IArticleLayoutProps {
  footerText?: string;
}

const ArticleLayout: FC<PropsWithChildren<IArticleLayoutProps>> = ({
  children, footerText
}) => {
  return (
    <div className={style.articleLayout}>
      <Header />
      {children}
      <Footer text={footerText} />
    </div>
  );
};

export default ArticleLayout;
