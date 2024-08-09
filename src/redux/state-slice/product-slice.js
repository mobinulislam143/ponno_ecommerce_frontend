import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        AllProduct: [],
        CategoryByProductList: [],
        AllCategory: [],
        AllSubCategory: [],
        AllBrand: [],
        AllDivision: [],
        AllDistrict: [],
        ProductDetails: [],
        loading: false,
        error: null,
        ProductComment: []
    },
    reducers: {
        getAllProduct: (state, action) => {
            state.AllProduct = action.payload;
            state.loading = false;
            state.error = null;
        },
        getProductDetails: (state, action) => {
            state.ProductDetails = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllProductByCategory: (state, action) => {
            state.CategoryByProductList = action.payload;
            state.loading = false;
            state.error = null;
        },
        getCommentByProduct: (state, action) => {
            state.ProductComment = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllCategory: (state, action) => {
            state.AllCategory = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllSubCategory: (state, action) => {
            state.AllSubCategory = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllBrand: (state, action) => {
            state.AllBrand = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllDivision: (state, action) => {
            state.AllDivision = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllDistrict: (state, action) => {
            state.AllDistrict = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
});

export const { getAllProduct, getAllCategory, getAllProductByCategory, getProductDetails, setLoading, setError, clearError, getCommentByProduct, getAllBrand, getAllDivision, getAllSubCategory, getAllDistrict } = productSlice.actions;

export default productSlice.reducer;
