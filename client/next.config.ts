import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin("./src/common/core/i18n/request.ts");

export default withNextIntl(nextConfig);
