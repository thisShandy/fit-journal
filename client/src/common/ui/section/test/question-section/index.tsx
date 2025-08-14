import style from "./style/style.module.scss";
import CtaButton from "~/common/ui/component/test/cta-button";

interface IButtonItem {
  id: number | string;
  text: string;
  onClick?: () => void;
}

interface QuestionSectionProps {
  question: string;
  buttons: IButtonItem[];
}

const QuestionSection: React.FC<QuestionSectionProps> = ({ question, buttons }) => {
  return (
    <section className={style.questionSection}>
      {question && <h2 className={style.questionSection__title}>{question}</h2>}

      <div className={style.buttonList}>
        {Array.isArray(buttons) &&
          buttons.map((btn) => (
            <CtaButton key={btn.id} title={btn.text} onClick={btn.onClick} />
          ))}
      </div>
    </section>
  );
};

export default QuestionSection;
