/* eslint-disable */
// @ts-nocheck
"use client";

import ArticleLayout from "~/common/ui/layout/article-layout";
import HeadSection from "~/common/ui/section/article/head-section";
import ImageSection from "~/common/ui/section/article/image-section";
import QuoteSection from "~/common/ui/section/article/quote-section";
import TextSection from "~/common/ui/section/article/text-section";
import SubmitForm from "~/common/ui/component/submit-form";
import ContainerLayout from "~/common/ui/layout/container-layout";
import Header from "~/common/ui/component/test/header";
import Image from "next/image";

import style from "./style/style.module.scss";
import ReviewsSection from "~/common/ui/section/article/reviews-section";
import CtaButton from "~/common/ui/component/test/cta-button";

const section1Text = "Zilnic, în România, din cauza complicațiilor asociate obezității și excesului de greutate, <span style='color: #f83f3f; font-weight: bold'>mor peste 450 de persoane.</span> Sunt cifre înfricoșătoare, despre care se preferă să se tacă.";
const section2Text = "În timpul unei emisiuni TV naționale a avut loc un incident neașteptat: experții invitați discutau despre influența alimentației asupra sănătății, când unul dintre medici a spus brusc ceva ce nu făcea parte din scenariu. Cuvintele lui i-au șocat atât pe telespectatori, cât și pe participanții din platou.";
const section3Text = "Doctorul Călăru a declarat direct:";
const section3Quote = "«Închidem ochii în fața unei probleme care, în fiecare zi, ia viețile a sute de români! De ce nimeni nu vorbește despre obezitate? <span style='color: #f83f3f; font-weight: bold'>De ce se tace despre faptul că există deja un remediu care poate ajuta să scapi complet de kilogramele în plus?</span>»";
const section4Text = "În studio a izbucnit agitația. Prezentatorii au încercat să-l întrerupă pe medic, dar el a continuat:";
const section4Quote = "«Obezitatea este una dintre principalele cauze ale mortalității în România. Anual, din cauza complicațiilor provocate de excesul de greutate, <span style='color: #f83f3f; font-weight: bold'>mor peste 160 de mii de oameni!</span> Și asta în condițiile în care soluția a fost deja găsită!»";

const section1Title = "<h3 style='color: #f83f3f;'>Obezitatea — una dintre principalele cauze ale mortalității. Nu doar în România, ci în întreaga lume!</h3>";

const section5Title = "<h3>Ancheta noastră</h3>";
const section5Text = "Am luat legătura cu doctorul Călăru pentru a afla despre ce metodă este vorba.";

const section6Quote = "<span style='font-weight: bold;'>Reporter:</span> Domnule doctor, chiar este atât de grav?";
const section7Quote = "<span style='font-weight: bold;'>Doctorul Călăru:</span> Și încă cum. Dar cel mai grav este tăcerea. Pe piața farmaceutică există prea multe interese. Medicamentele pentru slăbit promovate astăzi nu sunt decât o modalitate de a scoate bani din buzunarele oamenilor.";
const section8Quote = "<span style='font-weight: bold;'>Reporter:</span> Dar există o soluție reală?";
const section9Quote = "<span style='font-weight: bold;'>Doctorul Călăru:</span> Da. A fost creată de o echipă de tineri cercetători din București. Ei au dezvoltat preparatul <span style='color: #f83f3f; font-weight: bold'>Ozem Lite Slim, care oferă o SCĂDERE REALĂ în greutate de la 3 kg pe săptămână</span> fără diete, sport sau stimulanți chimici!";

const section10Title = "<h3>Doctorul Călăru:</h3>";
const section10Quote = "«Ozem Lite declanșează procesul natural de ardere a grăsimilor. Organismul începe să funcționeze de la sine, fără diete epuizante și antrenamente istovitoare. De aceea, mii de români au reușit deja să slăbească fără riscuri pentru sănătate»";

const section11Title = "<h3>Rezultatele testării</h3>";
const section11Text = "La un studiu independent au participat 120 de persoane cu obezitate de gradul 1–2. Într-o lună:";
const section11Results = [
  "97% dintre participanți au pierdut peste 10 kg",
  "89% au raportat îmbunătățirea stării de sănătate"
];

const imageMock = {
  image: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/img-1.jpg",
  text: ""
};

const image2Mock = {
  image: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/img-2.jpg",
  text: ""
};

const image3Mock = {
  image: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/img-6.jpg",
  text: "Sandra după 1 lună cu Ozem Lite"
};

const image4Mock = {
  image: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/img-5.jpg",
  text: "Maria după 3 luni cu Ozem Lite"
};

const Article = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ArticleLayout>
      <Header />

      <HeadSection />

      <TextSection text={section1Text} />
      <TextSection text={section2Text} />

      <ImageSection {...imageMock} />

      <TextSection text={section3Text} />
      <QuoteSection text={section3Quote} />

      <TextSection text={section4Text} />
      <QuoteSection text={section4Quote} />

      <TextSection text={section1Title} />

      <ImageSection {...image2Mock} />

      <TextSection text={section5Title} />
      <TextSection text={section5Text} />

      <QuoteSection text={section6Quote} />
      <QuoteSection text={section7Quote} />

      <QuoteSection text={section8Quote} />
      <QuoteSection text={section9Quote} />

      <div style={{ width: "100%" }} />

      <TextSection text={section10Title} />
      <QuoteSection text={section10Quote} />

      <ImageSection {...image3Mock} />
      <ImageSection {...image4Mock} />

      <TextSection text={section11Title} />
      <TextSection text={section11Text} />
      <ContainerLayout>
        <ul
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",

            width: "100%",
            paddingLeft: 24
          }}
        >
          {section11Results.map((item, i) => (
            <li
              key={`index_${i}`}
              style={{
                fontSize: "1.1rem"
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </ContainerLayout>

      <div></div>

      <ContainerLayout>
        <div className={style.resultOrder} id="offer">
          <div className={style.resultOrder__info}>
            <span className={style.resultOrder__infoTitle}>🔥 Doar astăzi −50%</span>
            <Image
              src="/assets/image/test/order-image.png"
              alt="ozem"
              width={256}
              height={256}
              className={style.resultOrder__infoImage}
            />
            <div className={style.resultOrder__infoFooter}>
              <span className={style.resultOrder__infoSubtitle}>
                Ofertă
                <br />
                specială!
              </span>
              <div className={style.resultOrder__infoPrice}>
                <span className={style.resultOrder__infoPriceOld}>198 RON</span>
                <span className={style.resultOrder__infoPriceNew}>99 RON</span>
              </div>
            </div>
          </div>

          <SubmitForm />
        </div>
      </ContainerLayout>

      <ReviewsSection />

      <CtaButton title="Încercați chiar acum!" onClick={() => handleScroll("offer")} />
    </ArticleLayout>
  );
};

export default Article;
