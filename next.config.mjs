// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	async redirects() {
// 	  return [
// 		{
// 		  source: '/sign-in/[[...sign-in]]',
// 		  destination: '/api/clerk/sign-in/[[...sign-in]]',
// 		  permanent: false,
// 		},
// 	  ]
// 	},
//   }
  
//   export default nextConfig;
  
/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
	  unoptimized: true,
	},
  };
  
  module.exports = nextConfig;