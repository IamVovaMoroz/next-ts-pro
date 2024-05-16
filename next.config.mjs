/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
	  return [
		{
		  source: '/sign-in/[[...sign-in]]',
		  destination: '/api/clerk/sign-in/[[...sign-in]]',
		  permanent: false,
		},
	  ]
	},
  }
  
  export default nextConfig;
  
