import type { FC } from "react";

import Image from "next/image";

import style from "./style/style.module.scss";

interface IImageCardProps {
  image: string;
  text?: string;
}

const ImageCard: FC<IImageCardProps> = ({ image, text }) => {
  return (
    <div className={style.image__card}>
      <Image
        src={image}
        alt={text || "Image"}
        width={608}
        height={360}
        className={style.imageCard__img}
      />
      {text && <p className={style.imageCard__text}>{text}</p>}
    </div>
  );
};

export default ImageCard;
