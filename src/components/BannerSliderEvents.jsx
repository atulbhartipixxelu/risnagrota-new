import React from 'react';
import Slider from 'react-slick'; // Ensure this is imported

const SliderEventsBanner = () => {
    // Slider settings for Slick
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Autoplay duration
    };

    return (
        <div className="slider_events_banner">
            <div className="container">
                <Slider {...settings} className="slider_images_events">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/images/awards_himancahl.jpg" alt="Slider_Banner_02" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/images/awards_himancahl.jpg" alt="Slider_Banner_02" />
                    </a>
                </Slider>
            </div>
        </div>
    );
};

export default SliderEventsBanner;