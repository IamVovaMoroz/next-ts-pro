import Image from 'next/image';
import Arrow from '../../public/assets/arrow.png'

export function Cta() {
	return (
		<div className='w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center my-[48px] lg:my-[60px] lg:px-[324px] lg:py-[89px]'>
			<h1 className='text-white text-[42px] font-medium lg:text-[56px] leading-[64px]'>Monitor your website like a pro</h1>
			<p className='text-white pt-[24px] lg:pt-[48px] lg:text-[18px]'>Join over 800+ happy site owners boosting productivity and efficiency!</p>
			<div className='mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]'>
				<a href="#pricing" className='py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit font-medium'>Start Trial</a>
				<a href="#contact us" className='flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0'>Contact us{' '}
				<span>
					<Image src={Arrow} alt='Learn more' />
					{/* <Image src="/assets/arrow.png" alt="Learn more" width={27} height={26} /> */}
				</span></a>
			</div>
		</div>
	)
}