import Image from 'next/image';
import Check from '../../public/assets/check.svg'
import Check1 from '../../public/assets/check1.svg'


export function Pricing() {
	return (
		<div id="pricing" className='py-[48px] lg:py-[60px]'>
			<h1 className='text-[#172026] text-center text-[24px] font-medium text-2xl lg:text-[42px]'>Flexible plans for you</h1>
			<p className='text-[#36485C] pt-[16px] pb-[40px] text-center  lg:text-[18px]'>No hidden fees!</p>

			<div className='flex flex-col gap-y-6 lg:flex-row gap-x-[24px]'>
				<div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
					<div>
						<h3 className='font-medium text-[#4328EB] text-[18px] lg:text-xl'>Free Trial</h3>
						<p className='text-[#36485C] pt-[12px] lg:text-[18px]'>Perfect for testing</p>
						<h2 className='pt-4 text-2xl font-medium lg:text-[42px]'>0$<span className='text-[#5F7896]'>/mo</span></h2>

						<ul className='flex flex-col gap-y-2 pt-4 text-[#5F7896]'>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check} alt='Check mark' />
							</span>No credit card required</li>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check} alt='Check mark' />
							</span>30 Days free trial</li>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check} alt='Check mark' />
							</span>Empower your website management</li>
						</ul>
					</div>
					<button className='mt-[16px] rounded-[4px] bg-[#FFFFFF] py-[14px] text-[#4328EB] font-medium'>Try for Free Now</button>
				</div>


				<div className='w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between'>
					<div>
						<h3 className='font-medium text-white text-[18px] lg:text-xl'>Per month</h3>
						<p className='text-[#F4F8FA] pt-[12px] lg:text-[18px]'>Easy to pay</p>
						<h2 className='pt-4 text-2xl text-white font-medium lg:text-[42px]'>9.99$<span className='text-[#F4F8FA]'>/mo</span></h2>

						<ul className='flex flex-col gap-y-2 pt-4 text-[#F4F8FA]'>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check1} alt='Check mark' />
							</span>Optimize sales strategies and maximize revenue</li>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check1} alt='Check mark' />
							</span>Streamline sales processes for increased efficiency</li>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check1} alt='Check mark' />
							</span>Identify opportunities and make informed decisions</li>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check1} alt='Check mark' />
							</span>24/7 customer support</li>
						</ul>
					</div>
					<button className='mt-[16px] rounded-[4px] bg-[#FFFFFF] py-[14px] text-[#4328EB] font-medium'>Get started</button>
				</div>


				<div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
					<div>
						<h3 className='font-medium text-[#4328EB] text-[18px] lg:text-xl'>Per year</h3>
						<p className='text-[#36485C] pt-[12px] lg:text-[18px]'>Best offer with 20% discount</p>
						<h2 className='pt-4 text-2xl font-medium lg:text-[42px]'>99$<span className='text-[#5F7896]'>/year</span></h2>

						<ul className='flex flex-col gap-y-2 pt-4 text-[#5F7896]'>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check} alt='Check mark' />
							</span>Optimize sales strategies and maximize revenue</li>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check} alt='Check mark' />
							</span>Streamline sales processes for increased efficiency</li>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check} alt='Check mark' />
							</span>Identify opportunities and make informed decisions</li>
							<li className='flex items-center gap-x-2'><span>
								<Image src={Check} alt='Check mark' />
							</span>24/7 customer support</li>

						</ul>
					</div>
					<button className='mt-[16px] rounded-[4px] bg-[#FFFFFF] py-[14px] text-[#4328EB] font-medium'>Get Started</button>
				</div>

			</div>
		</div>)
}