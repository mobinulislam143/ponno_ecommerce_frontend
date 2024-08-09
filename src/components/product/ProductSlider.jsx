import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './ProductSlider.css'
const AutoplaySlider = withAutoplay(AwesomeSlider);


function ProductSlider(props) {
    return (
        <div className='py-4'>
             <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
                <div data-src="product3.jpg" />
                <div data-src="product5.jpg" />
                <div data-src="product6.jpg" />
            </AutoplaySlider>
        </div>
    );
}

export default ProductSlider;