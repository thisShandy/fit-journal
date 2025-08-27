import Image from "next/image";

import Tag from "~/common/ui/component/article/tag";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const HeadSection = () => {
  return (
    <section>
      <ContainerLayout className={style.headSection}>
        <div className={style.headTags}>
          <Tag icon="award" title="Nr. 1 al acestei săptămâni" />
          <Tag icon="star" title="Nou" />
        </div>

        <div className={style.headContent}>
          <span className={style.headContent__title}>Ожирение и лишний вес — скрытая причина смертности в Румынии!</span>
          <span className={style.headContent__subtitle}>«Но до сих пор в аптеках нет препарата, который действительно решает эту проблему...»</span>
        </div>

        {/*<div className={style.headInfo}>*/}
        {/*  <div className={style.headInfo__profile}>*/}
        {/*    <Image*/}
        {/*      src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg"*/}
        {/*      width={32}*/}
        {/*      height={32}*/}
        {/*      alt="avatar"*/}
        {/*      className={style.headInfo__profileAvatar}*/}
        {/*    />*/}
        {/*    <span className={style.headInfo__profileName}>Andrei Popescu</span>*/}
        {/*  </div>*/}
        {/*  <span className={style.headInfo__info}>Lectură de 12 minute · 17 august 2025</span>*/}
        {/*</div>*/}
      </ContainerLayout>
    </section>
  );
};

export default HeadSection;
