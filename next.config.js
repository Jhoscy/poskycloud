/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
module.exports = {
  // Your Next.js configuration options here
  output: isProd ? 'export' : undefined,
  basePath: "/poskycloud",
  assetPrefix: isProd ? "https://jhoscy.github.io/poskycloud/": undefined,
};
