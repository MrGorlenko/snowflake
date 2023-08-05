import React, { FunctionComponent, useState } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { SectionHeading } from "../components/SectionHeading";
import Image from "next/image";
import { InputComponent } from "../components/InputComponent";
import { ComponentWrapper } from "../components/ComponentWrapper";
import { ButtonComponent } from "../components/ButtonComponent";
import { SelectComponent } from "../components/SelectComponent";
import { DistanceComponent } from "@/components/DistanceComponent";

const ContactComponentWrapper = ({ children }: { children: JSX.Element }) => {
	return (
		<ComponentWrapper
			sx={{ width: { xs: "100%", lg: 540 }, height: { xs: 48, lg: 57 } }}
		>
			{children}
		</ComponentWrapper>
	);
};

export const ContactUs: FunctionComponent = () => {
	const [typeOfDistribution, setTypeOfDistribution] = useState<
		string | number | undefined
	>(undefined);

	return (
		<SectionWrapper id={"contacts"}>
			<>
				<DistanceComponent type='top'></DistanceComponent>
				<SectionHeading
					title={"Contact us"}
					subtitle='We are open for new connections'
				></SectionHeading>
				<div className='grid lg:grid-cols-2 grid-cols-1'>
					<div className='lg:block hidden justify-self-center col-span-1'>
						<Image
							width={440}
							height={577}
							src={"/contact-us.png"}
							alt={""}
						></Image>
					</div>
					<div className='col-span-1'>
						<div className='mt-16'></div>

						<ContactComponentWrapper>
							<InputComponent placeholder='Name'></InputComponent>
						</ContactComponentWrapper>

						<div className='mt-9'></div>

						<ContactComponentWrapper>
							<InputComponent placeholder='Email'></InputComponent>
						</ContactComponentWrapper>

						<div className='mt-9'></div>

						<ContactComponentWrapper>
							<SelectComponent
								value={typeOfDistribution}
								placeholder='Type of distribution'
								options={[
									{ id: 1, text: "abc" },
									{ id: 2, text: "xyz" },
								]}
								onChange={(value) => setTypeOfDistribution(value)}
							></SelectComponent>
						</ContactComponentWrapper>

						<div className='mt-9'></div>

						<ContactComponentWrapper>
							<InputComponent placeholder='Message'></InputComponent>
						</ContactComponentWrapper>

						<div className='mt-9'></div>

						<ComponentWrapper
							sx={{
								width: { xs: 188, lg: 260 },
								height: { xs: 43, lg: 57 },
								margin: { xs: "auto", lg: "initial" },
							}}
						>
							<ButtonComponent variant='primary' onClick={() => {}}>
								Get in touch
							</ButtonComponent>
						</ComponentWrapper>
					</div>
				</div>

				<div className='pt-9'></div>
			</>
		</SectionWrapper>
	);
};
