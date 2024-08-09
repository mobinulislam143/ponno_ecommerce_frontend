import {createSlice} from "@reduxjs/toolkit";


export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        loader: 'hidden'
    },
    reducers:{
        showLoader: (state)=>{
            state.loader=""
        },
        hideLoader: (state) => {
            state.loader = 'hidden'
        }
    }
})
export const {showLoader, hideLoader} = settingsSlice.actions
export default settingsSlice.reducer