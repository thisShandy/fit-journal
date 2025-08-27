import type { IReviewProps } from "~/common/ui/component/article/review";

import Review from "~/common/ui/component/article/review";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const reviewsListMock: IReviewProps[] = [
  {
    avatar: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/avat-10.jpg",
    name: "Елена, 45 лет, Констанца",
    time: "",
    text: "Мне ставили диагноз преддиабет. Врачи говорили: «Сбросьте вес, иначе начнётся сахарный диабет». Я пыталась, но безуспешно. После курса Ozem Lite я похудела на 11 кг и показатели сахара вернулись в норму. Мой врач был в шоке и сказал: «Я впервые вижу такой результат без строгих диет!",
    image: ["https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-13.jpg", "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/review1.jpg", "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-14.jpg"]
  },
  {
    avatar: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-1.jpg",
    name: "Мария, 52 года, Клуж-Напока",
    time: "",
    text: "Я боролась с лишним весом больше 15 лет. Диеты, фитнес, таблетки — ничего не помогало. Давление всё время было повышенным, врачи предупреждали об инфаркте. Когда я начала принимать Ozem Lite, не поверила глазам — за первую неделю минус 2,3 кг! Сейчас прошло чуть больше месяца, и я похудела на 10 кг. У меня снова появилась энергия жить!",
    image: ["https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-3.jpg", "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-4.jpg"]
  },
  {
    avatar: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/avat-26.jpg",
    name: "Андрей, 35 лет, Бухарест",
    time: "",
    text: "Весил 101 кг, и жизнь превращалась в кошмар. Постоянная усталость, отдышка, я даже не мог нормально подняться по лестнице. Ozem Lite изменил всё. За месяц я потерял 9 кг без всяких нагрузок. А главное — ушёл аппетит! Я впервые в жизни почувствовал, что могу контролировать себя без мучений",
    image: ["https://beststoryblog.info/ozem-lite-slim/ro/canale/img/img-7.jpg"]
  },
  {
    avatar: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/avat-11.jpg",
    name: "Ана-Мария, 34 года, Брашов",
    time: "",
    text: "После беременности я набрала почти 20 кг и не могла вернуть прежнюю форму. Комплексы, отсутствие уверенности, даже муж начал подшучивать над моим весом. Я перепробовала всё, но ничего не помогало. Ozem Lite стал моим спасением! За 6 недель я похудела на 12 кг, вернулась к размеру одежды, который носила до родов. Теперь я снова чувствую себя молодой и красивой!",
    image: ["https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-15.jpg", "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-16.jpg"]
  },
];

const ReviewsSection = () => {
  return (
    <section>
      <ContainerLayout className={style.reviewsSection}>
        <span className={style.reviewsSection__title}>Отзывы:</span>
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