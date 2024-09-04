/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "hjr6rgcrgesdggbt.public.blob.vercel-storage.com",
            },
        ],
    },
};

export default nextConfig;
