import { FunctionComponent } from "react";

interface sectionHeading {
	title: string;
	subtitle: string;
}

export const SectionHeading: FunctionComponent<sectionHeading> = ({
	title,
	subtitle,
}) => {
	return (
		<>
			<h2 className='font-recoleta-bold lg:text-6xl text-4xl m-auto text-center text-black'>
				{title}
			</h2>
			<p className='font-futura-regular lg:text-2xl text-xl m-auto text-center text-black'>
				{subtitle}
			</p>
		</>
	);
};
