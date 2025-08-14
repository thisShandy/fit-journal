import style from "./style/style.module.scss";

const Progress = () => {
  return (
    <div className={style.progress}>
      <div className={style.progress__line} />
    </div>
  );
};

export default Progress;