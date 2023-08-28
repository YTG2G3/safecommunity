/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "littlevisuals.co",
                port: '',
                pathname: "/images/**"
            }
        ]
    }
}

module.exports = nextConfig
