import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IImageSectionProps {
  image: string;
  text?: string;
}

const ImageSection: FC<IImageSectionProps> = () => {
  return (
    <section>
      <ContainerLayout>

      </ContainerLayout>
    </section>
  );
};

export default ImageSection;