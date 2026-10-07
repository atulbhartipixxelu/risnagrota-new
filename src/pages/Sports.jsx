import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sports() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const prevArrow = <FontAwesomeIcon icon={faCircleChevronLeft} />;
    const nextArrow = <FontAwesomeIcon icon={faCircleChevronRight} />;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
    };

    const [eventDetails, setEventDetails] = useState([]);
    const categoryId = 6;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}get-category-event-detail?id=${categoryId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.data && data.data.length > 0) {
                    setEventDetails(data.data[0].event_details);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [categoryId]);


    return (

        <div className={'academicspage'}>


            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Sports </h2>
                        <p className="para-18 gd">"The five S's of sports training are:  stamina, speed, strength, skill, and spirit; but the greatest of this is spirit"- Ken Doherty </p>
                        <p className="para-18"> At Rainbow International School, we lay strong emphasis on sports and physical development. We make this an ideal and unparalleled place for various sports training programs. The school boasts of international standard sporting facilities for Table Tennis, Gymnastics, Cricket, Badminton, Judo, Karate, Horse Riding, Swimming, Yoga only to mention a few. Our sports curriculum is planned and designed for students to develop and enhance skills like strength, speed, endurance, agility, flexibility, control, balance etc. We believe in mass participation, exposing our students to a number of sports events at Inter House, Inter-School, State, National and International level. Every student is encouraged to join at least one school sports team. Our coaches are well qualified, young and energetic with expertise in their area of skill.</p>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- Sports ----- */}

            <section className="sports-block">
                {eventDetails.map((event, index) => (
                    <div key={index} className="sports-box">
                        <div className="container">
                            <div className="sports-box-data">
                                <h2 className="hdng-h2">{event.event_name}</h2>
                                <p className="para-16">{event.event_description || ''}</p>
                            </div>

                            <div className="sports-box-images">
                                <Slider {...settings}>
                                    {event.event_images &&
                                        event.event_images.map((image, imageIndex) => (
                                            <div key={imageIndex}>
                                                <img src={image} alt={`Event Image ${imageIndex + 1}`} />
                                            </div>
                                        ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                ))}

            </section>

            {/* ----- Sports ----- */}


            {/* ----- Table Tennis ----- */}

            <section className="sports-table-tennis">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='image_tennis_ff'>
                                <img src="images/German/tennis_banner.jfif" alt="tennis_banner"/>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='Student_reasons'>
                                <h2>Chasing Dreams, Serving Pride: Rainbow Champs Set to Shine on International Stage </h2>
                                <p>In a proud and commendable achievement, two students from Rainbow International School’s Khelo India Residential Academy – Naman Bhatnagar and Akash Rajavelu – have been selected to represent India at the esteemed South Asian Table Tennis Championship, scheduled to be held in Kathmandu, Nepal, from April 24 to 27, 2025. The championship will witness participation from eight nations. </p>
                                <p>Principal Dr  Chhavi Kashyap expressed immense pride in their accomplishment, highlighting that this is not their first international appearance, as they have previously represented India on global platforms. He credited their success to their dedication, training 10 hours daily  and the guidance of international coach Mr. Ravi Shankar Acharya. This milestone not only brings honour to the school and the state but also inspires a new generation of athletes to dream big and aim high.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Table Tennis ----- */}


        </div>

    )
}


export default Sports