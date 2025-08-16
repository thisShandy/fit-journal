import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const ResultSection = () => {
  return (
    <section>
      <ContainerLayout className={style.resultContainer}>
        <div className={style.resultHeader}>
          <span className={style.resultHeader__subtitle}>По твоим ответам очевидно</span>
          <span className={style.resultHeader__title}>Главная причина лишнего веса — ⚡️[проблема]</span>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ResultSection;