/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";
import path from 'path';

const nextConfig = {
  // basePath: isProd ? "/E-learning" : "",
  // assetPrefix: isProd ? "/E-learning/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(path.dirname('.'), 'src');
    return config;
  },
};

export default nextConfig;