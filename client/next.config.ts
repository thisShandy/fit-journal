import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.vokrug.tv",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.7days.ru",
        pathname: "**",
      },
    ],
  }
};

const withNextIntl = createNextIntlPlugin("./src/common/core/i18n/request.ts");

export default withNextIntl(nextConfig);
