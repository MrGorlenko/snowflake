import React, { FunctionComponent } from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { ButtonComponent } from "../components/ButtonComponent";
import { ComponentWrapper } from "../components/ComponentWrapper";

interface header {
	menus: { id: number; label: string; sectionId: string }[];
	langOptions: { id: number; name: string; locale: string }[];
	goToCart(): void;
	setLocale(locale: string): void;
	goToSection(sectionId: string): void;
	setOpenBurgerMenu(): void;
}

const Header: FunctionComponent<header> = ({
	menus,
	langOptions,
	goToCart,
	setLocale,
	goToSection,
	setOpenBurgerMenu,
}) => {
	return (
		<header className='h-16 w-full bg-beige'>
			<div className='container m-auto h-full grid grid-cols-4 items-center'>
				<div className='col-span-1 hidden lg:block'>
					<Image width={42} height={42} alt='logo' src={"/logo.png"}></Image>
				</div>
				<div className='pl-2 col-span-2 lg:hidden block'>
					<Image width={31} height={33} alt='logo' src={"/logo.png"}></Image>
				</div>
				<div
					className='
						font-futura-regular 
						lg:block lg:col-span-3 
						hidden text-black justify-self-end'
				>
					{menus.map((menu) => (
						<button
							key={menu.id}
							className='mr-6'
							onClick={() => goToSection(menu.sectionId)}
						>
							{menu.label}
						</button>
					))}
					<div className='inline-block relative mr-6'>
						<div className='grid grid-cols-4 gap-4'>
							<div className='col-span-1'>
								<IconButton>
									<div className='w-full h-full flex justify-center items-center'>
										<Image
											src={"/facebook-icon.svg"}
											width={28}
											height={27}
											alt={"facebook"}
										></Image>
									</div>
								</IconButton>
							</div>
							<div className='col-span-1'>
								<IconButton>
									<div className='w-full h-full flex justify-center items-center'>
										<Image
											src={"/instagram-icon.svg"}
											width={28}
											height={27}
											alt={"facebook"}
										></Image>
									</div>
								</IconButton>
							</div>
							<div className='col-span-2'>
								<IconButton sx={{ float: "right" }} onClick={() => goToCart()}>
									<div className='w-full h-full flex justify-center items-center'>
										<Image
											src={"/basket-icon.svg"}
											width={28}
											height={27}
											alt={"basket"}
										></Image>
									</div>
								</IconButton>
							</div>
						</div>
					</div>
					<div className='inline-block relative bg-beige border rounded w-32'>
						<select
							className='bg-transparent custom-select py-2.5 px-3 w-full'
							onChange={(e) => setLocale(e.target.value)}
						>
							{langOptions.map((option) => (
								<option
									key={option.id}
									value={option.locale}
									className='bg-transparent'
								>
									{option.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='lg:hidden block col-span-2 pr-2 justify-self-end'>
					<IconButton>
						<Image
							width={22}
							height={22}
							alt='search'
							src={"/search-icon.svg"}
						></Image>
					</IconButton>

					<IconButton onClick={() => setOpenBurgerMenu()}>
						<Image
							width={28}
							height={14}
							alt='search'
							src={"/burger-lines.svg"}
						></Image>
					</IconButton>
				</div>
			</div>
		</header>
	);
};

export default Header;
