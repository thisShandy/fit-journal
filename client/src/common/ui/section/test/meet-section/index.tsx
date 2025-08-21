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
          title="🔥 Află ce te împiedică să slăbești — începe să-ți schimbi corpul în 7 zile"
          subtitle="💡 Doar 3 întrebări — și vei afla drumul tău personal spre siluetă"
        />
        <Image
          src="/assets/image/test/banner.jpg"
          alt="banner test"
          width={1280}
          height={720}
          className={style.meetImage}
          onClick={handleNext}
        />
        <div className={style.meetContinue}>
          <CtaButton title="Treci testul și primește planul!" onClick={handleNext} />
          <span className={style.meetContinue__text}>🕒 Testul durează 1 minut — rezultatul apare imediat pe ecran</span>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default MeetSection;
