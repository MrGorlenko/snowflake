import { ButtonComponent } from "@/components/ButtonComponent";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { CounterComponent } from "@/components/CounterComponent";
import { ItemInCart } from "@/interface";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { setPriceString } from "@/utils";

export const ItemInCartWidget = ({
	item,
	setNewItem,
	removeItem,
}: {
	item: ItemInCart;
	setNewItem(item: ItemInCart): void;
	removeItem(productId: number): void;
}) => {
	const setItemWithNewAmount = (amount: number) => {
		const newItem = { ...item, amount };
		setNewItem(newItem);
	};

	return (
		<div
			className='grid lg:grid-cols-8 lg:grid-rows-1 
			 grid-rows-3 grid-cols-5
		   items-center pb-4 pt-4 border-bottom-solid border-b-2 border-solid
       border-dark-gray relative
		 '
		>
			<div className='col-span-1 lg:row-span-1 row-span-3 justify-self-center '>
				<Image
					src={item.product.bottle}
					width={63}
					height={185}
					alt={item.product.name}
				></Image>
			</div>
			<div
				className='lg:row-span-1 ld:order-2 lg:pl-0
			    row-span-2 col-span-3 pl-3'
			>
				<p className='font-recoleta-bold lg:text-lg text-black'>
					{item.product.name}
				</p>
				<p className='font-futura-regular text-black lg:text-md'>
					{item.product.category}
				</p>
			</div>
			<div
				className='col-span-2 row-span-1 pl-3
					lg:justify-self-end lg:col-span-3 lg:row-span-1 lg:pl-0
					text-black'
			>
				<ComponentWrapper
					sx={{ width: { xs: 100, lg: 220 }, height: { xs: 30, lg: 56 } }}
				>
					<CounterComponent
						value={item.amount}
						setValue={setItemWithNewAmount}
					></CounterComponent>
				</ComponentWrapper>
			</div>
			<div
				className='lg:col-span-2 lg:row-span-1 lg:order-4 
					justify-self-end'
			>
				<IconButton
					sx={{
						position: { lg: "relative", xs: "absolute" },
						top: { xs: 50, lg: { xs: "0.75rem", lg: 0 } },
						right: 0,
					}}
					onClick={() => removeItem(item.product.id)}
				>
					<div className='lg:block hidden'>
						<Image
							src={"/close-icon.svg"}
							width={27}
							height={27}
							alt={"remove"}
						></Image>
					</div>
					<div className='block lg:hidden'>
						<Image
							src={"/close-icon.svg"}
							width={18}
							height={18}
							alt={"remove"}
						></Image>
					</div>
				</IconButton>
			</div>
			<div className='col-span-1 lg:row-span-1 lg:order-5 justify-self-end text-black lg:pr-0 pr-3'>
				<p>{setPriceString(item.price)}</p>
			</div>
		</div>
	);
};

export const SummaryWidget = ({
	totalPrice,
	onConfirm,
}: {
	totalPrice: number;
	onConfirm(): void;
}) => {
	return (
		<Box sx={{ maxWidth: "1200px", margin: "auto" }}>
			<div className='grid grid-cols-8 lg:grid-rows-1 grid-rows-2'>
				<div className='lg:col-span-2 col-span-4 row-span-1'>
					<p className='font-futura-bold lg:text-2xl text-xl text-dark-gray'>
						Total amount:
					</p>
				</div>
				<div className='lg:col-span-3 col-span-4 justify-self-end row-span-1 lg:pr-0 pr-3'>
					<ComponentWrapper sx={{ width: { lg: 220 }, height: 56 }}>
						<p className='font-futura-bold lg:text-4xl text-black text-center'>
							{totalPrice}
						</p>
					</ComponentWrapper>
				</div>
				<div className='lg:col-span-3 col-span-8 lg:justify-self-end row-span-1'>
					<ComponentWrapper sx={{ width: { xs: "100%", lg: 350 }, height: 56 }}>
						<ButtonComponent variant='primary' onClick={onConfirm}>
							Next
						</ButtonComponent>
					</ComponentWrapper>
				</div>
			</div>
		</Box>
	);
};

export const CartHeader = ({ goBack }: { goBack(): void }) => {
	return (
		<div className='grid lg:grid-cols-3 grid-cols-5'>
			<div className='col-span-1'>
				<IconButton onClick={goBack}>
					<div className='lg:block hidden'>
						<Image
							width={53}
							height={12}
							src={"/arrow-icon.svg"}
							style={{ transform: "rotate(180deg)" }}
							alt={"go back"}
						></Image>
					</div>
					<div className='block lg:hidden'>
						<Image
							width={23}
							height={5}
							src={"/arrow-icon.svg"}
							style={{ transform: "rotate(180deg)" }}
							alt={"go back"}
						></Image>
					</div>
				</IconButton>
			</div>
			<div className='col-span-3 lg:col-span-1'>
				<h2 className='font-recoleta-bold lg:text-6xl text-3xl m-auto text-center text-black'>
					Shopping Cart
				</h2>
			</div>
			<div className='col-span-1'></div>
		</div>
	);
};
