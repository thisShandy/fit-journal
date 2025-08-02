import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const requestHeaders = await headers();
  const requestCookies = await cookies();

  const localeFromCookie = requestCookies.get("locale")?.value;
  const acceptLanguage = requestHeaders.get("accept-language");
  const localeFromHeader = acceptLanguage?.split(",")[0];

  const locale = "en";

  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]
    || requestHeaders.get("x-real-ip")
    || undefined;

  console.log("config", localeFromCookie, localeFromHeader, locale, ip);

  return {
    locale,
    messages: (await import(`../../../../public/locale/${locale}.json`)).default
  };
});