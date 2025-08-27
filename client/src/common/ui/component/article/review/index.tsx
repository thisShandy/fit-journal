import type { FC } from "react";

import Image from "next/image";

import style from "./style/style.module.scss";

export interface IReviewProps {
  avatar: string;
  name: string;
  time: string;
  text: string;
  image?: string[];
}

const Review: FC<IReviewProps> = ({ avatar, name, time, text, image }) => {
  return (
    <div className={style.review}>
      <div className={style.reviewHeader}>
        <div className={style.reviewHeader__initials}>
          <Image
            src={avatar}
            width={48}
            height={48}
            alt="review_avatar_image"
            className={style.reviewHeader__avatar}
          />
          <span className={style.reviewHeader__name}>{name}</span>
        </div>
        {/*<span className={style.reviewHeader__time}>{time} ago</span>*/}
      </div>
      <span className={style.review__text}>{text}</span>
      <div className={style.review__list}>
        {image && image.map((url, index) => (
          <Image
            key={`review_imge_${index}_${url}`}
            src={url}
            width={360}
            height={240}
            alt="review_attachment_image"
            className={style.review__image}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
