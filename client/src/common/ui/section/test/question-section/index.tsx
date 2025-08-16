import type { FC } from "react";

import CtaButton from "~/common/ui/component/test/cta-button";
import Progress from "~/common/ui/component/test/progress";
import QuestionHeader from "~/common/ui/component/test/question-header";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

export interface IButtonItem {
  id: number;
  text: string;
}

interface QuestionSectionProps {
  index: number;
  question: string;
  buttons: IButtonItem[];
  handleNext: (answer?: number) => void;
}

const QuestionSection: FC<QuestionSectionProps> = ({ index, question, buttons, handleNext }) => {
  return (
    <section className={style.questionSection}>
      <ContainerLayout className={style.questionContainer}>
        <Progress step={index} />
        <QuestionHeader
          title={question}
        />
        <div className={style.buttonList}>
          {buttons.map(btn => (
            <CtaButton
              key={`answer_${btn.id}`}
              title={btn.text}
              onClick={() => handleNext(btn.id)}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default QuestionSection;
