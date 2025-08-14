import QuestionHeader from "~/common/ui/component/test/question-header";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const MeetSection = () => {
  return (
    <section>
      <ContainerLayout>
        <QuestionHeader
          title="🔥 Узнай, что мешает худеть — начни менять тело за 7 дней"
          subtitle="💡 Всего 3 вопроса — и ты узнаешь свой персональный путь к стройности"
        />
      </ContainerLayout>
    </section>
  );
};

export default MeetSection;