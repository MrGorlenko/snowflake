import { DistanceComponent } from "@/components/DistanceComponent";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ItemInCart, ItemInCartToPost } from "@/interface";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { setUpdatedItemsInCart } from "@/reducers/cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CartHeader, ItemInCartWidget, SummaryWidget } from "@/widgets/cart";
import axios from "axios";

export default function Cart() {
	const dispatch = useDispatch();
	const router = useRouter();
	const itemsInCart: ItemInCart[] = useSelector(
		(state: any) => state.cart.items
	);

	const totalPrice = itemsInCart.reduce((accumulator, current) => {
		accumulator += current.price * current.amount;
		return accumulator;
	}, 0);

	const setNewItemHandler = (newItem: ItemInCart) => {
		const newItemsInCart = itemsInCart.map((item) => ({
			...item,
			amount:
				item.product.id === newItem.product.id ? newItem.amount : item.amount,
		}));

		dispatch(setUpdatedItemsInCart(newItemsInCart));
	};

	const removeItem = (productId: number) => {
		const newItemsInCart = itemsInCart.filter(
			(item) => item.product.id !== productId
		);

		dispatch(setUpdatedItemsInCart(newItemsInCart));
	};

	useEffect(() => {
		if (itemsInCart.length === 0) router.push("/");
	}, [itemsInCart]);

	const createOrderItemRequest = (item: ItemInCartToPost) => {
		return new Promise((resolve, reject) =>
			axios
				.post(`http://127.0.0.1:8000/order-item/`, item)
				.then((response) => resolve(response))
				.catch((error) => reject(error))
		);
	};

	const createOrderRequest = (productsId: number[]) => {
		return new Promise((resolve, reject) =>
			axios
				.post(`http://127.0.0.1:8000/order/`, { products: productsId })
				.then((response) => resolve(response))
				.catch((error) => reject(error))
		);
	};

	const createOrderHandler = async () => {
		const itemsInCartToPost = itemsInCart.map((item) => ({
			...item,
			product: item.product.id,
		}));
		try {
			const arrayOfPromises = itemsInCartToPost.map((item) =>
				createOrderItemRequest(item)
			);
			const arrayOfOrderItemResponses = await Promise.all(arrayOfPromises);

			const itemsInOrderIds = arrayOfOrderItemResponses.map(
				(orderItemResponse: any) => orderItemResponse.data.id
			);

			const createOrderResponse = await createOrderRequest(itemsInOrderIds);
			alert("Заказ оформлен");
			dispatch(setUpdatedItemsInCart([]));
			router.push("/");
		} catch (error) {}
	};

	return (
		<main>
			<SectionWrapper id={"cart"}>
				<div className='min-h-screen'>
					<DistanceComponent></DistanceComponent>
					<CartHeader goBack={() => router.push("/")}></CartHeader>
					<DistanceComponent></DistanceComponent>

					<Box sx={{ maxWidth: "1200px", margin: "auto" }}>
						{itemsInCart.map((item, index) => (
							<ItemInCartWidget
								key={index}
								item={item}
								setNewItem={setNewItemHandler}
								removeItem={removeItem}
							></ItemInCartWidget>
						))}
					</Box>

					<DistanceComponent></DistanceComponent>

					<SummaryWidget
						totalPrice={totalPrice}
						onConfirm={createOrderHandler}
					></SummaryWidget>

					<DistanceComponent></DistanceComponent>
					<DistanceComponent></DistanceComponent>
				</div>
			</SectionWrapper>
		</main>
	);
}
