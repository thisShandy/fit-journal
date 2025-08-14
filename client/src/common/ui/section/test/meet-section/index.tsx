import Image from "next/image";

import CtaButton from "~/common/ui/component/test/cta-button";
import Header from "~/common/ui/component/test/header";
import TestLayout from "~/common/ui/layout/test-layout";

import style from "./style/style.module.scss";
import Footer from "~/common/ui/component/test/footer";

const MeetSection = () => {
  return (
    <section>
      <TestLayout className={style.container__test}>
        <Header />
        <div className={style.progress__container}>
          <div className={style.progress__container_bar}></div>
        </div>
        <span className={style.container__title}>
          🔥 Узнай, что мешает худеть — начни менять тело за 7 дней
        </span>
        <span className={style.container__subtitle}>
          💡 Всего 3 вопроса — и ты узнаешь свой персональный путь к стройности
        </span>
        <Image
          src={"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"}
          alt={"image"}
          width={608}
          height={372}
          className={style.container__test_image}
        />
        <CtaButton title={"Пройти тест и получить план!"} />
        <span className={style.container__note}>
          🕒 Тест занимает 1 минуту — результат сразу на экране
        </span>
        <Footer/>
      </TestLayout>
    </section>
  );
};

export default MeetSection;
