import { Cart } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Cart = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		setItemsInCart(state, action) {
			state.items = [...state.items, action.payload];
		},

		setUpdatedItemsInCart(state, action) {
			state.items = action.payload;
		},
	},
});

export const { setItemsInCart } = cartSlice.actions;
export const { setUpdatedItemsInCart } = cartSlice.actions;
export default cartSlice.reducer;
