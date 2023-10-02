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
import { ItemInCart, product } from "@/interface";
import { langOptions } from "@/utils";
import setLanguage from "next-translate/setLanguage";
import { setItemsInCart } from "@/reducers/cart";

import { menus, scrollToSection } from "@/utils";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { WelcomeDialog } from "@/sections/WelcomeDialog";

export default function Home({ products }: { products: product[] }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const itemsInCart: ItemInCart[] = useSelector(
		(state: any) => state.cart.items
	);
	const [openBurderMenu, setOpenBurgerMenu] = useState<boolean>(false);

	const setLocale = (locale: string) => {
		if (locale !== "en" && locale !== "ru" && locale !== "lv")
			throw new Error("no such locale");

		setLanguage(locale);
	};

	const addToCart = (item: ItemInCart) => {
		const incomeProductId = item.product.id;
		const productsId = itemsInCart.map((item) => item.product.id);

		if (productsId.includes(incomeProductId)) return;
		dispatch(setItemsInCart(item));
	};

	const sendContactUsData = async ({
		name,
		email,
		message,
	}: {
		name: string;
		email: string;
		message: string;
	}) => {
		try {
			const sendDataResponse = await axios.post(
				"https://bo.snowflake.club/contact-us/",
				{ name, email, message }
			);

			alert("Сообщение отправлено");
		} catch (error) {}
	};

	const goToCart = () => {
		router.push(`/cart`);
	};

	return (
		<main>
			<WelcomeDialog></WelcomeDialog>
			<Header
				menus={menus}
				langOptions={langOptions}
				goToSection={scrollToSection}
				setLocale={setLocale}
				setOpenBurgerMenu={() => setOpenBurgerMenu(true)}
				goToCart={goToCart}
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
			<ProductLine products={products} addToCart={addToCart}></ProductLine>
			<WhereToFind></WhereToFind>
			<ContactUs sendContactUsData={sendContactUsData}></ContactUs>
			<LandscapePatch direction='bottom'></LandscapePatch>
			<Footer menus={menus} goToSection={scrollToSection}></Footer>
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	let products: product[] | null = null;

	try {
		const productsResponse: any = await axios.get(
			"https://bo.snowflake.club/products/"
		);

		products = productsResponse.data;
	} catch (error) {
		console.log(error);
	}

	return { props: { products } };
};
