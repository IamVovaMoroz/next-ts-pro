// import { SignUp } from '@clerk/nextjs'

// export default function Page(){
// 	return <SignUp />;
// }


import { SignUp } from '@clerk/nextjs';

export async function generateStaticParams() {
  // Поскольку это динамический маршрут, мы можем вернуть пустой paths
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps() {
  // getStaticProps может возвращать пустые props для данной страницы
  return {
    props: {},
    revalidate: 1, // Эта страница будет пересоздаваться раз в секунду
  };
}

export default function Page() {
	return <SignUp />;
}