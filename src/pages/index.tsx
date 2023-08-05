import "../globals.css";
import Header from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LandscapePatch } from "@/sections/LandscapePatch";
import { Introduction } from "@/sections/Introduction";
import { Moments } from "@/sections/Moments";
import { WhereToFind } from "@/sections/WhereToFind";
import { ContactUs } from "@/sections/ContactUs";
import { Footer } from "@/sections/Footer";
import { ProductLine } from "@/sections/ProductLine";
import { BurgerMenu } from "@/sections/BurgerMenu";
import { useState } from "react";

import { menus, scrollToSection } from "@/utils";

export default function Home() {
	const [openBurderMenu, setOpenBurgerMenu] = useState<boolean>(false);

	return (
		<main>
			<Header
				menus={menus}
				goToSection={scrollToSection}
				setOpenBurgerMenu={() => setOpenBurgerMenu(true)}
			></Header>
			<BurgerMenu
				open={openBurderMenu}
				menus={menus}
				goToSection={scrollToSection}
				setOpen={setOpenBurgerMenu}
			></BurgerMenu>
			<Hero></Hero>
			<LandscapePatch direction='top'></LandscapePatch>
			<Introduction goToSection={scrollToSection}></Introduction>
			<Moments></Moments>
			<ProductLine></ProductLine>
			<WhereToFind></WhereToFind>
			<ContactUs></ContactUs>
			<LandscapePatch direction='bottom'></LandscapePatch>
			<Footer menus={menus} goToSection={scrollToSection}></Footer>
		</main>
	);
}
