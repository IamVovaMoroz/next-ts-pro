import { SignUp } from '@clerk/nextjs'

export const dynamicParams = false;

export default function Page(){
	return <SignUp />;
}

export function generateStaticParams() {
	return [{}]; 
}
