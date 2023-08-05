export interface product {
	id: number;
	spine: string;
	book: string;
	bottle: string;
	price: number;
	priceLabel: string;
	name: string;
	brunch: string;
	country: string;
	category: string;
	volume: string;
	alcoholLevel: string;
	flavor: string;
	description: string;
}

export const menus = [
	{
		id: 1,
		label: "About us",
		sectionId: "introduction",
	},
	{
		id: 2,
		label: "Products",
		sectionId: "product-line",
	},
	{
		id: 3,
		label: "Where to find",
		sectionId: "where-to-find",
	},
	{
		id: 4,
		label: "Contacts",
		sectionId: "contacts",
	},
];

export const scrollToSection = (sectionId: string) => {
	const section = document.getElementById(sectionId);
	if (!section) throw new Error("no such section!");
	const offsetTop = section.offsetTop;
	window.scrollTo({
		top: offsetTop,
		behavior: "smooth",
	});
};

export const receipts: product[] = [
	{
		id: 1,
		spine: "/spin-1.png",
		book: "/book-1.png",
		bottle: "/bottle-1.png",
		price: 0,
		priceLabel: "00.00€",
		brunch: "/brunch-1.png",
		name: "Great Cherry",
		country: "Latvia",
		category: "Liquor",
		volume: "0.5L",
		alcoholLevel: "20% vol",
		flavor: "Cherry",
		description:
			"Our Cherry Liquor is a testament to our unwavering commitment to quality and passion for the art of distillation. Each batch is meticulously infused with hand-picked cherries for a period of three months, allowing their rich flavors to infuse into the smooth, velvety liquid. We source only the finest, 100% organic cherries, ensuring that every sip is a pure indulgence of nature's bounty.",
	},
	{
		id: 2,
		spine: "/spin-2.png",
		book: "/book-2.png",
		bottle: "/bottle-2.png",
		price: 0,
		priceLabel: "00.00€",
		brunch: "/brunch-2.png",
		name: "Great Cranberry",
		country: "Latvia",
		category: "Liquor",
		volume: "0.5L",
		alcoholLevel: "20% vol",
		flavor: "Cranberry",
		description:
			"Our Cranberry Liquor is the epitome of meticulous craftsmanship and dedication to quality. Each batch begins with handpicked, succulent cranberries that form the heart of this remarkable elixir. Over a period of three months, these vibrant berries undergo a painstaking infusion process, allowing their essence to infuse every drop. We take pride in sourcing only the finest 100% organic cranberries, ensuring a pure and authentic flavor profile that captures the essence of this remarkable fruit.",
	},
	{
		id: 3,
		spine: "/spin-3.png",
		book: "/book-3.png",
		bottle: "/bottle-3.png",
		price: 0,
		priceLabel: "00.00€",
		brunch: "/brunch-3.png",
		name: "Great Blackcurrant",
		country: "Latvia",
		category: "Liquor",
		volume: "0.5L",
		alcoholLevel: "20% vol",
		flavor: "Blackcurrant",
		description:
			"Our Blackcurrant Liquor is the embodiment of meticulous craftsmanship, where every step is executed with utmost care and devotion. Handpicked blackcurrants serve as the foundation for this exceptional elixir, and their natural essence infuses our spirit over a period of three months. We take pride in using only the finest 100% organic blackcurrants, ensuring a pure and authentic flavor profile that captures the true essence of this exquisite fruit.",
	},
	{
		id: 4,
		spine: "/spin-4.png",
		book: "/book-4.png",
		bottle: "/bottle-4.png",
		price: 0,
		priceLabel: "00.00€",
		brunch: "/brunch-4.png",
		name: "Great Cherry",
		country: "Latvia",
		category: "Liquor",
		volume: "0.5L",
		alcoholLevel: "20% vol",
		flavor: "Strawberry",
		description:
			"Our Strawberry Liquor is the result of a meticulous process that begins with hand-picked, succulent strawberries. Each batch undergoes a carefully curated infusion period of three months, allowing the natural flavors of the berries to permeate every drop. We take pride in using only 100% organic strawberries, ensuring the purest expression of their essence.",
	},
	{
		id: 5,
		spine: "/spin-5.png",
		book: "/book-5.png",
		bottle: "/bottle-5.png",
		price: 0,
		priceLabel: "00.00€",
		brunch: "/brunch-5.png",
		name: "Great Horseradish",
		country: "Latvia",
		category: "Liquor",
		volume: "0.5L",
		alcoholLevel: "20% vol",
		flavor: "Horseradish",
		description:
			"Our Horseradish Liquor is a testament to our unwavering commitment to quality and innovation. Carefully selected horseradish roots serve as the foundation for this unique elixir, undergoing a meticulous infusion process that spans three months. We take pride in using only the finest 100% organic horseradish, ensuring that each sip delivers an authentic and powerful flavor experience.",
	},
	{
		id: 6,
		spine: "/spin-6.png",
		book: "/book-6.png",
		bottle: "/bottle-6.png",
		price: 0,
		priceLabel: "00.00€",
		brunch: "/brunch-6.png",
		name: "Premium Vodka",
		country: "Latvia",
		category: "Liquor",
		volume: "0.5L",
		alcoholLevel: "20% vol",
		flavor: "Clean & Pure",
		description:
			"Our premium vodka is the pinnacle of craftsmanship and dedication to quality. Distilled exclusively from the finest organic wheat grains, every sip embodies the essence of purity and excellence. We take great care in sourcing the highest quality ingredients, ensuring that only the finest grains are selected for our meticulous distillation process. Crafted with passion and an unwavering commitment to perfection, our premium vodka stands as a testament to the artistry and skill of our master distillers.",
	},
	{
		id: 7,
		spine: "/spin-7.png",
		book: "/book-7.png",
		bottle: "/bottle-7.png",
		price: 0,
		priceLabel: "00.00€",
		brunch: "/brunch-7.png",
		name: "Apple Brandy",
		country: "Latvia",
		category: "Liquor",
		volume: "0.5L",
		alcoholLevel: "20% vol",
		flavor: "Apple",
		description:
			"Every drop of our Apple Brandy is the culmination of our unwavering commitment to quality and innovation. We start with handpicked, perfectly ripe apples carefully selected from the finest orchards. These apples undergo a meticulous fermentation and distillation process, guided by the expertise honed through years of experience. The result is an apple brandy that exudes the vibrant character and natural essence of the fruit.",
	},
];

export const introductionContentBlocks = [
	{
		id: 1,
		title: "Crafted with passion",
		text: "Discover our exquisite handmade | spirits, a labor of love",
	},
	{
		id: 2,
		title: "Unlocking the secrets",
		text: "A journey through our rich | history of top-secret formulas",
	},
	{
		id: 3,
		title: "Unparalleled quality ",
		text: " Indulge in the art of true | craftsmanship",
	},
	{
		id: 4,
		title: "Meticulously selected | ingredients",
		text: " Elevate your palate with | our Handcrafted Spirits",
	},
];
