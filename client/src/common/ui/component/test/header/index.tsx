import Link from "next/link";

import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";

const Header = () => {
  return (
    <header className={style.headerWrapper}>
      <ContainerLayout className={style.header}>
        <Link href="/" className={style.headerLogo}>
          <span className={style.headerLogo__title}>FitJournal</span>
        </Link>
      </ContainerLayout>
    </header>
  );
};

export default Header;
