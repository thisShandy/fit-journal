import CtaButton from "~/common/ui/component/test/cta-button";
import ContainerLayout from "~/common/ui/layout/container-layout";
import style from "./style/style.module.scss";

const QuestionSection = () => {
  return (
    <section>
      <ContainerLayout className={style.questionSection}>
        <div className={style.questionProgress}></div>

        <CtaButton title="😵‍💫 Постоянный голод" />

        <CtaButton title="🐌 Медленный метаболизм" />

        <CtaButton title="🤧 Нет сил на спорт" />

      </ContainerLayout>
    </section>
  );
};

export default QuestionSection;
