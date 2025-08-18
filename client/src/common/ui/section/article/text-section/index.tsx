import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface ITextSectionProps {
  text: string;
}

const TextSection: FC<ITextSectionProps> = ({ text }) => {
  return (
    <section className={style.textWrapper}>
      <ContainerLayout className={style.textSection}>
        <span className={style.textSection__content}>{text}</span>
      </ContainerLayout>
    </section>
  );
};

export default TextSection;
