import axios from "axios";
import store from '../../redux/store/store'
import { hideLoader, showLoader } from "../../redux/state-slice/Setting-slice";
import {  getAllBrand, getAllCategory, getAllDistrict, getAllDivision, getAllProduct,getAllProductByCategory, getAllSubCategory, getCommentByProduct, getProductDetails, setError, setLoading } from "../../redux/state-slice/product-slice";
import { ErrorToast, SuccessToast, getEmail, setEmail, setToken } from "../helper/FormHelper";
import Cookie from 'js-cookie'
import { getProfile, getUserProduct } from "../../redux/state-slice/user-slice";

const BaseUrl = "https://mern-ecommerce-ponnosheba-backend.vercel.app"

//user api
export async function RegistrationRequest(email, firstName,lastName,age,mobile,address, password, confirmPassword){
    store.dispatch(showLoader())
    let url = `${BaseUrl}/api/registration`
    const postBody = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        age: age,
        mobile: mobile,
        address: address,
        password: password,
        confirmPassword: confirmPassword
    }
    try{
        const res = await axios.post(url, postBody)
        if(res.status === 200){
            SuccessToast("Registration Success")
            store.dispatch(hideLoader())
            setEmail(email)
            return true;
        }else{
            ErrorToast("Can't Registered")
            return false
        }
    }catch(e){
        console.log(e.toString());
        store.dispatch(hideLoader())
    }
}

export async function VerifyEmailRequest(otp){
    store.dispatch(showLoader())
    let email = getEmail()
    console.log(email)
    let url = `${BaseUrl}/api/verifyEmail/${email}/${otp}`;
    try{
        let res = await axios.post(url)
        console.log(`Response status: ${res.status}`);
        if(res.status === 200){
            SuccessToast("Email Verified")
            store.dispatch(hideLoader())
            return true
        }else{
            ErrorToast("Email can't verified")
            store.dispatch(hideLoader())

        }
    }catch(e){
        console.log(e.toString());
        store.dispatch(hideLoader())
    }
}

export async function LoginRequest(email, password) {
    store.dispatch(showLoader())
    const url = `${BaseUrl}/api/login`;
    const postBody = {
        email: email,
        password: password
    };
    try {
        const res = await axios.post(url, postBody);
        console.log(email, password)

        if  (res.data['status'] === "success"){
            setToken(res.data['token'])
            SuccessToast('Login Success');
            store.dispatch(hideLoader())
            return true;
        } 
        else {
            ErrorToast('Something Went Wrong');
            store.dispatch(hideLoader())
            return false;
        }
    } catch (err) {
        store.dispatch(hideLoader())
        console.error(err.toString());
        return false;
    }
}



export async function AllBrandRequest(){
    store.dispatch(showLoader())
    let url = `${BaseUrl}/api/getAllBrand`
    try{
        const res = await axios.get(url)
        if(res.status === 200){
            store.dispatch(hideLoader())
            console.log(res.data)
            store.dispatch(getAllBrand(res.data['data']))
        }
    }catch(e){
        console.log(e.toString());
        store.dispatch(hideLoader())
    }
}


export async function AllCategoryRequest() {
    store.dispatch(showLoader());
    let url = `${BaseUrl}/api/getAllCategory`;
    try {
        const res = await axios.get(url);
        if (res.status === 200) {
            store.dispatch(hideLoader());
            store.dispatch(getAllCategory(res.data['data']));
        }
    } catch (e) {
        console.log(e.toString());
        store.dispatch(hideLoader());
    }
}

export async function AllSubCategoryRequest(CategoryId) {
    store.dispatch(showLoader());
    let url = `${BaseUrl}/api/getSubCategory/${CategoryId}`;
    try {
        const res = await axios.get(url);
        if (res.status === 200) {
            store.dispatch(getAllSubCategory(res.data['data']))
            store.dispatch(hideLoader());
            return res.data['data'];  // Return subcategory data
        }
    } catch (e) {
        console.log(e.toString());
        store.dispatch(hideLoader());
    }
    return [];
}

export async function AllDivisionRequest() {
    store.dispatch(showLoader());
    let url = `${BaseUrl}/api/getdivision`;
    try {
        const res = await axios.get(url);
        if (res.status === 200) {
            store.dispatch(hideLoader());
            console.log(res.data);
            store.dispatch(getAllDivision(res.data['data']));
        }
    } catch (e) {
        console.log(e.toString());
        store.dispatch(hideLoader());
    }
}

export async function getDistrictRequest(division) {
    store.dispatch(showLoader());
    let url = `${BaseUrl}/api/getdistricts/${division}`;
    try {
        const res = await axios.get(url);
        if (res.status === 200) {
            store.dispatch(hideLoader());
            console.log(res.data);
            return res.data['data'];  // Ensure the correct data is returned
        }
    } catch (e) {
        console.log(e.toString());
        store.dispatch(hideLoader());
    }
    return [];  // Return an empty array in case of an error
}


export async function PostAdsRequest(postBody){
    store.dispatch(showLoader())
    let url = `${BaseUrl}/api/createUserProduct`
    try{
        const res = await axios.post(url, postBody,  {
            headers: {
                'token': Cookie.get('token'),
                'Content-Type': 'application/json'
            }
        } )
        if(res.status === 200){
            store.dispatch(hideLoader())
            console.log(res.data)
        }
    }catch(e){
        console.log(e.toString());
        store.dispatch(hideLoader())
    }
}





export async function ListProductByCategoryRequest(CategoryId) {
    // store.dispatch(showLoader()); 
    let url = `${BaseUrl}/api/ProductListByCategory/${CategoryId}`;
    try {
        const res = await axios.get(url);
        if  (res.data['status'] === "success") {
            // store.dispatch(hideLoader());
            console.log("my data is= ", res.data['data']);
            store.dispatch(getAllProductByCategory(res.data['data'])); 
        } else {
            console.log("Data is undefined");
            // store.dispatch(hideLoader());
            return null; 
        }
    } catch (e) {
        console.log(e.toString());
        // store.dispatch(hideLoader()); 
        return null;
    }
}



export async function AdsDetailsRequest(id) {
    let url = `${BaseUrl}/api/product-details/${id}`;
    try {
        const res = await axios.get(url);
        if (res.data['status'] === "success") {
            console.log('my product price: ', res.data['data'][0]);
            store.dispatch(getProductDetails(res.data['data'][0]));
        } else {
            console.log("product details is undefined");
            return null; 
        }
    } catch (e) {
        console.log(e.toString());
    }
}



export async function getCommentByProductRequest(id) {
    let url = `${BaseUrl}/api/getCommentByProduct/${id}`;
    try {
        const res = await axios.get(url);
        if (res.status === 200) {
            console.log('my comment ', res.data['data']);
            store.dispatch(getCommentByProduct(res.data['data']));
        } else {
            console.log("product details is undefined");
            return null; 
        }
    } catch (e) {
        console.log(e.toString());
    }
}

export async function AllProduct(){
    store.dispatch(showLoader())
    let url = `${BaseUrl}/api/getallProducts`
    try{
        const res = await axios.get(url)
        if(res.status === 200){
            store.dispatch(hideLoader())
            console.log(res.data['data'])
            store.dispatch(getAllProduct(res.data['data']))
        }

    }catch(e){
        console.log(e.toString());
        store.dispatch(hideLoader())
    }
}



// user Manage Api

export async function getProfileRequest() {
    store.dispatch(showLoader());
    const token = Cookie.get('token'); // Ensure you have this token in your cookies
    console.log('Token:', token);
  
    let url = `${BaseUrl}/api/getProfile`;
  
    try {
      const res = await axios.get(url, {
        headers: {
            'token': Cookie.get('token')
        }
      });
  
      console.log('Response Data:', res.data);
      if (res.data.status === 'success') {
        store.dispatch(hideLoader());
        store.dispatch(getProfile(res.data.data)); // Update Redux state with profile data
      } else {
        console.error('Unexpected response status:', res.data.status);
        store.dispatch(hideLoader());
      }
    } catch (e) {
      console.error('Error fetching profile:', e.response?.data || e.message || e);
      store.dispatch(hideLoader());
    }
  }
  




  export async function updateProfileImageRequest(imageData) {
    store.dispatch(showLoader());
    
    const url = `${BaseUrl}/api/updateProfileImage`;
    const formData = new FormData();
    formData.append('image', imageData);
  
    try {
      const res = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token': Cookie.get('token')
        }
      });
  
      if (res.data.status === "success") {
        store.dispatch(hideLoader());
        store.dispatch(getProfile(res.data.data));
      } else {
        console.error('API response status:', res.data.status);
        store.dispatch(hideLoader());
      }
    } catch (e) {
      console.error('Error uploading image:', e);
      store.dispatch(hideLoader());
    }
  }



export async function UserAdsRequest(){
    store.dispatch(showLoader())
    let url = `${BaseUrl}/api/usersProduct`
    try{
        const res = await axios.get(url, {
            headers: {
                'token': Cookie.get('token')
            }
        })
        if(res.data['status'] === "success"){
            store.dispatch(hideLoader())
            console.log(res.data['data'])
            
            store.dispatch(getUserProduct(res.data['data']))
        }
    }catch(e){
        console.log(e.toString());
        store.dispatch(hideLoader())
    }
}
export async function EditProfileRequest(postBody){
    store.dispatch(showLoader())
    let url = `${BaseUrl}/api/updateProfile`
    try{
        const res = await axios.post(url, postBody,  {
            headers: {
                'token': Cookie.get('token'),
            }
        } )
        if(res.status === 200){
            store.dispatch(hideLoader())
            console.log(res.data)
            store.dispatch(getProfile(res.data['data']))
        }
    }catch(e){
        console.log(e.toString());
        store.dispatch(hideLoader())
    }
}


export async function LogoutRequest(){
    store.dispatch(showLoader())
    let url = `${BaseUrl}/api/logout`
    try{
        const res = await axios.get(url, {
            headers: {
                'token': Cookie.get('token')
            }
        })
        if(res.data['status'] === "success"){
            store.dispatch(hideLoader())
            Cookie.remove('token')
            localStorage.clear()
        }
    }catch(e){
        console.log(e.toString());
        store.dispatch(hideLoader())
    }
}
