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

export const gallery = [
	{ id: 1, src: "/casestudy-01.jpg", gridClass: "row-span-2" },
	{ id: 2, src: "/casestudy-02.jpg", gridClass: "row-span-3" },
	{ id: 3, src: "/casestudy-03.jpg", gridClass: "row-span-3" },
	{ id: 4, src: "/casestudy-04.jpg", gridClass: "row-span-2" },
];

export const langOptions = [
	{ id: 1, name: "EN-US", locale: "en" },
	{ id: 2, name: "LV", locale: "lv" },
];

export const setPriceString = (price: number) => {
	return `${(price / 100).toFixed(2)}€`;
};
