import type { FC } from "react";

import CtaButton from "~/common/ui/component/test/cta-button";
import Progress from "~/common/ui/component/test/progress";
import QuestionHeader from "~/common/ui/component/test/question-header";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IButtonItem {
  id: number | string;
  text: string;
}

interface QuestionSectionProps {
  question: string;
  buttons: IButtonItem[];
  handleNext: () => void;
}

const QuestionSection: FC<QuestionSectionProps> = ({ question, buttons, handleNext }) => {
  return (
    <section className={style.questionSection}>
      <ContainerLayout className={style.questionContainer}>
        <Progress />
        <QuestionHeader
          title={question}
        />
        <div className={style.buttonList}>
          {buttons.map(btn => (
            <CtaButton
              key={`answer_${btn.id}`}
              title={btn.text}
              onClick={handleNext}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default QuestionSection;
