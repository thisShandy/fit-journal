import type { FC, PropsWithChildren } from "react";

import ArticleFooter from "~/common/ui/component/article-footer";

import style from "./style/style.module.scss";

interface IArticleLayoutProps {
  footerText?: string;
}

const ArticleLayout: FC<PropsWithChildren<IArticleLayoutProps>> = ({
  children, footerText
}) => {
  return (
    <div className={style.articleLayout}>
      {children}
      <ArticleFooter text={footerText} />
    </div>
  );
};

export default ArticleLayout;