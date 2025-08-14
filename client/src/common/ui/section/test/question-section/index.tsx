import type { FC } from "react";

import CtaButton from "~/common/ui/component/test/cta-button";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IButtonItem {
  id: number | string;
  text: string;
  onClick?: () => void;
}

interface QuestionSectionProps {
  question: string;
  buttons: IButtonItem[];
}

const QuestionSection: FC<QuestionSectionProps> = ({ question, buttons }) => {
  return (
    <section className={style.questionSection}>
      <ContainerLayout>
        {question && <h2 className={style.questionSection__title}>{question}</h2>}

        <div className={style.buttonList}>
          {Array.isArray(buttons) &&
            buttons.map((btn) => (
              <CtaButton key={btn.id} title={btn.text} onClick={btn.onClick} />
            ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default QuestionSection;
