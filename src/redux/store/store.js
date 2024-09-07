import { configureStore } from "@reduxjs/toolkit";
import settingReducer from '../state-slice/Setting-slice';
import productReducer from '../state-slice/product-slice';
import userReducer from '../state-slice/user-slice';

const store = configureStore({
    reducer: {
        settings: settingReducer,
        products: productReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
