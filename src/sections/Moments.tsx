/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { Box } from "@mui/material";
import { DistanceComponent } from "@/components/DistanceComponent";
import { gallery } from "@/utils";

export const Moments: FunctionComponent = () => {
	return (
		<SectionWrapper id={"moments"}>
			<>
				<DistanceComponent type='top'></DistanceComponent>
				<SectionHeading
					title={"Savor the Moments"}
					subtitle='Captivating Images of Handcrafted Spirits'
				></SectionHeading>

				<DistanceComponent></DistanceComponent>

				<Box maxWidth={1200} margin={"auto"}>
					<Box
						className='grid grid-rows-5 grid-cols-2 gap-4'
						sx={{ height: { xs: 270, sm: 500, md: 700, lg: 1000 } }}
					>
						{gallery.map((image) => (
							<div key={image.id} className={image.gridClass}>
								<img
									src={image.src}
									className={`h-full w-full rounded-lg`}
									alt={""}
								></img>
							</div>
						))}
					</Box>
				</Box>

				<DistanceComponent type={"bottom"}></DistanceComponent>
			</>
		</SectionWrapper>
	);
};
