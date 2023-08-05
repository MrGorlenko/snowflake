import React, { FunctionComponent } from "react";

import { ButtonComponent } from "../components/ButtonComponent";
import { ComponentWrapper } from "../components/ComponentWrapper";
import { DialogComponent } from "@/components/DialogComponent";
import Image from "next/image";
import { DistanceComponent } from "@/components/DistanceComponent";
import { Box, IconButton } from "@mui/material";

interface burgerMenu {
	open: boolean;
	menus: { id: number; label: string; sectionId: string }[];
	goToSection(sectionId: string): void;
	setOpen(open: boolean): void;
}

export const BurgerMenu: FunctionComponent<burgerMenu> = ({
	open,
	menus,
	goToSection,
	setOpen,
}) => {
	const goToSectionHandler = (sectionId: string) => {
		goToSection(sectionId);
		setOpen(false);
	};

	return (
		<DialogComponent open={open} setOpen={setOpen}>
			<>
				<Box mt={2}></Box>
				<div className='flex justify-between w-full pl-2 pr-2'>
					<div>
						<Image width={31} height={33} alt='logo' src={"/logo.png"}></Image>
					</div>
					<div>
						<IconButton onClick={() => setOpen(false)}>
							<Image
								src={"/close-icon.svg"}
								width={19}
								height={19}
								alt={"close"}
							></Image>
						</IconButton>
					</div>
				</div>

				<DistanceComponent></DistanceComponent>

				<div className='w-11/12 m-auto'>
					{menus.map((menu) => (
						<>
							<ComponentWrapper key={menu.id} sx={{ height: 60 }}>
								<ButtonComponent
									variant='outlined'
									onClick={() => goToSectionHandler(menu.sectionId)}
								>
									{menu.label}
								</ButtonComponent>
							</ComponentWrapper>

							<Box mt={3}></Box>
						</>
					))}
					<Box mt={3}></Box>
					<div className='grid grid-cols-2 gap-4'>
						<div className='col-span-1'>
							<ComponentWrapper sx={{ height: 60 }}>
								<ButtonComponent variant='outlined' onClick={() => {}}>
									<div className='w-full h-full flex justify-center items-center'>
										<Image
											src={"/facebook-icon.svg"}
											width={48}
											height={47}
											alt={"facebook"}
										></Image>
									</div>
								</ButtonComponent>
							</ComponentWrapper>
						</div>
						<div className='col-span-1'>
							<ComponentWrapper sx={{ height: 60 }}>
								<ButtonComponent variant='outlined' onClick={() => {}}>
									<div className='w-full h-full flex justify-center items-center'>
										<Image
											src={"/instagram-icon.svg"}
											width={48}
											height={47}
											alt={"facebook"}
										></Image>
									</div>
								</ButtonComponent>
							</ComponentWrapper>
						</div>
					</div>
				</div>
			</>
		</DialogComponent>
	);
};
