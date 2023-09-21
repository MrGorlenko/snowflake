import React, { FunctionComponent } from "react";
import { ArrowDownIcon } from "../components/ArrowDownIcon";
import { Box } from "@mui/material";
import useTranslation from "next-translate/useTranslation";

export const Hero: FunctionComponent = () => {
	const { t, lang } = useTranslation("common");

	return (
		<Box
			id={"hero"}
			component={"section"}
			className='w-full bg-cover bg-fixed'
			style={{ backgroundImage: `url("/hero-img.jpg")` }}
			sx={{
				height: { lg: "870px", xs: "620px", backgroundSize: "cover" },
			}}
		>
			<Box
				className='w-full grid grid-cols-1 place-content-center'
				sx={{
					height: {
						xs: "100%",
						lg: `calc(100% - 130px)`,
					},
				}}
			>
				{/* {t("Snowflake")} */}
				<h1 className='font-recoleta-bold lg:text-9xl text-7xl m-auto'>
					Snowflake
				</h1>
				<Box mt={2}></Box>
				<p className='font-futura-regular lg:text-2xl text-xl m-auto text-center'>
					Discover a world of exceptional spirits
					<br className='lg:hidden'></br> a on our online
					<br className='lg:block hidden'></br>
					liquor store, where<br className='lg:hidden'></br> taste meets
					convenience
				</p>

				<div className='mb-24'></div>
				<div className='mb-4'></div>

				<p className='font-futura-regular lg:text-2xl text-xl m-auto text-center opacity-70'>
					Keep scrolling
				</p>
				<div className='mb-2'></div>
				<div className='m-auto opacity-70 animate-bounce'>
					<ArrowDownIcon></ArrowDownIcon>
				</div>
			</Box>
		</Box>
	);
};
