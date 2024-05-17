import { SignIn } from '@clerk/nextjs'

export const dynamicParams = false;

export default function Page(){
	return <SignIn />;
}
export async function getStaticPaths() {
	return {
	  paths: [],  
	  fallback: true,  
	};
  }
  

export async function generateStaticParams() {
	return {
	  paths: [],  
	  fallback: true,  
	};
  }
  