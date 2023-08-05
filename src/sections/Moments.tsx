/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { SectionHeading } from "../components/SectionHeading";
import { Box } from "@mui/material";
import { DistanceComponent } from "@/components/DistanceComponent";

const gallery = [
	{ id: 1, src: "/casestudy-01.jpg", gridClass: "row-span-2" },
	{ id: 2, src: "/casestudy-02.jpg", gridClass: "row-span-3" },
	{ id: 3, src: "/casestudy-03.jpg", gridClass: "row-span-3" },
	{ id: 4, src: "/casestudy-04.jpg", gridClass: "row-span-2" },
];

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

				<Box
					className='grid grid-rows-5 grid-cols-2 gap-4'
					sx={{ height: { xs: 270, lg: 1000 } }}
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

				<DistanceComponent type={"bottom"}></DistanceComponent>
			</>
		</SectionWrapper>
	);
};
