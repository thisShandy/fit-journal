import Image from "next/image";

import Tag from "~/common/ui/component/article/tag";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const HeadSection = () => {
  return (
    <section className={style.headSection}>
      <ContainerLayout className={style.headSection}>
        <div className={style.headSection__tags}>
          <Tag icon="award" title="#1 of this week" />
          <Tag icon="star" title="New" />
        </div>

        <div className={style.headSection__text}>
          <span className={style.headSection__textTitle}>You’re using ChatGPT wrong. Here’s how to prompt like a pro</span>
          <span className={style.headSection__textDescription}>Smarter prompts lead to smarter responses.</span>
        </div>

        <div className={style.headSection__info}>
          <div className={style.headSection__infoProfile}>
            <Image
              src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg"
              width={24}
              height={24}
              alt="avatar"
              className={style.headSection__profileAvatar}
            />
            <span className={style.headSection__profileName}>James Ostin</span>
          </div>
          <span className={style.headSection__infoTime}>12 min read · June 15, 2025</span>
        </div>

        <div className={style.headSection__border}></div>
      </ContainerLayout>
    </section>
  );
};

export default HeadSection;
