/** @type {import('next').NextConfig} */
const withImages = require("next-images");

module.exports = withImages({
  // Your Next.js configuration options here
  basePath: "/poskycloud",
  assetPrefix: "/poskycloud/",
});
