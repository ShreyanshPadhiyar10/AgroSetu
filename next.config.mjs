/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/farmer",
        destination: "/farmer/register",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
