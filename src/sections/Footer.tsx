import { DistanceComponent } from "@/components/DistanceComponent";
import { Box } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent } from "react";

interface footer {
	menus: { id: number; label: string; sectionId: string }[];
	goToSection(sectionId: string): void;
}

export const Footer: FunctionComponent<footer> = ({ menus, goToSection }) => {
	return (
		<Box
			className='w-full bg-cover bg-fixed relative'
			sx={{
				backgroundImage: `url("/hero-img.jpg")`,
				height: 600,
				marginTop: { xs: "-30px", lg: "-150px" },
			}}
		>
			<Box sx={{ pt: { xs: "100px", lg: "300px" } }}></Box>

			<div className='w-10/12 lg:w-auto grid lg:grid-cols-5 grid-cols-1 container m-auto items-center'>
				<div className='lg:block hidden col-span-1'>
					<Image
						src={"/logo-white.png"}
						width={105}
						height={105}
						alt={"logo"}
					></Image>
				</div>

				<div className='lg:hidden col-span-1'>
					<Image
						src={"/logo-label-white.png"}
						width={280}
						height={36}
						alt={"logo"}
					></Image>

					<DistanceComponent></DistanceComponent>
				</div>

				<div className='lg:col-span-2 text-white'>
					<h3 className='font-futura-bold text-2xl'>Company</h3>
					<div className='mt-7'></div>
					<div className='grid grid-cols-2'>
						{menus.map((menu) => (
							<div key={menu.id} className='mb-7'>
								<button onClick={() => goToSection(menu.sectionId)}>
									{menu.label}
								</button>
							</div>
						))}
					</div>
				</div>
				<div className='lg:col-span-2'>
					<h3 className='font-futura-bold text-2xl'>Contacts</h3>
					<div className='mt-2'></div>
					<div className='grid grid-cols-2'>
						<div>
							<p className='font-futura-regular text-sm text-gray opacity-70'>
								Address:
							</p>
							<p>
								Mārkalnes iela 10, <br /> Rīga, LV-1024 <br /> Latvija
							</p>
						</div>
						<div>
							<p className='font-futura-regular text-sm text-gray opacity-70'>
								Phone:
							</p>
							<a href='tel:+371 26 384 384'>+371 26 384 384</a>

							<p className='font-futura-regular text-sm text-gray opacity-70'>
								Email:
							</p>
							<a href='mailto:info@snowflake.club'>info@snowflake.club</a>
						</div>
					</div>
				</div>
			</div>

			<div className='absolute bottom-7 w-full text-center text-futura-regular text-white opacity-70'>
				© All Rights Reserved. 2023 Sia Snowflake
			</div>
		</Box>
	);
};
