import { SignUp } from '@clerk/nextjs'

export const dynamicParams = false;

export default function Page(){
	return <SignUp />;
}

export async function generateStaticParams() {
	return {
	  paths: [],  // Нет путей для предварительной генерации
	  fallback: true,  // Генерировать HTML на лету для неизвестных путей
	};
  }
  