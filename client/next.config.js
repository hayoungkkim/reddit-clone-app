/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["www.gravatar.com", "localhost", "ec2-13-231-129-229.ap-northeast-1.compute.amazonaws.com"],
	},
};

module.exports = nextConfig;
