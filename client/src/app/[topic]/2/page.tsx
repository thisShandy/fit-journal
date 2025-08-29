/* eslint-disable */
// @ts-nocheck
"use client";

import Image from "next/image";
import ArticleLayout from "~/common/ui/layout/article-layout";
import CtaButton from "~/common/ui/component/test/cta-button";
import HeadSection from "~/common/ui/section/article/head-section";
import ImageSection from "~/common/ui/section/article/image-section";
import QuoteSection from "~/common/ui/section/article/quote-section";
import TextSection from "~/common/ui/section/article/text-section";
import style from "./style/style.module.scss";
import SubmitForm from "~/common/ui/component/submit-form";
import ContainerLayout from "~/common/ui/layout/container-layout";

const section1Title = (<h3>1. Nutriția ca Fundament</h3>);
const section1Text = "O nutriție adecvată ajută la menținerea energiei și la întărirea sistemului imunitar. Nu este vorba doar despre ceea ce mâncăm, ci și despre modul în care mâncăm.";
const section1Quote = `„Hrana să-ți fie medicament și medicamentul hrană.” — Hipocrate`;

const section2Title = (<h3>2. Mișcarea este Viață</h3>);
const section2Text = "Chiar și 20–30 de minute de mers activ pe zi pot îmbunătăți dispoziția și reduce stresul. Cel mai important este ca mișcarea să aducă bucurie.";
const section2Quote = `„Când corpul se mișcă, mintea se odihnește.” — Înțelepciune orientală`;

const section3Title = (<h3>3. Somnul și Recuperarea</h3>);
const section3Text = "Somnul nu este o pierdere de timp, ci o investiție în sănătate. Un program regulat de somn ajută creierul și corpul să se refacă.";
const section3Quote = `„Somnul este acel lanț de aur care leagă sănătatea și trupul nostru.” — Thomas Dekker`;

const section4Title = (<h3>4. Echilibrul Emoțional</h3>);
const section4Text = "Sănătatea nu ține doar de corp, ci și de minte. Meditația, cititul sau o simplă conversație cu cei dragi pot ajuta la reducerea stresului.";
const section4Quote = `„Sănătatea este armonia dintre trup, minte și suflet.” — Platon`;

const conclusionTitle = (<h4>Concluzie</h4>);
const conclusionText = "Un stil de viață sănătos nu începe cu o revoluție, ci cu pași mici: mai multă apă, o plimbare în aer liber, somn de calitate. Aceste obiceiuri simple creează o bază solidă pentru o viață lungă și activă.";

const imageMock = {
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  text: "Bol proaspăt și colorat, plin de vitamine"
};

const Article = () => {
  return (
    <ArticleLayout>
      <div
        style={{
          width: "100%",
          height: "12px",
        }}
      />

      <HeadSection />

      <TextSection text={section1Title} />
      <TextSection text={section1Text} />
      <QuoteSection text={section1Quote} />

      <ImageSection {...imageMock} />

      <TextSection text={section2Title} />
      <TextSection text={section2Text} />
      <QuoteSection text={section2Quote} />

      <TextSection text={section3Title} />
      <TextSection text={section3Text} />
      <QuoteSection text={section3Quote} />

      <TextSection text={section4Title} />
      <TextSection text={section4Text} />
      <QuoteSection text={section4Quote} />

      <TextSection text={conclusionText} />

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
    </ArticleLayout>
  );
};

export default Article;