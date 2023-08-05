import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
interface SectionWrapper {
	id: string;
	children: JSX.Element;
}

export const SectionWrapper: FunctionComponent<SectionWrapper> = ({
	id,
	children,
}) => {
	return (
		<Box
			id={id}
			component={"section"}
			overflow={"hidden"}
			className='bg-beige w-100'
		>
			<div className='container m-auto lg:pl-0 lg:pr-0 pl-3 pr-3'>
				{children}
			</div>
		</Box>
	);
};
