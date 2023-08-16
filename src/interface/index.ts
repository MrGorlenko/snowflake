export interface product {
	id: number;
	spine: string;
	book: string;
	bottle: string;
	price: number;
	name: string;
	brunch: string;
	country: string;
	category: string;
	volume: string;
	alcoholLevel: string;
	flavor: string;
	description: string;
}

export interface ItemInCart {
	product: product;
	amount: number;
	price: number;
}

export interface ItemInCartToPost extends Omit<ItemInCart, "product"> {
	product: number;
}

export interface Cart {
	items: ItemInCart[];
}
