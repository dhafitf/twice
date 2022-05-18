/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  skipLibCheck: true,
  images: {
    domains: ["i.ytimg.com", "lv2-cdn.azureedge.net", "s3-aop.plusmember.jp", "scontent.cdninstagram.com", "v.phinf.naver.net"],
  },
};

module.exports = nextConfig;
