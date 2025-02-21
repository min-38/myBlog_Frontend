/** @type {import('next').NextConfig} */

import dotenv from "dotenv"

dotenv.config();

const nextConfig = {
    reactStrictMode: true,
    env: {
        API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL
    },
};

export default nextConfig;