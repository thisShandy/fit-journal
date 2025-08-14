import Progress from "~/common/ui/component/test/progress";
import Link from "next/link";

import style from "./style/style.module.scss";
import ContainerLayout from "~/common/ui/layout/container-layout";

const Header = () => {
  return (
    <header>
      <ContainerLayout>
        <Link href="/" className={style.headerLogo}>
          <span className={style.headerLogo__title}>FitJornual</span>
        </Link>
        <Progress />
      </ContainerLayout>
    </header>
  );
};

export default Header;
