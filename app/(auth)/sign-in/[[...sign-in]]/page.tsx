import { SignIn } from '@clerk/nextjs'

export const dynamicParams = false;

export default function Page(){
	return <SignIn />;
}

export function generateStaticParams() {
	return [{}]; 
}
