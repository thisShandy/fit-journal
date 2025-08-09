import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface ITextSectionProps {
  text: string;
}

const textMock: ITextSectionProps[] = [
  {
    text: "Still, this simple change in mindset helped me get way more out of ChatGPT by changing the mental model I hold for it. Try these ideas out and let the results speak for themselves. Over, this simple change in mindset helped me get way more out of ChatGPT by changing the mental model I hold for it. Try these ideas out and let the results speak for themselves."
  }
];

const TextSection: FC<ITextSectionProps> = () => {
  return (
    <section>
      <ContainerLayout>
        {textMock.map((item, index) => (
          <span key={index} className={style.text__description}>
            {item.text}
          </span>
        ))}
      </ContainerLayout>
    </section>
  );
};

export default TextSection;
