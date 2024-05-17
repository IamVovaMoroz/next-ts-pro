import { SignIn } from '@clerk/nextjs'
import generateStaticParams from './generateStaticParams';
export const dynamicParams = false;


export { generateStaticParams };

export default function Page(){
	return <SignIn />;
}

