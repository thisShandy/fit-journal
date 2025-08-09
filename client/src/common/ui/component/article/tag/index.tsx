import type { FeatherIconName } from "feather-icons-react";
import type { FC } from "react";

import FeatherIcon from "feather-icons-react";

import style from "./style/style.module.scss";

interface ITagProps {
  icon?: FeatherIconName;
  title: string;
}

const Tag: FC<ITagProps> = ({ icon, title }) => {
  return (
    <div className={style.tag}>
      {icon && (
        <FeatherIcon
          size={16}
          icon={icon}
          strokeWidth={2.5}
          stroke="#F5DE10"
        />
      )}
      <span className={style.tag__title}>{title}</span>
    </div>
  );
};

export default Tag;