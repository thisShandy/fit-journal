import type { FC } from "react";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

interface IFooterProps {
  text?: string;
}

const Footer: FC<IFooterProps> = ({ text }) => {
  return (
    <ContainerLayout className={style.footer}>
      <span className={style.footer__title}>{text || "Produsul nu este un dispozitiv medical"}</span>
    </ContainerLayout>
  );
};

export default Footer;