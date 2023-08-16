import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import { SectionHeading } from "../components/SectionHeading";
import { DistanceComponent } from "@/components/DistanceComponent";
import { Box } from "@mui/material";
import { ItemInCart, product } from "@/interface";

import { DialogWithProduct } from "@/widgets/product-line";

export const ProductLine: FunctionComponent<{
	products: product[];
	addToCart(cartItem: ItemInCart): void;
}> = ({ products, addToCart }) => {
	const [showDetails, setShowDetails] = useState(false);
	const [receiptToShow, setReceiptToShow] = useState<product | null>(null);
	const [fadeIn, setFadeIn] = useState(false);
	const [amount, setAmount] = useState(1);

	const getReceiptToShowById = (receiptId: number, products: product[]) => {
		const newReceiptToShow =
			products.find((receipt) => receipt.id === receiptId) || false;
		if (!newReceiptToShow) throw new Error("no such product");

		return newReceiptToShow;
	};

	const selectBooksSpineHandler = (receiptId: number) => {
		const newReceiptToShow = getReceiptToShowById(receiptId, products);
		setReceiptToShow(newReceiptToShow);
		setShowDetails(true);
	};

	const setFadeInHandler = () => {
		setFadeIn(true);
		setTimeout(() => {
			setFadeIn(false);
		}, 450);
	};

	const setCurrentReceiptToShowHandler = (direction: "next" | "prev") => {
		if (!receiptToShow) return;
		let newReceiptToShow: product | null = null;
		setFadeInHandler();
		if (direction === "next") {
			const currentIndex = products.findIndex(
				(product) => product.id === receiptToShow.id
			);
			const newProduct = products[currentIndex + 1]
				? products[currentIndex + 1]
				: products[0];
			newReceiptToShow = getReceiptToShowById(newProduct.id, products);
		}
		if (direction === "prev") {
			const currentIndex = products.findIndex(
				(product) => product.id === receiptToShow.id
			);
			const newProduct = products[currentIndex - 1]
				? products[currentIndex - 1]
				: products[products.length - 1];
			newReceiptToShow = getReceiptToShowById(newProduct.id, products);
		}
		if (!newReceiptToShow) return;
		setReceiptToShow(newReceiptToShow);
		setAmount(1);
	};

	const addToCartHandler = () => {
		if (!receiptToShow) return;

		const ItemInCart: ItemInCart = {
			product: receiptToShow,
			amount: amount,
			price: receiptToShow.price,
		};

		addToCart(ItemInCart);
	};

	return (
		<section id={"product-line"} className='bg-beige w-100'>
			<>
				<DistanceComponent type='top'></DistanceComponent>
				<SectionHeading
					title={"Product Line"}
					subtitle='Click on the books to learn more '
				></SectionHeading>
				<DistanceComponent></DistanceComponent>
				<div className='relative'>
					<div className='container m-auto ps-5 pe-5'>
						<div className='grid grid-cols-7 justify-items-center'>
							{products.map((receipt) => (
								<div
									key={receipt.id}
									className='col-span-1 cursor-pointer transition duration-300 hover:scale-105'
									onClick={() => selectBooksSpineHandler(receipt.id)}
								>
									<Image
										src={receipt.spine}
										width={113}
										height={775}
										alt={receipt.id.toString()}
									></Image>
								</div>
							))}
						</div>
					</div>
					<div
						className='w-full bg-cover '
						style={{
							backgroundImage: `url("/table.png")`,
							height: 257,
							marginTop: -50,
						}}
					></div>
				</div>

				<Box pt={10}></Box>
			</>

			<DialogWithProduct
				show={showDetails}
				fadeIn={fadeIn}
				productToShow={receiptToShow}
				products={products}
				amount={amount}
				setShow={(show) => setShowDetails(show)}
				setCurrentProductToShowHandler={setCurrentReceiptToShowHandler}
				setProductToShow={setReceiptToShow}
				setAmount={setAmount}
				addToCart={addToCartHandler}
			></DialogWithProduct>
		</section>
	);
};
