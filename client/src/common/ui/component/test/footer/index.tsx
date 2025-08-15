import Image from "next/image";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const logos = [
  "/assets/image/test/pro_tv.png",
  "/assets/image/test/digi24.png",
  "/assets/image/test/liber_tatea.png"
];

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <ContainerLayout className={style.footer}>
        {logos.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`footer_logo_${i}`}
            width={70}
            height={70}
            className={style.footer__image}
          />
        ))}
      </ContainerLayout>
    </footer>
  );
};

export default Footer;
