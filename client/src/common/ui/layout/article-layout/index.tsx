import type { FC, PropsWithChildren } from "react";

import ArticleFooter from "~/common/ui/component/article-footer";

import style from "./style/style.module.scss";
import ArticleReviews from "~/common/ui/component/article-reviews";

interface IArticleLayoutProps {
  footerText?: string;
}

const ArticleLayout: FC<PropsWithChildren<IArticleLayoutProps>> = ({
  children, footerText
}) => {
  return (
    <div className={style.articleLayout}>
      {children}
      <ArticleReviews avatar={"https://cdn.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg"} name={"Anastasiya"} time={"23 minutes"} text={"lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin "}/>
      <ArticleReviews avatar={"https://cdn.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg"} name={"Anton"} time={"1 hour"} text={"lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin "} imgUrl={"https://cdn.7days.ru/pic/267/985401/1466051/86.jpg"}/>
      <ArticleFooter text={footerText} />
    </div>
  );
};

export default ArticleLayout;
