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

const section1Text = "Ежедневно в Румынии от осложнений, связанных с ожирением и лишним весом, <span style='color: #f83f3f; font-weight: bold'>умирают более 450 человек.</span> Это страшные цифры, о которых предпочитают молчать.";
const section2Text = "Во время одного из ток-шоу на национальном телевидении произошёл неожиданный инцидент: приглашённые эксперты обсуждали влияние питания на здоровье, когда один из врачей вдруг сказал то, что не входило в сценарий. Его слова ошеломили и зрителей, и участников программы.";
const section3Text = "Доктор Кэлэру прямо заявил:";
const section3Quote = "«Мы закрываем глаза на проблему, которая каждый день уносит жизни сотен румын! Почему никто не говорит об ожирении? <span style='color: #f83f3f; font-weight: bold'>Почему молчат о том, что уже существует средство, которое может помочь полностью избавиться от лишнего веса?</span>»";
const section4Text = "В студии начался переполох. Ведущие пытались прервать врача, но он продолжал:";
const section4Quote = "«Ожирение — это одна из главных причин смертности в Румынии. Ежегодно из-за осложнений, вызванных лишним весом, <span style='color: #f83f3f; font-weight: bold'>умирает более 160 тысяч человек!</span> И это при том, что решение уже найдено!»";

const section1Title = "<h3 style='color: #f83f3f;'>Ожирение — одна из основных причин смертности людей. Не только в Румынии, но и во всем мире!</h3>";

const section5Title = "<h3>Наше расследование</h3>";
const section5Text = "Мы связались с доктором Кэлэру, чтобы узнать, о каком методе идёт речь.";

const section6Quote = "<span style='font-weight: bold;'>Репортёр:</span> Доктор, неужели всё так серьёзно?";
const section7Quote = "<span style='font-weight: bold;'>Доктор Кэлэру:</span> Ещё как. Но самое страшное — молчание. На фармацевтическом рынке слишком много интересов. Лекарства от лишнего веса, которые сегодня рекламируют, — это лишь способ выкачивания денег из карманов людей.";
const section8Quote = "<span style='font-weight: bold;'>Репортёр:</span> Но существует ли реальное решение?";
const section9Quote = "<span style='font-weight: bold;'>Доктор Кэлэру:</span> Да. Его создала команда молодых исследователей из Бухареста. Они разработали препарат <span style='color: #f83f3f; font-weight: bold'>Ozem Lite Slim, он даёт РЕАЛЬНОЕ снижение веса от 3 кг в неделю</span> без диет, спорта и химических стимуляторов!";

const section10Title = "<h3>Доктор Кэлэру:</h3>";
const section10Quote = "«Slimetrix Forte запускает естественный процесс жиросжигания. Организм начинает работать сам на себя, без изнуряющих диет и тренировок. Поэтому тысячи румын уже смогли похудеть без риска для здоровья»";

const section11Title = "<h3>Результаты тестирования</h3>";
const section11Text = "В независимом исследовании участвовали 120 человек с ожирением 1–2 степени. За месяц:";
const section11Results = [
  "97% участников потеряли от 10 кг",
  "89% отметили улучшение самочувствия"
];

const imageMock = {
  image: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/img-1.jpg",
  text: ""
};

const image2Mock = {
  image: "https://beststoryblog.info/ozem-lite-slim/ro/canale/img/img-2.jpg",
  text: ""
};

const Article = () => {
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

      <TextSection text={section11Title} />
      <TextSection text={section11Text} />
      <ContainerLayout>
        <ul
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",

            width: "100%",
            paddingLeft: 24,
          }}
        >
          {section11Results.map((item, i) => (
            <li
              key={`index_${i}`}
              style={{
                fontSize: "1.1rem",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </ContainerLayout>

      {/*<TextSection text={section2Title} />*/}
      {/*<TextSection text={section2Text} />*/}
      {/*<QuoteSection text={section2Quote} />*/}

      {/*<TextSection text={section3Title} />*/}
      {/*<TextSection text={section3Text} />*/}
      {/*<QuoteSection text={section3Quote} />*/}

      {/*<TextSection text={section4Title} />*/}
      {/*<TextSection text={section4Text} />*/}
      {/*<QuoteSection text={section4Quote} />*/}

      {/*<TextSection text={conclusionTitle} />*/}
      {/*<TextSection text={conclusionText} />*/}

      <div></div>

      <ContainerLayout>
        <div className={style.resultOrder}>
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
              <span className={style.resultOrder__infoSubtitle}>Ofertă<br />specială!</span>
              <div className={style.resultOrder__infoPrice}>
                <span className={style.resultOrder__infoPriceOld}>198 RON</span>
                <span className={style.resultOrder__infoPriceNew}>99 RON</span>
              </div>
            </div>
          </div>

          <SubmitForm />
        </div>
      </ContainerLayout>
    </ArticleLayout>
  );
};

export default Article;
