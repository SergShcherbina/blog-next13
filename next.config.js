/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/kiunqv9gbh99/**',
            },
        ],
    },
};

module.exports = nextConfig;
