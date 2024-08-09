import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        Profile: [],
        UserProduct: []

    },
    reducers: {
        getProfile: (state, action) => {
            state.Profile = action.payload
        },
        getUserProduct: (state, action) => {
            state.UserProduct = action.payload
        },

    }
})

export const {getProfile, getUserProduct} =userSlice.actions

export default userSlice.reducer