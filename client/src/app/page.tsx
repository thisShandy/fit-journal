import { getTranslations } from "next-intl/server";

const Home = async () => {
  const t = await getTranslations("home");

  const test2 = require("next-ints");
  return (
    <div>
      <span>{t("message.hello")}</span>
      <span>Hello</span>
    </div>
  );
};

export default Home;
