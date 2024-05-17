// import { SignUp } from '@clerk/nextjs'

// export default function Page(){
// 	return <SignUp />;
// }


import { SignUp } from '@clerk/nextjs';

export const dynamicParams = false;

export function generateStaticParams() {
  return [];
}

export default function Page() {
	return <SignUp />;
}