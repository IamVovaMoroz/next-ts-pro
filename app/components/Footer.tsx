import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

export function Footer() {
	return (
		<div className="pt-[80px] pb-[40px]">
			<div className="flex items-center justify-center gap-x-[12px]">
				<Image src={Logo} alt="Logo" />
				<p className="font-bold text-[#36485C] text-[17px]">Web Watcher Pro</p>
			</div>

			<ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
				<li><a href="#features">Features</a></li>
				<li><a href="#pricing">Pricing</a></li>
				<li><a href="#faq">FAQ</a></li>
				<li><a href="#contact us">Contact us</a></li>
			</ul>

			<p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
				&copy; Copyright 2024. Web Watcher Pro. All rights reserved.
			</p>

			<div className="flex items-center justify-center gap-x-[56px] pt-[40px] cursor-pointer">
				
				<a href="https://www.facebook.com/volodymyr.moroz.83">
					<Image src="/assets/Facebook.svg" alt="Facebook" width={21} height={20} />
				</a>
				<Image src={Feed} alt="Feed" />
				<Image src={Twitter} alt="Twitter" />
			</div>
		</div>
	);
}