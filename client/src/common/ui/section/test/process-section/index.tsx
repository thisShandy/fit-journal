import type { FC } from "react";

import { useEffect } from "react";

import QuestionHeader from "~/common/ui/component/test/question-header";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const checksMock = [
  "Анализируем ваши ответы",
  "Персонализируем ваш план",
  "Готовим ваши результаты",
];

interface IProcessSectionProps {
  handleNext: () => void;
}

const ProcessSection: FC<IProcessSectionProps> = ({ handleNext }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 2500);

    return () => clearTimeout(timeout);
  }, [handleNext]);

  return (
    <section>
      <ContainerLayout className={style.processContainer}>
        <QuestionHeader
          title="Создаем ваш личный план похудения"
        />
        <div className={style.processList}>
          {checksMock.map((item, index) => (
            <div key={`check_${index}`} className={style.processCheck}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.processCheck__icon}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentColor"
                  d="M18.0069 2.25952C22.1348 2.33412 26.0684 4.02628 28.9612 6.97186C31.854 9.91744 33.4749 13.881 33.4749 18.0095C33.4749 22.1381 31.854 26.1016 28.9612 29.0472C26.0684 31.9928 22.1348 33.6849 18.0069 33.7595C13.879 33.6849 9.94542 31.9928 7.05259 29.0472C4.15975 26.1016 2.53894 22.1381 2.53894 18.0095C2.53894 13.881 4.15975 9.91744 7.05259 6.97186C9.94542 4.02628 13.879 2.33412 18.0069 2.25952ZM14.736 23.1258L10.8789 19.2652C10.5632 18.9484 10.3859 18.5194 10.3859 18.0721C10.3859 17.6248 10.5632 17.1958 10.8789 16.879C11.1962 16.5635 11.6255 16.3865 12.0729 16.3865C12.5203 16.3865 12.9496 16.5635 13.2669 16.879L15.984 19.5995L22.7469 12.8367C23.0637 12.5209 23.4928 12.3437 23.94 12.3437C24.3873 12.3437 24.8164 12.5209 25.1332 12.8367C25.4485 13.1537 25.6255 13.5827 25.6255 14.0298C25.6255 14.4769 25.4485 14.9059 25.1332 15.223L17.1755 23.1807C17.0139 23.3414 16.8216 23.4678 16.61 23.5524C16.3984 23.6369 16.1719 23.6779 15.9441 23.6728C15.7163 23.6676 15.4918 23.6165 15.2842 23.5226C15.0767 23.4286 14.8902 23.2936 14.736 23.1258Z"
                />
              </svg>
              <span className={style.processCheck__title}>{item}</span>
            </div>
          ))}
        </div>
        <div className={style.processBar}>
          <div className={style.processBar__line} />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ProcessSection;