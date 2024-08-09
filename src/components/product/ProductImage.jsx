import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';
import ProductStore from '../ProductStore';
import { useSelector } from 'react-redux';

function ProductImage(props) {
    const ProductDetails = useSelector((state) => state.products.ProductDetails)

    // Assuming ProductDetails is an array and you want to access the first element's image details
    const img1 = ProductDetails?.details?.img1 || 'default-image.jpg'; // Fallback in case img1 is not available
    const img2 = ProductDetails?.details?.img2 || 'default-image.jpg'; // Fallback in case img1 is not available
    const img3 = ProductDetails?.details?.img3 || 'default-image.jpg'; // Fallback in case img1 is not available
    const img4 = ProductDetails?.details?.img4 || 'default-image.jpg'; // Fallback in case img1 is not available
    const img5 = ProductDetails?.details?.img5 || 'default-image.jpg'; // Fallback in case img1 is not available

    let images = [
        { original: img1, thumbnail: img1 },
        { original: img2, thumbnail: img2 },
        { original: img3, thumbnail: img3 },
        { original: img4, thumbnail: img4 },
        { original: img5, thumbnail: img5 },
    ];

    return (
        <ImageGallery items={images} />
    );
}

export default ProductImage;
