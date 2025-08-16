import type { FC } from "react";
import type { IButtonItem } from "~/common/ui/section/test/question-section";

import Image from "next/image";
import { useEffect } from "react";

import { useMask } from "@react-input/mask";

import CtaButton from "~/common/ui/component/test/cta-button";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const imageListMock = [
  "/assets/image/test/result-image-1.png",
  "/assets/image/test/result-image-2.png",
  "/assets/image/test/result-image-4.png",
  "/assets/image/test/result-image-3.png"
];

const usePhoneMask = () => {
  const inputRef = useMask({
    mask: "+40 7xx xxx xxx",
    replacement: { x: /\d/ },
    showMask: true,
    separate: true
  });

  const maskString = "+40 7xx xxx xxx";
  const firstXIndex = maskString.indexOf("x");

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleFocus = () => {
      requestAnimationFrame(() => {
        const value = input.value;
        const nextFreeIndex = value.indexOf("x");
        const pos = nextFreeIndex !== -1 ? nextFreeIndex : value.length;
        input.setSelectionRange(pos, pos);
      });
    };

    input.addEventListener("focus", handleFocus);
    return () => input.removeEventListener("focus", handleFocus);
  }, [inputRef, firstXIndex]);

  return inputRef;
};

interface IResultSectionProps {
  answers: IButtonItem[];
}

const ResultSection: FC<IResultSectionProps> = ({ answers }) => {
  const phoneMask = usePhoneMask();

  const help = [
    {
      id: 11,
      text: "Formula activează metabolismul, accelerează arderea caloriilor și inițiază procesul de slăbire."
    },
    {
      id: 12,
      text: "Formula activează metabolismul, accelerează arderea caloriilor și inițiază procesul de slăbire."
    },
    {
      id: 13,
      text: "Formula sporește tonusul, oferă un plus de energie și determină organismul să ardă calorii chiar și în repaus."
    }
  ];

  return (
    <section>
      <ContainerLayout className={style.resultContainer}>
        <div className={style.resultHeader}>
          <span className={style.resultHeader__subtitle}>Din răspunsurile tale este evident</span>
          <span className={style.resultHeader__title}>
            Principala cauză a excesului de greutate — {answers[0].text}
          </span>
        </div>

        <div className={style.resultSolution}>
          <span className={style.resultSolution__title}>Medicii au găsit deja soluția!</span>
          <div className={style.resultSolution__content}>
            <Image
              src="/assets/image/test/doctor.jpg"
              alt="imagine medic"
              width={376}
              height={338}
              className={style.resultSolution__contentImage}
            />
            <div className={style.resultSolution__contentInfo}>
              <span className={style.resultSolution__contentText}>
                O echipă de nutriționiști a dezvoltat o formulă unică ce combate exact cauza ta.
              </span>
              <span className={style.resultSolution__contentText}>
                {help.find(el => el.id === answers[0].id)?.text || ""}
              </span>
            </div>
          </div>
          <CtaButton title="🍏 Vreau să-mi controlez pofta de mâncare" />
        </div>

        <div className={style.resultInfo}>
          <span className={style.resultInfo__title}>Peste 14 zile vei simți…</span>
          <div className={style.resultInfo__info}>
            <span className={style.resultInfo__infoTitle}>
              ✅ Până la −5 kg chiar din prima săptămână
            </span>
            <span className={style.resultInfo__infoTitle}>✅ Dispare pofta de mâncare seara</span>
            <span className={style.resultInfo__infoTitle}>✅ Mai multă energie dimineața</span>
          </div>
          <CtaButton title="🚀 Începe chiar de astăzi!" />
        </div>

        <div className={style.resultResults}>
          <span className={style.resultResults__title}>🏆 Sute de povești fericite!</span>
          <div className={style.resultResults__content}>
            {imageListMock.map(item => (
              <Image
                key={item}
                className={style.resultResults__contentImage}
                src={item}
                alt="imagine înainte/după"
                width={400}
                height={266}
              />
            ))}
          </div>
        </div>

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

          <form
            action="https://greattop-goods.press/ozem-lite-slim/ro/send.php"
            method="POST"
          >
            <div className={style.resultOrder__form}>
              <div className={style.resultOrder__formGroup}>
                <label className={style.resultOrder__formLabel} htmlFor="name">
                  Nume
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={style.resultOrder__formInput}
                  placeholder="Apasă aici să scrii"
                  required
                />
              </div>

              <div className={style.resultOrder__formGroup}>
                <label className={style.resultOrder__formLabel} htmlFor="phone">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  ref={phoneMask}
                  type="tel"
                  required
                  pattern="\+40 7\d{2} \d{3} \d{3}"
                  title="Introduceți un număr de telefon valid (+40 7xx xxx xxx)"
                  className={style.resultOrder__formInput}
                />
              </div>
            </div>

            <div className={style.resultOrder__footer}>
              <CtaButton title="🔥 Comandă cu reducere" type="submit" />
              <span className={style.resultOrder__footerSubtitle}>Au mai rămas 7 pachete!</span>
            </div>
          </form>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ResultSection;
