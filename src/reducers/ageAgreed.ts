import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	over18: false,
};

const ageAgreedSlice = createSlice({
	name: "ageAgreed",
	initialState: initialState,
	reducers: {
		setAgeAgreed(state, action) {
			state.over18 = action.payload;
		},
	},
});

export const { setAgeAgreed } = ageAgreedSlice.actions;
export default ageAgreedSlice.reducer;
