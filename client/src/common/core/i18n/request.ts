import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  console.log("event", requested);
  const locale = "en";

  return {
    locale,
    messages: (await import(`../../../../public/locale/${locale}.json`)).default
  };
});