/** @type {import('next').NextConfig} */
const nextConfig = {
    future: {
      webpack5: true,
    },
    css: {
      globals: './globals.css',
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Or 'http' if necessary
          hostname: 'images.unsplash.com', // Replace with the actual hostname
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
        },
        // You can add more patterns for additional domains if needed
      ],
    },
      
  };

  export default nextConfig;