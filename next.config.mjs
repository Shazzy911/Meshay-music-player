/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if necessary
        hostname: "images.unsplash.com", // Replace with the actual hostname
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.alamy.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "zckzxwurwibtoteccdta.supabase.co",
      },
      // You can add more patterns for additional domains if needed
    ],
  },
};

export default nextConfig;
