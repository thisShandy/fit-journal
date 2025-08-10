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
          <span className={style.headContent__title}>You’re using ChatGPT wrong. Here’s how to prompt like a pro</span>
          <span className={style.headContent__subtitle}>Smarter prompts lead to smarter responses.</span>
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
