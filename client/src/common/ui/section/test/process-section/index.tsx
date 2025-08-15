import QuestionHeader from "~/common/ui/component/test/question-header";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const checksMock = [
  "Анализируем ваши ответы",
  "Персонализируем ваш план",
  "Готовим ваши результаты",
];

const ProcessSection = () => {
  return (
    <section>
      <ContainerLayout>
        <QuestionHeader
          title="Создаем ваш личный план похудения"
        />
        <div>
          {checksMock.map((item, index) => (
            <div key={`check_${index}`}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ProcessSection;