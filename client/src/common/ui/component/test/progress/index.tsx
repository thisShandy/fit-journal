import type { FC } from "react";

import style from "./style/style.module.scss";

interface IProgressProps {
  step: number;
}

const Progress: FC<IProgressProps> = ({ step }) => {
  return (
    <div className={style.progress}>
      <div
        className={style.progress__line}
        style={{
          maxWidth: `calc(100% / 3 * ${step + 1}`
        }}
      />
    </div>
  );
};

export default Progress;