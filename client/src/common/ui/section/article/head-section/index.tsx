import Image from "next/image";

import Tag from "~/common/ui/component/article/tag";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const HeadSection = () => {
  return (
    <section>
      <ContainerLayout className={style.headSection}>
        <div className={style.headTags}>
          <Tag icon="award" title="#1 of this week" />
          <Tag icon="star" title="New" />
        </div>

        <div className={style.headContent}>
          <span className={style.headContent__title}>Healthy Lifestyle: Simple Habits for Big Changes</span>
          <span className={style.headContent__subtitle}>Small steps every day lead to big results.</span>
        </div>

        <div className={style.headInfo}>
          <div className={style.headInfo__profile}>
            <Image
              src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg"
              width={32}
              height={32}
              alt="avatar"
              className={style.headInfo__profileAvatar}
            />
            <span className={style.headInfo__profileName}>James Ostin</span>
          </div>
          <span className={style.headInfo__info}>12 min read · June 15, 2025</span>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HeadSection;
