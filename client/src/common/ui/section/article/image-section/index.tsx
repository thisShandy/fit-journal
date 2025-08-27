import type { FC } from "react";

import Image from "next/image";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IImageSectionProps {
  image: string;
  text?: string;
}

const ImageSection: FC<IImageSectionProps> = ({ image, text }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={style.imageWrapper} onClick={() => handleScroll("offer")}>
      <ContainerLayout className={style.imageSection}>
        <Image
          src={image}
          alt={text || "image"}
          width={640}
          height={360}
          className={style.imageSection__image}
        />
        {text && <p className={style.imageSection__text}>{text}</p>}
      </ContainerLayout>
    </section>
  );
};

export default ImageSection;
