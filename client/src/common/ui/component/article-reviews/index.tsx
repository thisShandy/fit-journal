import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IArticleFooterProps {
  avatar?: string;
  name: string;
  time: string;
  text: string;
  imgUrl?: string;
}

const ArticleReviews: FC<IArticleFooterProps> = ({ avatar, name, time, text, imgUrl }) => {
  return (
    <ContainerLayout className={style.reviews}>
      <div className={style.reviews__item}>
        <div className={style.reviews__item_header}>
          <div className={style.item__header_avatar}>
            <img src={avatar} alt="" className={style.header__avatar_img}/>
            <span className={style.header__avatar_name}>{name}</span>
          </div>
          <span className={style.item__header_time}>{time} ago</span>
        </div>
        <span>{text}</span>
        <img src={imgUrl} alt="" className={style.reviews__item_image}/>
      </div>
    </ContainerLayout>
  );
};

export default ArticleReviews;
