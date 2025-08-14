import Image from "next/image";

import QuestionHeader from "~/common/ui/component/test/question-header";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

// import banner from "/assets/image/test/banner.jpg";

const MeetSection = () => {
  return (
    <section>
      <ContainerLayout className={style.meetSection}>
        <QuestionHeader
          title="🔥 Узнай, что мешает худеть — начни менять тело за 7 дней"
          subtitle="💡 Всего 3 вопроса — и ты узнаешь свой персональный путь к стройности"
        />
        <Image
          src="/assets/image/test/banner.jpg"
          alt="test_banner"
          width={1280}
          height={720}
          className={style.meetImage}
        />
        <div className={style.meetContinue}>
          <span className={style.meetContinue__text}>🕒 Тест занимает 1 минуту — результат сразу на экране</span>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default MeetSection;