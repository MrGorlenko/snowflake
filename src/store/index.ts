import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistCombineReducers } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "reduxjs-toolkit-persist";

import cartReducer from "../reducers/cart";

const persistConfig = {
	key: "snowflake",
	storage: storage,
	stateReconciler: autoMergeLevel1,
};

const _persistedReducer = persistCombineReducers(persistConfig, {
	cart: cartReducer,
});

export const store = configureStore({
	reducer: _persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export const persistor = persistStore(store);
