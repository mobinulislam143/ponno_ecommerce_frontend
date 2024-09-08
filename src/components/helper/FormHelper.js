// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';

const EmailRegx = /\S+@\S+\.\S+/;
const MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
import Cookie from 'js-cookie'


class FormHelper {
    IsEmpty(value) {
        return value === undefined || value === null || value.trim() === '';
    }

    setEmail(email) {
        sessionStorage.setItem('email', email);
    }

    getEmail() {
        return sessionStorage.getItem('email');
    }

    IsMobile(value) {
        return value !== undefined && value !== null && MobileRegx.test(value);
    }

    setToken(token) {
        Cookie.set('token', token);
        localStorage.setItem('token', token)
    }
    
    getToken() {
        return Cookie.get('token'), localStorage.getItem('token');
        
    }

    IsEmail(value) {
        return value !== undefined && value !== null && EmailRegx.test(value);
    }

    ErrorToast(msg) {
        toast.error(msg, { position: 'bottom-center' });
    }

    SuccessToast(msg) {
        toast.success(msg, { position: 'bottom-center' });
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
}

const formHelperInstance = new FormHelper();

export const {
    IsEmpty,
    IsMobile,
    IsEmail,
    ErrorToast,
    SuccessToast,
    setEmail,
    getEmail,
    setToken,
    getToken,
    getBase64
} = formHelperInstance;
