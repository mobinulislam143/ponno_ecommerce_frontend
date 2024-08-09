import axios from "axios";
import { create } from 'zustand'

const ProductStore = create((set) => ({
    ProductDetails: null,

    ProductDetailsRequest: async(id) => {
        try{
            let res=await axios.get(`/api/product-details/${id}`);
            if(res.data['status']==="success"){
                console.log(res.data['data'])
                set({ProductDetails:res.data['data']})
            }
        }catch(e){
            console.log("My error is "+ e)
        }
    }
}))
export default ProductStore