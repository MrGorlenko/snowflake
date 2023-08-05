import React, { FunctionComponent } from "react";
import Image from "next/image";
import { ButtonComponent } from "@/components/ButtonComponent";
import { IconButton } from "@mui/material";

const langOptions = [
	{ id: 1, name: "EN-US" },
	{ id: 2, name: "IT" },
	{ id: 3, name: "FR" },
];

interface header {
	menus: { id: number; label: string; sectionId: string }[];
	goToSection(sectionId: string): void;
	setOpenBurgerMenu(): void;
}

const Header: FunctionComponent<header> = ({
	menus,
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
						<input
							className='placeholder:text-black border rounded bg-beige py-2.5 px-3 w-full h-full'
							placeholder='Search'
						></input>
						<div className='absolute top-2.5 right-3'>
							<Image
								width={24}
								height={24}
								alt='search'
								src={"/search-icon.svg"}
							></Image>
						</div>
					</div>
					<div className='inline-block relative bg-beige border rounded w-32'>
						<select className='bg-transparent custom-select py-2.5 px-3 w-full'>
							{langOptions.map((option) => (
								<option
									key={option.id}
									value={option.id}
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
