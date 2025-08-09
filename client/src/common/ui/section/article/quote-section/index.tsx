import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IQuoteSectionProps {
  text: string;
}

const quoteMock: IQuoteSectionProps[] = [
  {
    text: "Still, this simple change in mindset helped me get way more out of ChatGPT by changing the mental model I hold for it. Try these ideas out and let the results speak for themselves."
  }
];

const QuoteSection: FC<IQuoteSectionProps> = () => {
  return (
    <section>
      <ContainerLayout>
        {quoteMock.map((item, index) => (
          <span key={index} className={style.quote__description}>
            {item.text}
          </span>
        ))}
      </ContainerLayout>
    </section>
  );
};

export default QuoteSection;
