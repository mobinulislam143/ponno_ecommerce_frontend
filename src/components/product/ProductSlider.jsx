import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './ProductSlider.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);


function ProductSlider(props) {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation
          once: true,     // Whether animation should happen only once
        });
      }, []);
    return (
        <div className='py-4' data-aos="fade-up">
             <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
                <div data-src="product3.jpg" />
                <div data-src="product5.jpg" />
                <div data-src="product6.jpg" />
            </AutoplaySlider>
        </div>
    );
}

export default ProductSlider;