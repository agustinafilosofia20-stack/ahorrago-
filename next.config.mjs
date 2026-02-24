import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  turbopack: {}, // 👈 esto desactiva conflicto con webpack
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);


