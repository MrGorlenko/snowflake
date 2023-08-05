import React, { FunctionComponent } from "react";
import Image from "next/image";
import { ButtonComponent } from "../components/ButtonComponent";
import { SectionHeading } from "../components/SectionHeading";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentWrapper } from "../components/ComponentWrapper";
import { DistanceComponent } from "@/components/DistanceComponent";

import { introductionContentBlocks } from "@/utils";

const breakLineStringBySymbol = (string: string, symbol: string) => {
	const symbolRegExp = new RegExp(symbol);
	if (!symbolRegExp.test(string)) return string;
	return (
		<>
			{string.split("|")[0]} <br></br>
			{string.split("|")[1]}
		</>
	);
};

const ParagraphContent = ({
	title,
	text,
	textAlign,
}: {
	title: string;
	text: string;
	textAlign: "left" | "right";
}): JSX.Element => {
	return (
		<div
			className='text-black font-futura-regular lg:mb-14 mb-5'
			style={{ textAlign }}
		>
			<h3 className='lg:text-4xl text-lg lg:leading-none leading-5'>
				{breakLineStringBySymbol(title, "|")}
			</h3>
			<p className='lg:text-xl text-sm lg:leading-none leading-5'>
				{breakLineStringBySymbol(text, "|")}
			</p>
		</div>
	);
};

interface introduction {
	goToSection(sectionId: string): void;
}

export const Introduction: FunctionComponent<introduction> = ({
	goToSection,
}) => {
	return (
		<SectionWrapper id={"introduction"}>
			<>
				<DistanceComponent type='top'></DistanceComponent>
				<SectionHeading
					title='From Nature to Bottle'
					subtitle='Introduction'
				></SectionHeading>
				<DistanceComponent></DistanceComponent>

				<div className='hidden lg:grid grid-cols-3 '>
					<div className='justify-self-end pt-40'>
						{introductionContentBlocks.slice(0, 2).map((block) => (
							<ParagraphContent
								key={block.id}
								title={block.title}
								text={block.text}
								textAlign='left'
							></ParagraphContent>
						))}
					</div>
					<div>
						<Image
							width={480}
							height={610}
							alt='bottles'
							src={"/bottles.png"}
						></Image>
					</div>
					<div className='justify-self-start pt-40'>
						{introductionContentBlocks.slice(2).map((block) => (
							<ParagraphContent
								key={block.id}
								title={block.title}
								text={block.text}
								textAlign='right'
							></ParagraphContent>
						))}
					</div>
				</div>

				<div className='lg:hidden grid grid-cols-2 items-center'>
					<div className='cols-span-1'>
						{introductionContentBlocks.map((block) => (
							<ParagraphContent
								key={block.id}
								title={block.title}
								text={block.text}
								textAlign='left'
							></ParagraphContent>
						))}
					</div>
					<div className='cols-span-1'>
						<Image
							src={"/bottles-mobile.png"}
							width={180}
							height={296}
							alt={"bottles"}
						></Image>
					</div>
				</div>

				<div className='mt-5'></div>
				<div className='flex justify-center m-auto'>
					<ComponentWrapper>
						<ButtonComponent
							variant='outlined'
							onClick={() => goToSection("product-line")}
						>
							Product line
						</ButtonComponent>
					</ComponentWrapper>
					<div className='w-6'></div>
					<ComponentWrapper>
						<ButtonComponent
							variant='primary'
							onClick={() => goToSection("contacts")}
						>
							Contacts
						</ButtonComponent>
					</ComponentWrapper>
				</div>
				<DistanceComponent type={"bottom"}></DistanceComponent>
			</>
		</SectionWrapper>
	);
};
