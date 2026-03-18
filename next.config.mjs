/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/corporateWebsite" : "",
  assetPrefix: isProd ? "/corporateWebsite/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
