import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        Profile: [],
        UserProduct: [],
        CreateUserProduct: [],
        loading: false,
        error: null,

    },
    reducers: {
        getProfile: (state, action) => {
            state.Profile = action.payload
            state.loading = false;
            state.error = null;
        },
        getUserProduct: (state, action) => {
            state.UserProduct = action.payload
            state.loading = false;
            state.error = null;
        },
        UserCreateProduct: (state, action) => {
            state.CreateUserProduct = action.payload
            state.loading = false;
            state.error = null;
        },

    }
})

export const {getProfile, getUserProduct,UserCreateProduct} =userSlice.actions

export default userSlice.reducer