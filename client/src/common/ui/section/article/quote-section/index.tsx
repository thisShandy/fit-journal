import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IQuoteSectionProps {
  image: string;
  text?: string;
}

const QuoteSection: FC<IQuoteSectionProps> = () => {
  return (
    <section>
      <ContainerLayout>

      </ContainerLayout>
    </section>
  );
};

export default QuoteSection;