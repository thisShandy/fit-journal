import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface ITextSectionProps {
  text: string;
}

const TextSection: FC<ITextSectionProps> = () => {
  return (
    <section>
      <ContainerLayout>

      </ContainerLayout>
    </section>
  );
};

export default TextSection;