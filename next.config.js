/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
module.exports = {
  // Your Next.js configuration options here
  output: isProd ? "export" : undefined,
  basePath: "",
  assetPrefix: isProd ? `${process.env.NEXT_PUBLIC_DOMAIN_PATH}` : undefined,
};
