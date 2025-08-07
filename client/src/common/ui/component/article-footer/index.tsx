import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IArticleFooterProps {
  text?: string;
}

const ArticleFooter: FC<IArticleFooterProps> = ({ text }) => {
  return (
    <ContainerLayout className={style.footer}>
      <span className={style.footer__title}>{text || "Продукт не является медицинским изделием"}</span>
    </ContainerLayout>
  );
};

export default ArticleFooter;