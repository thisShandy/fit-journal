import type { IReviewProps } from "~/common/ui/component/article/review";

import Review from "~/common/ui/component/article/review";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const reviewsListMock: IReviewProps[] = [
  {
    avatar: "https://cdn.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    name: "Anastasiya",
    time: "23 minutes",
    text: "Lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin lorem ipsumawdin",
  },
  {
    avatar: "https://cdn.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    name: "Anton",
    time: "56 minutes",
    text: "Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
    image: "https://cdn.7days.ru/pic/267/985401/1466051/86.jpg"
  }
];

const ReviewsSection = () => {
  return (
    <section>
      <ContainerLayout className={style.reviewsSection}>
        <span className={style.reviewsSection__title}>Комментарии 2:</span>
        <div className={style.reviewsSection__list}>
          {reviewsListMock.map((review, index) => (
            <Review key={`article_review_${index}`} {...review} />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ReviewsSection;