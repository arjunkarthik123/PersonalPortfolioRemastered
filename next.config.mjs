const isGithubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? "/PersonalPortfolioRemastered" : ""),
};

export default nextConfig;
