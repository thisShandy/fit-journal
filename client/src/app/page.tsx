import { getTranslations } frm "next-intl/server";

const Home = async () => {
  const t = await getTranslations("home");

  return (
    <div>
      <span>{t("message.hello")}</span>
    </div>
  );
};

export default Home;
