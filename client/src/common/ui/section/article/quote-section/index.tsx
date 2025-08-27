import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IQuoteSectionProps {
  text: string;
}

const QuoteSection: FC<IQuoteSectionProps> = ({ text }) => {
  return (
    <section className={style.quoteWrapper}>
      <ContainerLayout className={style.quoteSection}>
        <div className={style.quoteSection__wrapper}>
          <span className={style.quoteSection__text} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default QuoteSection;
