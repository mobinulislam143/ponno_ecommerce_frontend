import axios from 'axios';
import { create } from 'zustand';
import Cookie from 'js-cookie';

const BaseUrl = "https://ponnosheba-backend.onrender.com";

const ProductStore = create((set) => ({

    profileData: null,
    UpdateProfileImageReq : async (imageData) => {
      // Properly concatenate BaseUrl and endpoint
      const url = `${BaseUrl}/api/updateProfileImage`;
      const formData = new FormData();
      formData.append('image', imageData);

        try {
          const res = await axios.post(url, formData, {
            headers: {
              // Let axios handle Content-Type for FormData
              'token': Cookie.get('token')
            }
          });
          if (res.data.status === 'success') {
           set({ profileData: res.data.data });
          } else {
            console.error('API response status:', res.data.status);          
          }
        } catch (e) {
          console.log(e);
          return false;
        }
      },
      
}));

export default ProductStore;
