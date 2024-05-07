"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
	{
		question: "What is your platform about?",
		answer:
			"Our platform is a comprehensive tool designed to streamline website management tasks. From monitoring website performance to optimizing user experience, our platform offers a range of features to help you achieve your online goals.",
	},
	{
		question: "How can your platform benefit my business?",
		answer:
			"By using our platform, you can gain valuable insights into your website's performance and user behavior. This can help you make informed decisions, improve your online presence, and ultimately drive growth for your business.",
	},
	{
		question: "Is your platform suitable for beginners?",
		answer:
			"Yes, our platform is designed to be user-friendly and accessible to users of all levels of expertise. Whether you're a seasoned web developer or just starting out, you'll find our platform intuitive and easy to use.",
	},
	{
		question: "What kind of support do you offer?",
		answer:
			"We offer comprehensive customer support to help you make the most of our platform. Our team is available to assist you with any questions or issues you may encounter, ensuring a smooth and seamless experience.",
	},
	{
		question: "Can I customize the platform to suit my needs?",
		answer:
			"Yes, our platform offers a range of customization options to suit your specific requirements. From dashboard layouts to data visualization tools, you can tailor the platform to meet your unique needs and preferences.",
	},
];

export function Faq() {
	return (
		<div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
			<div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
				<h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
					Frequently Asked Questions
				</h3>
				<h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
					Get Answers to Common Queries
				</h1>
				<p className="text-[#36485C] pb-[24px]">
					Explore answers to some of the frequently asked questions about our platform below.
				</p>
			</div>

			<div className="lg:w-2/3">
				<Accordion.Root
					type="single"
					defaultValue="item-1"
					collapsible
					className="flex flex-col gap-y-4"
				>
					{items.map((item, index) => (
						<div key={index}>
							<Accordion.Item
								value={`item-${index + 1}`}
								className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
							>
								<Accordion.Header>
									<Accordion.Trigger className="flex w-full items-center justify-between">
										<p className="text-left font-medium text-[#172026] lg:text-[18px]">
											{item.question}
										</p>
										<span>
											<Image
												src={Plus}
												alt="See more"
												className="h-10 w-10 lg:w-6 lg:h-6"
											/>
										</span>
									</Accordion.Trigger>
								</Accordion.Header>

								<Accordion.Content>
									<p className="pt-2 text-[#36485C]">{item.answer}</p>
								</Accordion.Content>
							</Accordion.Item>
						</div>
					))}
				</Accordion.Root>
			</div>
		</div>
	);
}