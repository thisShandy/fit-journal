import Image from "next/image";

import style from "./style/style.module.scss";


const Footer = () => {
  return (
    <footer className={style.footer}>
      <Image
        src={"https://api.logobank.uz/media/logos_png/ADV_C-01.png"}
        alt={"image"}
        width={73}
        height={73}
        className={style.imageSection__image}
      />
      <Image
        src={"https://api.logobank.uz/media/logos_png/ADV_C-01.png"}
        alt={"image"}
        width={73}
        height={73}
        className={style.imageSection__image}
      />
      <Image
        src={"https://api.logobank.uz/media/logos_png/ADV_C-01.png"}
        alt={"image"}
        width={73}
        height={73}
        className={style.imageSection__image}
      />
    </footer>
  );
};

export default Footer;
