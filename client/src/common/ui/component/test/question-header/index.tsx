import type { FC } from "react";

import style from "./style/style.module.scss";

interface IQuestionHeaderProps {
  title: string;
  subtitle?: string;
}

const QuestionHeader: FC<IQuestionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={style.questionHeader}>
      <span className={style.questionHeader__title}>{title}</span>
      {subtitle && (
        <span className={style.questionHeader__subtitle}>{subtitle}</span>
      )}
    </div>
  );
};

export default QuestionHeader;