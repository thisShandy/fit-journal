import type { IReviewProps } from "~/common/ui/component/article/review";

import Review from "~/common/ui/component/article/review";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const reviewsListMock: IReviewProps[] = [
  {
    avatar: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/avat-10.jpg",
    name: "Elena, 45 ani, Constanța",
    time: "",
    text: "Mi s-a pus diagnosticul de prediabet. Medicii îmi spuneau: «Slăbiți, altfel veți face diabet zaharat». Am încercat, dar fără succes. După o cură cu Ozem Lite am slăbit 11 kg și valorile glicemiei au revenit la normal. Medicul meu a fost șocat și a spus: «Este prima dată când văd un asemenea rezultat fără diete stricte!»",
    image: [
      "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-13.jpg",
      "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/review1.jpg",
      "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-14.jpg"
    ]
  },
  {
    avatar: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-1.jpg",
    name: "Maria, 52 ani, Cluj-Napoca",
    time: "",
    text: "M-am luptat cu kilogramele în plus mai bine de 15 ani. Diete, fitness, pastile — nimic nu a funcționat. Tensiunea era mereu ridicată, medicii mă avertizau despre un posibil infarct. Când am început să iau Ozem Lite, nu mi-a venit să cred — în prima săptămână am slăbit 2,3 kg! Acum a trecut puțin peste o lună și am slăbit 10 kg. Am din nou energie să trăiesc!",
    image: [
      "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-3.jpg",
      "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-4.jpg"
    ]
  },
  {
    avatar: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/avat-26.jpg",
    name: "Andrei, 35 ani, București",
    time: "",
    text: "Aveam 101 kg și viața devenise un coșmar. Oboseală constantă, lipsă de aer, nici măcar nu puteam urca normal scările. Ozem Lite a schimbat totul. Într-o lună am pierdut 9 kg fără niciun efort. Dar cel mai important — a dispărut pofta de mâncare! Pentru prima dată în viață am simțit că pot să mă controlez fără chin.",
    image: ["https://beststoryblog.info/ozem-lite-slim/ro/canale/img/img-7.jpg"]
  },
  {
    avatar: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/avat-11.jpg",
    name: "Ana-Maria, 34 ani, Brașov",
    time: "",
    text: "După sarcină am luat aproape 20 kg și nu reușeam să-mi recapăt forma de dinainte. Complexe, lipsă de încredere, chiar și soțul a început să glumească pe seama greutății mele. Am încercat totul, dar nimic nu a ajutat. Ozem Lite a fost salvarea mea! În 6 săptămâni am slăbit 12 kg și am revenit la mărimea hainelor pe care o purtam înainte de sarcină. Acum mă simt din nou tânără și frumoasă!",
    image: [
      "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-15.jpg",
      "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/com-16.jpg"
    ]
  }
];

const ReviewsSection = () => {
  return (
    <section>
      <ContainerLayout className={style.reviewsSection}>
        <span className={style.reviewsSection__title}>Recenzii:</span>
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
