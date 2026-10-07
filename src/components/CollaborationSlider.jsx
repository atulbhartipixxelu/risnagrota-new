
import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CollaborationSlider = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (

        <div className='row design-parents-video'>
            <Slider {...settings}
                slidesToShow={5}
                dots={false}
                arrows={true}
                autoplay={true}
                autoplaySpeed={2000}
            >
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/01-rainbow.png" alt="01-rainbow" />
                    <h4>Aakrshita</h4>
                    <p>NIT, Hamirpur</p>
                </div>
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/02-rainbow.png" alt="02-rainbow" />
                    <h4>Abhay Bharti</h4>
                    <p>AFMC, Pune</p>
                </div>
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/03-rainbow.png" alt="02-rainbow" />
                    <h4>Anuj</h4>
                    <p>NIT, Hamirpur</p>
                </div>
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/04-rainbow.png" alt="03-rainbow" />
                    <h4>Arnav</h4>
                    <p>JIIT, Noida</p>
                </div>
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/05-rainbow.png" alt="04-rainbow" />
                    <h4>Arushi</h4>
                    <p>RGMC, Hamirpur</p>
                </div>
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/06-rainbow.png" alt="05-rainbow" />
                    <h4>Aryan</h4>
                    <p>NIT, Hamirpur</p>
                </div>
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/07-rainbow.png" alt="06-rainbow" />
                    <h4>Ishita</h4>
                    <p>NIT, Hamirpur</p>
                </div>
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/08-rainbow.png" alt="07-rainbow" />
                    <h4>Nidish</h4>
                    <p>NIT, Hamirpur</p>
                </div>
                <div className='slider-pret'>
                    <img src="images/rainbow-alumni/09-rainbow.png" alt="08-rainbow" />
                    <h4>Sonal</h4>
                    <p>NIT, Hamirpur</p>
                </div>
              
            </Slider>
        </div>

    );
};

export default CollaborationSlider;