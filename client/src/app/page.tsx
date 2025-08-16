import { getTranslations } from "next-intl/server";

const Home = async () => {
  const t = await getTranslations("home");

  return (
    <div>
      <span></span>
    </div>
  );
};

export default Home;
