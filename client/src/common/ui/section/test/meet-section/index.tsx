import type { FC } from "react";

import Image from "next/image";

import CtaButton from "~/common/ui/component/test/cta-button";
import QuestionHeader from "~/common/ui/component/test/question-header";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IMeetSectionProps {
  handleNext: () => void;
}

const MeetSection: FC<IMeetSectionProps> = ({ handleNext }) => {
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
          <CtaButton title="Пройти тест и получить план!" onClick={handleNext} />
          <span className={style.meetContinue__text}>🕒 Тест занимает 1 минуту — результат сразу на экране</span>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default MeetSection;
