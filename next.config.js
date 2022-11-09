module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["infura-ipfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com",
      },
      {
        protocol: "http",
        hostname: "**.com",
      },
      {
        protocol: "https",
        hostname: "**.net",
      },
      {
        protocol: "http",
        hostname: "**.net",
      },
    ],
  },
};
