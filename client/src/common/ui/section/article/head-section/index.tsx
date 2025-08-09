import Tag from "~/common/ui/component/article/tag";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const HeadSection = () => {
  return (
    <section className={style.headSection}>
      <ContainerLayout>
        <Tag icon="award" title="#1 of this week" />
      </ContainerLayout>
    </section>
  );
};

export default HeadSection;