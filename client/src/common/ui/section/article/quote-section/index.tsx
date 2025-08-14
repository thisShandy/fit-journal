import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IQuoteSectionProps {
  text: string;
}

const QuoteSection: FC<IQuoteSectionProps> = ({ text }) => {
  return (
    <section>
      <ContainerLayout className={style.quoteSection}>
        <div className={style.quoteSection__wrapper}>
          <span className={style.quoteSection__text}>{text}</span>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default QuoteSection;
