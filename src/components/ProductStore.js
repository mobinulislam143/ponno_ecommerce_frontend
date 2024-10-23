import axios from 'axios';
import { create } from 'zustand';
import Cookie from 'js-cookie'; // Ensure you import Cookie if you use it for tokens

const BaseUrl = "https://ponnosheba-backend.onrender.com"
const ProductStore = create((set) => ({

    ProductDetails: null,

    ProductDetailsRequest: async (id) => {
        try {
            let res = await axios.get(`/api/product-details/${id}`);
            if (res.data['status'] === 'success') {
                console.log(res.data['data']);
                set({ ProductDetails: res.data['data'] });
            }
        } catch (e) {
            console.log('My error is ' + e);
        }
    },

    postAdsRequest: async (postBody) => {
        try {
            const res = await axios.post(`${BaseUrl}/api/createUserProduct`, postBody, {
                headers: {
                    'token': Cookie.get('token'),
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.status === 200) {
                console.log(res.data);
                
            }
        } catch (e) {
            console.log('My error is ' + e);
        }
    }
}));

export default ProductStore;
