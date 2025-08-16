import { useEffect } from "react";
import ContainerLayout from "~/common/ui/layout/container-layout";
import style from "./style/style.module.scss";
import CtaButton from "~/common/ui/component/test/cta-button";
import Image from "next/image";
import { useMask } from "@react-input/mask";

const usePhoneMask = () => {
  const inputRef = useMask({
    mask: "+40 7xx xxx xxx",
    replacement: { x: /\d/ },
    showMask: true,
    separate: true,
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

const ResultSection = () => {
  const phoneMask = usePhoneMask();

  return (
    <section>
      <ContainerLayout className={style.resultContainer}>
        <div className={style.resultHeader}>
          <span className={style.resultHeader__subtitle}>По твоим ответам очевидно</span>
          <span className={style.resultHeader__title}>Главная причина лишнего веса — ⚡️[проблема]</span>
        </div>

        <div className={style.resultSolution}>
          <span className={style.resultSolution__title}>Врачи уже нашли решение!</span>
          <div className={style.resultSolution__content}>
            <Image
              src="/assets/image/test/doctor.jpg"
              alt="doctor_image"
              width={376}
              height={338}
              className={style.resultSolution__contentImage}
            />
            <div className={style.resultSolution__contentInfo}>
              <span className={style.resultSolution__contentText}>
                Команда нутрициологов разработала уникальную формулу, которая борется именно с твоей причиной.
              </span>
              <span className={style.resultSolution__contentText}>
                [Формула активирует метаболизм, ускоряет сжигание калорий и запускает процесс снижения веса.](текст зависит от ответа)
              </span>
            </div>
          </div>
          <CtaButton title="🍏 Хочу контролировать аппетит" />
        </div>

        <div className={style.resultInfo}>
          <span className={style.resultInfo__title}>Через 14 дней ты почувствуешь…</span>
          <div className={style.resultInfo__info}>
            <span className={style.resultInfo__infoTitle}>✅ Минус до 5 кг уже в первую неделю</span>
            <span className={style.resultInfo__infoTitle}>✅ Уйдёт тяга к еде вечером</span>
            <span className={style.resultInfo__infoTitle}>✅ Больше энергии утром</span>
          </div>
          <CtaButton title="🚀 Начать уже сегодня!" />
        </div>

        <div className={style.resultResults}>
          <span className={style.resultResults__title}>🏆 Сотни счастливых историй!</span>
          <div className={style.resultResults__content}>
            <Image src="/assets/image/test/result-image-1.png" alt="before/after_image" width={400} height={266} className={style.resultResults__contentImage} />
            <Image src="/assets/image/test/result-image-2.png" alt="before/after_image" width={400} height={266} className={style.resultResults__contentImage} />
            <Image src="/assets/image/test/result-image-3.png" alt="before/after_image" width={400} height={266} className={style.resultResults__contentImage} />
            <Image src="/assets/image/test/result-image-4.png" alt="before/after_image" width={400} height={266} className={style.resultResults__contentImage} />
          </div>
        </div>

        <div className={style.resultOrder}>
          <div className={style.resultOrder__info}>
            <span className={style.resultOrder__infoTitle}>🔥 Только сегодня -50%</span>
            <Image
              src="/assets/image/test/order-image.png"
              alt="ozem"
              width={256}
              height={256}
              className={style.resultOrder__infoImage}
            />
            <div className={style.resultOrder__infoFooter}>
              <span className={style.resultOrder__infoSubtitle}>Специальное предложение!</span>
              <div className={style.resultOrder__infoPrice}>
                <span className={style.resultOrder__infoPriceOld}>198 RON</span>
                <span className={style.resultOrder__infoPriceNew}>99 RON</span>
              </div>
            </div>
          </div>

          <div className={style.resultOrder__form}>
            <div className={style.resultOrder__formGroup}>
              <label className={style.resultOrder__formLabel} htmlFor="name">Имя</label>
              <input
                id="name"
                type="text"
                className={style.resultOrder__formInput}
                placeholder="Apasă aici să scrii"
              />
            </div>

            <div className={style.resultOrder__formGroup}>
              <label className={style.resultOrder__formLabel} htmlFor="phone">Телефон</label>
              <input
                id="phone"
                ref={phoneMask}
                type="tel"
                className={style.resultOrder__formInput}
              />
            </div>
          </div>

          <div className={style.resultOrder__footer}>
            <CtaButton title="🔥 Заказать со скидкой" />
            <span className={style.resultOrder__footerSubtitle}>Осталось 7 упаковок!</span>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ResultSection;
